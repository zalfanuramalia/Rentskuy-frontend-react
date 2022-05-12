import http from '../../helpers/http';

export const getCar = ()=> {
  return {
    type: 'GET_CAR',
    payload: http().get('/vehicles/category/1?&limit=50') /*axios.get('http://localhost:8080/vehicles/category/1?&limit=50')*/
  };
};

export const filterCar = (brand, location, payment)=> {
  return {
    type: 'GET_CAR',
    payload: http().get(`/vehicles/category/1?search=${brand}&location=${location}&payment=${payment}&limit=50`) /*axios.get(`http://localhost:8080/vehicles/category/1?search=${brand}&location=${location}&type=${type}&payment=${payment}&limit=50`)*/
  };
};