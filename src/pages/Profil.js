import React, { Component } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default class Profil extends Component {
  render() {
    return (
      <>
      <Navbar />
        <form class="profile-edit">
    <main class="container">  
      <div class="profile mb-5">
        <h5>Profile</h5>
      </div>
      <div class="text-center mb-5">
        <div class="mb-5">
          <div class="d-inline-block position-relative">
            <img src="./assets/images/people-2.png" alt="Profile Picure" class="img-thumbnail rounded-circle" />
            <button class="edit-photo"><i class="fa-solid fa-pencil"></i></button>
          </div>
        </div>
        <div>
          <h1 class="big-name">Samantha Doe</h1>
        </div>
        <div class="details">
          <div>samanthadoe@mail.com</div>
          <div>+62833467823</div>
          <div>Has been active since 2013</div>
        </div>
      </div>
      <div class="d-flex justify-content-center mb-5">
        <div class="me-5">
          <label class="radio-button">
            <input type="radio" name="gender"/>
            <div class="checkmark"></div>
            <div class="text">Male</div>
          </label>
        </div>
        <div>
          <label class="radio-button">
            <input type="radio" name="gender"/>
            <div class="checkmark"></div>
            <div class="text">Female</div>
          </label>
        </div>
      </div>
      <div class="mb-5">
        <h5>Contact</h5>
      </div>
      <div class="mb-5">
        <label>Email: </label>
        <input class="d-block w-100 input-underline" type="email" value="zulaikha17@gmail.com" />
      </div>
      <div class="mb-5">
        <label>Address: </label>
        <textarea class="d-block w-100 input-underline">Iskandar Street no. 67 Block A Near Bus Stop</textarea>
      </div>
      <div class="mb-5">
        <label>Mobile Number: </label>
        <input class="d-block w-100 input-underline" type="text" value="(+62)813456782"/>
      </div>
      <div class="mb-5">
        <h5>Identity</h5>
      </div>
      <div class="row">
        <div class="col">
          <label>Display Name: </label>
          <input class="d-block w-100 input-underline" type="text" />
        </div>
        <div class="col">
          <label>DD/MM/YY: </label>
          <input class="d-block w-100 input-underline" type="date" />
        </div>
      </div>
      <div class="mt-5 d-flex justify-content-between but">
        <div>
          <button class="button-filled">Save Change</button>
        </div>
        <div>
          <button class="button-dark">Edit Password</button>
        </div>
        <div>
          <button class="button-gray">Cancel</button>
        </div>
      </div>
    </main>
  </form>
  <Footer />
      </>
    )
  }
}
