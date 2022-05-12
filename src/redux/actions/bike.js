import http from '../../helpers/http';

export const getBike = ()=> {
  return {
    type: 'GET_BIKE',
    payload: http().get('/vehicles/category/3?limit=50')
  };
};

export const filterBike = (brand, location, type, payment)=> {
  return {
    type: 'GET_BIKE',
    payload: axios.get(`http://localhost:8080/search/3?search=${brand}&location=${location}&type=${type}&payment=${payment}&limit=50`)
  };
};