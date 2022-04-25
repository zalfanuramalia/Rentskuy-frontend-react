import http from '../../helpers/http';

export const getProfile = (token)=> {
  return {
    type: 'GET_PROFILE',
    payload: http(token).get('/profile')
  };
};
export const updateProfil = (id, token, data)=> {
  const formData = new FormData();
  if (data.name) {
    formData.append('name', data.name);
  }
  if (data.gender) {
    formData.append('gender', data.gender);
  }
  if (data.email) {
    formData.append('email', data.email);
  }
  if (data.address) {
    formData.append('address', data.address);
  }
  if (data.number) {
    formData.append('number', data.number);
  }
  if (data.birthdate) {
    formData.append('birthdate', data.birthdate);
  }
  if (data.image !== null) {
    formData.append('image', data.image);
  }
  return({
    type: 'UPDATE_PROFILE',
    payload: http(token).patch(`/users/${id}`, formData)
  });
};

