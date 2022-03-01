import React, { Component } from 'react'
import {FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube} from 'react-icons/fa'
import google from '../assets/images/google.png'
import logo from '../assets/images/logo.png'

export default class Register extends Component {
  render() {
    return (
      <>
        <div className="container-fluid g-0 login">
    <div className="row g-0">
      <div className="col-6 bg-image"></div>
      <div className="col text2">
        <h1 className="text-signup">Sign Up</h1>
        <form>
          <div>
            <input placeholder="Name" type="name" />
          </div>
          <div>
            <input placeholder="Email" type="email" />
          </div>
          <div>
            <input placeholder="Password" type="password" />
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
            <button className="button-login-2"> <a href="/login.html">Login</a> </button>
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
    )
  }
}
