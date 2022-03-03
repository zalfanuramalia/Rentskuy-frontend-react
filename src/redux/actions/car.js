import {default as axios} from 'axios'

export const getCar = ()=> {
    return {
        type: 'GET_CAR',
        payload: axios.get('http://localhost:8080/vehicles/category/1?&limit=50')
    }
}

export const filterCar = (brand, location, type, payment)=> {
    return {
        type: 'GET_CAR',
        payload: axios.get(`http://localhost:8080/vehicles/category/1?search=${brand}&location=${location}&type=${type}&payment=${payment}&limit=50`)
    }
}