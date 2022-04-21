import http from '../../helpers/http';

export const updateProfil = (id, name, gender,email, address,number, birthdate)=> {
  const params = new URLSearchParams();
  params.append('name', name);
  params.append('gender', gender);
  params.append('email', email);
  params.append('address', address);
  params.append('number', number);
  params.append('birthdate', birthdate);
  return({
    type: 'UPDATE_PROFILE',
    payload: http().patch(`/users/${id}`, params)
  });
};

