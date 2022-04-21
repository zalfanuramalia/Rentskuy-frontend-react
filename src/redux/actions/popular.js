import http from '../../helpers/http'

export const getPopular = ()=> {
    return {
        type: 'GET_POPULAR',
        payload: http().get('/history/vehicles?limit=50') /*axios.get('http://localhost:8080/history/vehicles?limit=50')*/
    }
}

export const getPopularHome = ()=> {
  return {
      type: 'GET_POPULAR',
      payload: http().get('/history/vehicles') /*axios.get('http://localhost:8080/history/vehicles?limit=50')*/
  }
}

export const filterPopular = (brand, location, type, payment)=> {
    return {
        type: 'GET_POPULAR',
        payload: http().get(`/history/vehicles?search=${brand}&location=${location}&type=${type}&payment=${payment}&limit=50`) /*axios.get(`http://localhost:8080/history/vehicles?search=${brand}&location=${location}&type=${type}&payment=${payment}&limit=50`)*/
    }
}

export const getPopularHistory = ()=> {
  return {
      type: 'GET_POPULAR',
      payload: http().get('/history/vehicles?limit=2') /*axios.get('http://localhost:8080/history/vehicles?limit=50')*/
  }
}