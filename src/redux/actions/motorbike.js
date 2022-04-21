import http from '../../helpers/http';

export const getMotorbike = ()=> {
  return {
    type: 'GET_MOTORBIKE',
    payload: http().get('/vehicles/category/2?limit=50')
  };
};

export const filterMotorbike = (brand, location, payment)=> {
  return {
    type: 'FILTER_MOTORBIKE',
    payload: http().get(`/vehicles/category/2?brand=${brand}&location=${location}&payment=${payment}&limit=50`)
  };
};