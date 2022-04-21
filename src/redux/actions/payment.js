import http from '../../helpers/http';

export const getPayment = (token, id_users, id_vehicles, returned)=> {
  const params = new URLSearchParams();
  params.append('id_users', id_users);
  params.append('id_vehicles', id_vehicles);
  params.append('returned', returned);
  return({
    type: 'POST_PAYMENT',
    payload: http(token).post('/history', params)
  });
};

