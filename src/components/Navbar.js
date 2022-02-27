import React, { Component } from 'react'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'
import people from '../assets/images/people-2.png'
import { FaCircle } from 'react-icons/fa'
import { GoMail } from 'react-icons/go'

export default class Navbar extends Component {
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to='/' className="nav-link active" aria-current="page">Home</Link>
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
          <div className="toggled-action d-inline-block position-relative">
            <div className="d-inline-block position-relative mail">
              <span className='position-relative goMail'>
                <GoMail className='mail-1'/>
                <FaCircle color='#71543A' className='circle'/>
                <p className='val'>1</p>
              </span>              
              <img src={people} alt="Profile-Picure" className="img-thumbnail rounded-circle" />
            </div>
          </div>
        </div>
      </div>
    </nav>
    )
  }
}
