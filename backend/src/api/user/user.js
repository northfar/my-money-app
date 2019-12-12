const restful = require('node-restful')
const mongoose = restful.mongoose

const UserSchema =  new mongoose.Schema({
    user: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true}
})

module.exports = restful.model('User', UserSchema)