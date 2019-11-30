const express = require('express')

module.exports = server => {

    //API Routes
    const router = express.Router()
    server.use('/api', router)

    //BillingCycle Routes

    const billingCycleService = require('../api/billingCycle/billingCycleService')
    billingCycleService.register(router, '/billingCycles')
}