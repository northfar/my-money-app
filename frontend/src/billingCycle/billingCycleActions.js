import api from '../services/api'
import {toastr} from 'react-redux-toastr'
import {reset as resetForm, initialize} from 'redux-form'
import {showTabs, selectTab} from '../common/tab/tabActions'

const INITIAL_VALUES = {}

export const getList = () => {
    const request = api.get('/billingCycles')
    return{
        type:'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export const create = values => {
    return submit(values,'post')
}

export const update = values =>{
    return submit(values,'put')
}

export const showUpdate = billingCycle =>{
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('billingCycleForm', billingCycle)
    ]
}

export const init = () =>{
    return[
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('billingCycleForm',INITIAL_VALUES)
    ]
}

const submit = (values, method) =>{
    return dispatch =>{
        const id = values._id ? values._id : ''
        api[method](`/billingCycles/${id}`, values)
        .then( res => {
            toastr.success('Sucesso!', 'Operação realizada com sucesso.')
            dispatch(init())
         })
        .catch(e => {
            e.response.data.errors.forEach(error => {
                toastr.error('Erro!', error)
            })
        })
    }
}



