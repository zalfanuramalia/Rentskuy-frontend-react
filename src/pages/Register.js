import React, { useEffect }  from 'react';
import {FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube} from 'react-icons/fa';
import google from '../assets/images/google.png';
import logo from '../assets/images/logo.png';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../redux/actions/register';

export const Register = () => {
  const dispatch = useDispatch();
  const register = useSelector(state => state.register);
  const navigate = useNavigate();

  const onRegis = (e)=>{
    e.preventDefault();
    const name = e.target.elements['name'].value;
    const email = e.target.elements['email'].value;
    const password = e.target.elements['password'].value;
    dispatch(signup(name, email, password));
    navigate('/login');
  };
  return (
    <>
      <div className="container-fluid g-0 login">
        <div className="row g-0">
          <div className="col-6 bg-image"></div>
          <div className="col text2">
            <h1 className="text-signup">Sign Up</h1>
            <form onSubmit={onRegis}>
              <div>
                <input placeholder="Name" name="name" />
              </div>
              <div>
                <input placeholder="Email" name="email" />
              </div>
              <div>
                <input placeholder="Password" type='password' name="password" />
              </div>
              <div>
                <button className="button-send">Sign Up</button>
              </div>
            </form>
            <h1 className="text-again"> <span>or try another way</span> </h1>
            <form>
              <div>
                <button className="button-email"> <img src={google} alt="Logo" /><span>    Sign Up with Google     </span> </button> 
              </div>
              <div>
                <Link to='/login'><button className="button-login-2"><p>Login</p>  </button></Link>
              </div>
            </form>
            <div className="text-desc">
              <div className="row g-0 px-5 text-desc-1">
                <div className="col-12">
                  <div>
                    <img src={logo} alt="Logo" />
                  </div>
                  <div className="description">Plan and book your perfect trip with expert advice, travel tips for vehicle information from us</div>
                  <div className="desc">©2020 Vehicle Rental Center. All rights reserved</div>
                </div>
                <div className="link-social mt-5">
                  <FaTwitter />
                  <FaFacebookF />
                  <FaInstagram />
                  <FaLinkedinIn />
                  <FaYoutube />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;