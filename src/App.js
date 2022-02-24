import React, { Component } from 'react'
import Login from './pages/Login'
import Home from './pages/Home'
import VehicleType from './pages/VehicleType'
import ViewMoreDetail from './pages/ViewMoreDetail'
import NavbarHome from './components/NavbarHome'
import Detail from './pages/Detail'
import NotFound from './helpers/NotFound'
import Reservation from './pages/Reservation'
import Payment from './pages/Payment'
import Profil from './pages/Profil'
import ForgotPassword from './pages/ForgotPassword'
import Register from './pages/Register'
import { unstable_HistoryRouter as HistoryRouter, Route, Routes } from 'react-router-dom'
import { createBrowserHistory } from 'history'

export default class App extends Component {
    componentDidMount(){
      console.log(this.props)
    }
    // state = {
    //     isLogged: false,
    //     greetings:''
    // }
    history = createBrowserHistory()
  render() {
    return (
      <>
      <HistoryRouter history={this.history}>
      <Routes>
            <Route path='navbar' element={<NavbarHome />} />
            <Route path='/' element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='vehicleType' element={<VehicleType />} />
            <Route path='viewDetail' element={<ViewMoreDetail />} />
            <Route path='detail' element={<Detail />} />
            <Route path='notFound' element={<NotFound />} />
            <Route path='register' element={<Register />} />
            <Route path='profil' element={<Profil />} />
            <Route path='reservation' element={<Reservation />} />
            <Route path='payment' element={<Payment />} />
            <Route path='forgotPassword' element={<ForgotPassword />} />
          </Routes>
      </HistoryRouter>
      {/* <BrowserRouter>
      
      </BrowserRouter> */}
        
      </>
        // <div className=' vh-100 '>
        //     {!this.state.isLogged && <Login onLogin={(value)=>{this.setState({isLogged: value})}} />}
        //     {this.state.isLogged && <Home />}
        // </div>
    )
  }
}
