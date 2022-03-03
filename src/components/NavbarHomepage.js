import React, { Component } from 'react'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'
import people from '../assets/images/people-2.png'

export default class NavbarHomePage extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <Link to='/' className="navbar-brand">
              <img src={logo} alt="logo" className='logo'/>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse home" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to='/homepage' className="nav-link active" color='#71543A' aria-current="page">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to='/VehicleType' className="nav-link">Vehicle Type</Link>
                </li>
                <li className="nav-item">
                  <Link to='/History' className="nav-link">History</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Home">About</a>
                </li>
              </ul>
              <div className="toggled-action d-flex align-items-center">
                <Link to='/login' className="button-outline mx-3" style={{textDecoration:"none"}} type='button'> <p className='mx-5 my-2'>Logout</p> </Link>
                <Link to='/profil' className='profile-nav'><img src={people} alt="Profile-Picure" className="img-thumbnail rounded-circle" /></Link> 
              </div>
            </div>
          </div>
        </nav>
        )
    }
}