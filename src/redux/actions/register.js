import http from '../../helpers/http';

export const signup = (name, email, password)=> {
  const params = new URLSearchParams();
  params.append('name', name);
  params.append('email', email);
  params.append('password', password);
  return({
    type: 'AUTH_REGISTER',
    payload: http().post('/auth/register', params)
  });
};