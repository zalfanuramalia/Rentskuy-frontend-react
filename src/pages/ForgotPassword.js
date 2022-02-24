import React, { Component } from 'react'
import {FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube} from 'react-icons/fa'
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
    <footer className="footer container">
      <div className="row text">
        <div className="col">
          <div>
            <img src="./assets/images/logo.png" alt="Logo" />
          </div>
          <div className="description">Plan and book your perfect trip with expert advice, travel tips for vehicle information from us</div>
          <div>©2020 Vehicle Rental Center. All rights reserved</div>
        </div>
        <div className="col-md-2">
          <h5>Destination</h5>
          <ul>
            <li>Bali</li>
            <li>Yogyakarta</li>
            <li>Jakarta</li>
            <li>Kalimantan</li>
            <li>Malang</li>
          </ul>
        </div>
        <div className="col-md-2">
          <h5>Vehicle</h5>
          <ul>
            <li>Bike</li>
            <li>Cars</li>
            <li>Motorbike</li>
            <li>Return Times</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className="col-md-2">
          <h5>Interests</h5>
          <ul>
            <li>Adventure Travel</li>
            <li>Art And Culture</li>
            <li>Wildlife And Nature</li>
            <li>Family Holidays</li>
            <li>Culinary Trip</li>
          </ul>
        </div>
      </div>
      <div className="link-social">
            <FaTwitter />
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
            <FaYoutube />
      </div>
    </footer>
      </>
    )
  }
}
