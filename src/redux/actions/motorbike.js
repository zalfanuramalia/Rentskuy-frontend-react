import {default as axios} from 'axios'

export const getMotorbike = ()=> {
    return {
        type: 'GET_MOTORBIKE',
        payload: axios.get('http://localhost:8080/vehicles/category/2?&limit=50')
    }
}

export const filterMotorbike = (brand, location, type, payment)=> {
    return {
        type: 'GET_MOTORBIKE',
        payload: axios.get(`http://localhost:8080/vehicles/category/2?search=${brand}&location=${location}&type=${type}&payment=${payment}&limit=50`)
    }
}