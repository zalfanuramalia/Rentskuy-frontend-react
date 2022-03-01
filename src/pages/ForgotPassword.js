import React, { Component } from 'react'
import {FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube} from 'react-icons/fa'
import logo from '../assets/images/logo.png'
import Footer from '../components/Footer'
export default class ForgotPassword extends Component {
  render() {
    return (
      <>
        <header className="header-forgot">
      <div className="header-content">
        <div className="header-nav">
          <div>
            <i className="fa-solid fa-chevron-left"></i>
            <span>Back</span>
          </div>
        </div>
        <h1 className="heading">Don't worry, we got your back!</h1>
        <form>
          <div>
            <input placeholder="Email your email address" type="email" />
          </div>
          <div>
            <button className="button-send" onclick="document.location='login.html'">Send Link</button>
          </div>
        </form>
        <p className="text">
          You will receive a link to reset your password.<br/>If you haven’t received any link, click Resend Link
        </p>
      </div>
    </header>
    <Footer />
      </>
    )
  }
}
