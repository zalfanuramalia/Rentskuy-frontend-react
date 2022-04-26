import http from '../../helpers/http';

export const addItemVehicles = (token, data)=> {
  const formData = new FormData();
  if (data.brand) {
    formData.append('brand', data.brand);
  }
  if (data.location) {
    formData.append('location', data.location);
  }
  if (data.description) {
    formData.append('description', data.description);
  }
  if (data.price) {
    formData.append('price', data.price);
  }
  if (data.qty) {
    formData.append('qty', data.qty);
  }
  if (data.category_id) {
    formData.append('category_id', data.category_id);
  }
  if (data.image) {
    formData.append('image', data.image);
  }
  return({
    type: 'ADD_ITEM',
    payload: http(token).post('/vehicles', formData)
  });
};