import api from '../services/api'

export const getSummary = () =>{
    const request = api.get('/billingCycles/summary')
    return{
        type: 'BILLING_SUMMARY_FETCHED',
        payload: request
    }
}