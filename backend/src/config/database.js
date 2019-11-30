const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/mymoney', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "o valor '{VALUE}' é menor que o limite mínimo '{MIN}'."
mongoose.Error.messages.Number.max = "o valor '{VALUE}' é maior que o limite máximo '{MAX}'."
mongoose.Error.messages.String.enum = "'{VALUE}' é inválido para o atributo '{PATH}'."