import React, { Component } from 'react'


export default class Payment extends Component {
  render() {
    return (
      <>
        <div class="payment">
    <div class="reserve">
      <i class="fa-solid fa-chevron-left"></i>
      <span>Payment</span>
    </div>
    <div class="container-fluid g-0">
      <div class="row g-0 in">
        <div class="col info-img g-0">
          <img src="./assets/images/fixie-3.png" alt="Fixie" />
        </div>
        <div class="col info-pay g-0">
          <h1 class="text-1">Fixie - Gray Only </h1>
          <h1 class="text-2"> Yogyakarta</h1>
          <p class="text-3">No Prepayment</p>
          <p class="text-4">#FG1209878YZS</p>
          <button class="text-5">Copy booking code</button>
        </div>
      </div>
    </div>
  </div>
  <div class="result-1">
    <div class="d-flex res">
      <div class="res-1">
        <p>Quantity : 2 bikes</p>
      </div>
      <div class="d-inline-flex p-2 bd-highlight res-2">
        <p>Reservation Date :</p>
        <span>Jan 18 - 20 2021</span>
      </div>
    </div>
    <div class="d-flex res-4">
      <div class="res-5">
        <p class="get-1">Order details :</p>
        <p class="get-2">1 bike : Rp. 78.000 <br/> 1 bike : Rp. 78.000 </p>
        <p class="get-3">Total : 178.000</p>
      </div>
      <div class="d-flex res-6">
        <p class="id-1">Identity :</p>
        <p class="id-2">Samantha Doe (+6290987682) <br/> samanthadoe@mail.com</p>
      </div>
    </div>
    <div class="d-flex ress">
      <div class="ress-1">
        <p>Payment code :</p>
      </div>
      <div class="d-flex ress-2">
        <p>#FG1209878YZS</p>
        <button>Copy</button>
      </div>
      <div class=" d-flex ress-3">
        <select class="form-select sel-op" aria-label="Default select example">
          <option selected>Select payment methods</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <span><i class="fa-solid fa-chevron-down"></i></span>
      </div>
    </div>
  </div>
  <div class=" pay">
    <button class="d-flex" >
      <p class="fin">Finish payment :</p>
      <p class="time">59:30</p> 
    </button>
  </div>
      </> 
    )
  }
}
