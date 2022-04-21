import http from '../../helpers/http';

export const login = (email, password)=> {
  const params = new URLSearchParams();
  params.append('email', email);
  params.append('password', password);
  return({
    type: 'AUTH_LOGIN',
    payload: http().post('/auth/login', params)
  });
};

export const forgotpass = (email)=> {
  const params = new URLSearchParams();
  params.append('email', email);
  return({
    type: 'POST_FORGOT_PASSWORD',
    payload: http().post('/auth/forgotPass', params)
  });
};

export const changePass = (email, code, password, confirmPass)=> {
  const params = new URLSearchParams();
  params.append('email', email);
  params.append('code', code);
  params.append('password', password);
  params.append('confirmPass', confirmPass);
  return({
    type: 'POST_CHANGE_PASSWORD',
    payload: http().post('/auth/forgotPass', params)
  });
};

export const getDataUser = (token)=> {
  return({
    type: 'AUTH_USERDATA',
    payload: http(token).get('/profile')
  });
};