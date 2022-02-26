import React, { Component } from 'react'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'

export default class NavbarHome extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <a className="navbar-brand" href="/Home">
              <img src={logo} alt="logo" className='logo' color='black' />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse home" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to='/' className="nav-link active" color='#71543A' aria-current="page">Home</Link>
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
              <div className="toggled-action">
                <button className="button-outline mx-3" > <a href="./login.html">Login</a></button>
                <button className="button-filled" onClick={this.onRegister} > Register</button>
              </div>
            </div>
          </div>
        </nav>
        )
    }
}