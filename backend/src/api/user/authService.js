const _ = require('lodash')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('./user')
const env = require('../../.env')

const emailRegex = /\S+@\S+.\S+/
const passwordRegex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/

const sendErrorsFromDB = (res, dbErrors) => {
    const errors = []
    _.forIn(dbErrors.errors, error => errors.push(error))
    return res.status(400).json({errors})
}

const login = (req, res, next) => {
    const email = req.body.email || ''
    const password = req.body.password || ''

    User.findOne({email}, (err, user) => {
        if(err){
            return sendErrorsFromDB(res, err)
        }
        else if(user && bcrypt.compareSync(password, user.password)){
            const token = jwt.sign({...user}, env.authSecret, {
                expiresIn: 86400
            })
            const {name, email} = user
            res.json({name, email, token})
        }
        else{
            res.status(400).send({ errors: ['Usuário/Senha inválidos'] })
        }
    })
}

const validateToken = (req, res, next) =>{
    const token = req.body.token || ''

    jwt.verify(token, env.authSecret, function(err, decoded){
        return res.status(200).send({valid: !err})
    })
}

const signup = (req, res, next) => {
    const name = req.body.name || ''
    const email = req.body.email || ''
    const password = req.body.password || ''
    const confirmPassword = req.body.confirmPassword || ''

    if(!email.match(emailRegex)){
        return res.status(400).send({errors: ['Email informado é inválido']})
    }

    if(!password.match(passwordRegex)){
        return res.status(400).send(
            {errors: ['Senha deve conter: letras minusculas e maisculas, dígitos, caracteres especiais e deve ter entre 6 e 20 caracteres ']
        })
    }

    const salt = bcrypt.genSaltSync()
    const passwordHash = bcrypt.hashSync(password, salt)
    if(!bcrypt.compareSync(confirmPassword, passwordHash)){
        return res.status(400).send({errors: ['Senhas não conferem']})
    }

    User.findOne({email}, (err, user) =>{
        if(err){
            return sendErrorsFromDB(res, err)
        }
        else if(user){
            return res.status(400).send({errors: ['Usuário já cadastrado']})
        }
        else{
            const newUser = new User({name, email, password: passwordHash})
            newUser.save(err => {
                if(err){
                    return sendErrorsFromDB(res, err)
                }
                else{
                    login(req, res, next)
                }
            })
        }
    })

}

module.exports = {login, signup, validateToken}