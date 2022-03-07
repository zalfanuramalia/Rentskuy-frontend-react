import {default as axios} from 'axios'

export const getBike = ()=> {
    return {
        type: 'GET_BIKE',
        payload: axios.get('http://localhost:8080/search/3?&limit=50')
    }
}

export const filterBike = (brand, location, type, payment)=> {
    return {
        type: 'GET_BIKE',
        payload: axios.get(`http://localhost:8080/search/3?brand=${brand}&location=${location}&type=${type}&payment=${payment}&limit=50`)
    }
}