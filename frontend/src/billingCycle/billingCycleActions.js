import api from '../services/api'

export const getList = () => {
    const request = api.get('/billingCycles')
    return{
        type:'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export const create = values => {
   api.post('/billingCycles', values)
   return{
       type:'TEMP'
   }

}