import React, { Component } from 'react'
import logo from '../assets/images/logo.png'


export default class NavbarHome extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <a className="navbar-brand" href="/Home">
              <img src={logo} alt="logo" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="./home.html">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./vehicle-type.html">Vehicle Type</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./history.html">History</a>
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