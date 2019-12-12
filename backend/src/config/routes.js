const express = require('express')
const auth = require('./auth')

module.exports = server => {

    /**
     * Rotas protegidas por JWT
     */
    const protectedApi = express.Router()
    server.use('/api', protectedApi)

    protectedApi.use(auth)

    const billingCycleService = require('../api/billingCycle/billingCycleService')
    billingCycleService.register(protectedApi, '/billingCycles')

    /**
     * Rotas abertas
     */

     const openApi = express.Router()
     server.use('/oapi', openApi)

     const authService = require('../api/user/authService')
     openApi.post('/login', authService.login)
     openApi.post('/signup', authService.signup)
     openApi.post('/validateToken', authService.validateToken)

}