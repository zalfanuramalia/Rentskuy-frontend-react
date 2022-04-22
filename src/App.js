import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Login from './pages/Login';
import Home from './pages/Home';
import VehicleType from './pages/VehicleType';
import ViewMorePopular from './pages/ViewMorePopular';
import NavbarHome from './components/NavbarHome';
import Detail from './pages/Detail';
import NotFound from './helpers/NotFound';
import Reservation from './pages/Reservation';
import Payment from './pages/Payment';
import Profil from './pages/Profil';
import ForgotPassword from './pages/ForgotPassword';
import Register from './pages/Register';
import ViewMoreCar from './pages/ViewMoreCar';
import ViewMoreMotorbike from './pages/ViewMoreMotorbike';
import History from './pages/History';
import ViewMoreBike from './pages/ViewMoreBike';
import Button from './components/Button';
import { unstable_HistoryRouter as HistoryRouter, Route, Routes } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { getDataUser } from './redux/actions/auth';

const App = () => {
  const auth = useSelector(state=>state.auth);
  const history = createBrowserHistory({window});
  const dispatch = useDispatch();
  useEffect(()=>{
    const token = window.localStorage.getItem('token');
    if(token){
      dispatch({
        type: 'AUTH_LOGIN_FULFILLED',
        payload: {
          data: {
            results: {
              token
            }
          }
        }
      });
      dispatch(getDataUser(token));
    }
  },[dispatch, auth.token]);
  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='navbar' element={<NavbarHome />} />
        <Route path='login' element={<Login />} />
        <Route path='vehicleType' element={<VehicleType />} />
        <Route path='viewPopular' element={<ViewMorePopular />} />
        <Route path='vehicles/:id' element={<Detail />} />
        <Route path='notFound' element={<NotFound />} />
        <Route path='register' element={<Register />} />
        <Route path='profil' element={<Profil />} />
        <Route path='reservation/:id' element={<Reservation />} />
        <Route path='payment/:id' element={<Payment />} />
        <Route path='forgotPassword' element={<ForgotPassword />} />
        <Route path='viewMoreCar' element={<ViewMoreCar />} />
        <Route path='viewMoreMotorbike' element={<ViewMoreMotorbike />} />
        <Route path='history' element={<History />} />
        <Route path='viewMoreBike' element={<ViewMoreBike />} />
        <Route path='button' element={<Button />} />
      </Routes>
    </HistoryRouter>
  );
};

export default App;