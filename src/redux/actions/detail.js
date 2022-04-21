import http from '../../helpers/http';

export const getDetail = (id)=> {
  return {
    type: 'GET_DETAIL',
    payload: http().get(`/vehicles/${id}`) /*axios.get('http://localhost:8080/vehicles/category/1?&limit=50')*/
  };
};
