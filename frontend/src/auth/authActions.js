import {oapi} from '../services/api'
import {toastr} from 'react-redux-toastr'


export function login (values){
    return submit(values, '/login')
}

export function signup (values){
    return submit(values, '/signup')
}

function submit(values, url){
    return dispatch => {
        oapi.post(url, values)
            .then(res => {
                dispatch([
                    {type: 'USER_FETCHED', payload: res.data}
                ])
            })
            .catch(e => {
                console.log(e)
                e.response.data.errors.forEach(
                    error => toastr.error('Erro', error)
                )
            })
    }
}

export function logout(){
    return {type:'TOKEN_VALIDATED', payload: false}
}

export function validateToken (token){
    return dispatch =>{
        if(token){
            oapi.post('/validateToken', {token})
                .then(res => {
                    dispatch({type:'TOKEN_VALIDATED', payload: res.data.valid})
                })
                .catch(e => dispatch({type: 'TOKEN_VALIDATED', payload: false}))
        }
        else{
            dispatch({type: 'TOKEN_VALIDATED', payload: false})
        }
    }
}