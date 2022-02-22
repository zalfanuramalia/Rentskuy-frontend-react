import React, { Component } from 'react'

export default class Register extends Component {
  render() {
    return (
      <>
        <div class="container-fluid g-0 login">
    <div class="row g-0">
      <div class="col-6 bg-image"></div>
      <div class="col text2">
        <h1 class="text-signup">Sign Up</h1>
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
            <button class="button-send">Sign Up</button>
          </div>
        </form>
        <h1 class="text-again"> <span>or try another way</span> </h1>
        <form>
          <div>
            <button class="button-email"> <img src="./assets/images/google.png" alt="Logo" /><span>    Sign Up with Google     </span> </button> 
          </div>
          <div>
            <button class="button-login-2"> <a href="/login.html">Login</a> </button>
          </div>
        </form>
        <div class="text-desc">
          <div class="row g-0 px-5 text-desc-1">
            <div class="col-12">
              <div>
                <img src="./assets/images/logo.png" alt="Logo" />
              </div>
              <div class="description">Plan and book your perfect trip with expert advice, travel tips for vehicle information from us</div>
              <div class="desc">©2020 Vehicle Rental Center. All rights reserved</div>
            </div>
            <div class="link-social mt-5">
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-linkedin-in"></i>
              <i class="fa-brands fa-youtube"></i>
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
