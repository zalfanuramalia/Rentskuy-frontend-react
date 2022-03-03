import React, { Component } from 'react'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'


export default class Payment extends Component {
  render() {
    return (
      <Layout>
        <div className="payment">
    <div className="reserve">
      <i className="fa-solid fa-chevron-left"></i>
      <span>Payment</span>
    </div>
    <div className="container-fluid g-0">
      <div className="row g-0 in">
        <div className="col info-img g-0">
          <img src="./assets/images/fixie-3.png" alt="Fixie" />
        </div>
        <div className="col info-pay g-0">
          <h1 className="text-1">Fixie - Gray Only </h1>
          <h1 className="text-2"> Yogyakarta</h1>
          <p className="text-3">No Prepayment</p>
          <p className="text-4">#FG1209878YZS</p>
          <button className="text-5">Copy booking code</button>
        </div>
      </div>
    </div>
  </div>
  <div className="result-1">
    <div className="d-flex res">
      <div className="res-1">
        <p>Quantity : 2 bikes</p>
      </div>
      <div className="d-inline-flex p-2 bd-highlight res-2">
        <p>Reservation Date :</p>
        <span>Jan 18 - 20 2021</span>
      </div>
    </div>
    <div className="d-flex res-4">
      <div className="res-5">
        <p className="get-1">Order details :</p>
        <p className="get-2">1 bike : Rp. 78.000 <br/> 1 bike : Rp. 78.000 </p>
        <p className="get-3">Total : 178.000</p>
      </div>
      <div className="d-flex res-6">
        <p className="id-1">Identity :</p>
        <p className="id-2">Samantha Doe (+6290987682) <br/> samanthadoe@mail.com</p>
      </div>
    </div>
    <div className="d-flex ress">
      <div className="ress-1">
        <p>Payment code :</p>
      </div>
      <div className="d-flex ress-2">
        <p>#FG1209878YZS</p>
        <button>Copy</button>
      </div>
      <div className=" d-flex ress-3">
        <select className="form-select sel-op" aria-label="Default select example">
          <option selected>Select payment methods</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <span><i className="fa-solid fa-chevron-down"></i></span>
      </div>
    </div>
  </div>
  <div className=" pay">
    <button className="d-flex" >
      <p className="fin">Finish payment :</p>
      <p className="time">59:30</p> 
    </button>
  </div>
  <Footer />
      </Layout>
    )
  }
}
