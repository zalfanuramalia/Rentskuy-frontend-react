import React from 'react';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';
import people from '../assets/images/people-2.png';
import { FaCircle } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';
import { useSelector } from 'react-redux';

export const Navbar = () => {
  const auth = useSelector(state => state.auth);
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
              <Link to='/history' className="nav-link">History</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Home">About</a>
            </li>
          </ul>
          {auth.token!==null && <div className='navbar-text emails'>{auth.userData.email}</div>}
          <div className="toggled-action d-inline-block position-relative">
            <div className="d-inline-block position-relative mail">
              <span className='position-relative goMail'>
                <GoMail className='mail-1'/>
                <FaCircle color='#71543A' className='circle'/>
                <p className='val'>1</p>
              </span>              
              <Link to='/profil' className='profile-nav'><img src={auth.userData?.image ? auth.userData.image : people} alt="Profile-Picure" className="img-thumbnail rounded-circle" /></Link> 
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;