import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3003/api'
})

const oapi = axios.create({
     baseURL: 'http://localhost:3003/oapi'
 })
 
export {
    api,
    oapi
}
