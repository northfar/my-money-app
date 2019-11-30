const port = 3003

const express = require('express')
const bodyParser = require('body-parser')
const queryParser = require('express-query-int')
const allowCors = require('./cors')

const server = express()

server.use(allowCors)
server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(queryParser())

server.listen(port, function(){
    console.log(`SERVER is running on port ${port}`)
})

module.exports = server