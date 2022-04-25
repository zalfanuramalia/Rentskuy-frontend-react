import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';

import auth from './auth';
import buttons from './buttons';
import detail from './detail';
import register from './register';
import payment from './payment';
import history from './history';
import popular from './popular';
import car from './car';
import motorbike from './motorbike';
import bike from './bike';

const persistAuth = {
  key: 'auth',
  storage,
};

const persistButton = {
  key: 'buttons',
  storage,
};

const persistDetail = {
  key: 'detail',
  storage,
};

const persistRegister = {
  key: 'register',
  storage,
};

const persistPayment = {
  key: 'payment',
  storage,
};

// const persistHistory = {
//   key: 'history',
//   storage,
// };

const persistPopular = {
  key: 'popular',
  storage,
};

const persistCar = {
  key: 'car',
  storage,
};

const persistMotorbike = {
  key: 'motorbike',
  storage,
};

const persistBike = {
  key: 'bike',
  storage,
};

const rootReducer = combineReducers ({ 
  auth: persistReducer(persistAuth, auth),
  buttons: persistReducer(persistButton, buttons),
  detail: persistReducer(persistDetail, detail),
  register: persistReducer(persistRegister, register),
  payment: persistReducer(persistPayment, payment),
  // history: persistReducer(persistHistory, history),
  popular: persistReducer(persistPopular, popular),
  car: persistReducer(persistCar, car),
  motorbike: persistReducer(persistMotorbike, motorbike),
  bike: persistReducer(persistBike, bike),
  // buttons,
  // detail,
  // register,
  // payment,
  history,
  // popular,
  // car,
  // motorbike,
  // bike,
});

export default rootReducer;