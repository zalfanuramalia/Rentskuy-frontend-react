import {default as axios} from 'axios'

export const getMotorbike = ()=> {
    return {
        type: 'GET_MOTORBIKE',
        payload: axios.get('http://localhost:8080/search/2?&limit=50')
    }
}

export const filterMotorbike = (brand, location, type, payment)=> {
    return {
        type: 'GET_MOTORBIKE',
        payload: axios.get(`http://localhost:8080/search/2?brand=${brand}&location=${location}&payment=${payment}&limit=50`)
    }
}