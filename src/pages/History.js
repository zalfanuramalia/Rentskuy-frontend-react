import React, { Component } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { FaSearch } from 'react-icons/fa'
import Layout from '../components/Layout'
export default class History extends Component {
  render() {
    return (
      <Layout>
        <div className="history-1">
    <div className="d-flex">
      <div className="one">
        <div className="d-flex">
          <div className="input-group-md form-1">
            <input type="search" class="form-control" placeholder="Search history"  />
            <span><FaSearch /></span> 
          </div>
          <div className="form-2">
            <select className="form-select" aria-label="Default select example">
              <option selected>Filter</option>
              <option value="1">Type</option>
              <option value="2">Date Added</option>
              <option value="3">Name</option>
              <option value="4">Favorite Product</option>
            </select>
            <i className="fa-solid fa-chevron-down"></i>
          </div>
        </div>
        <div className="today">
          <p>Today</p>
        </div>          
        <div className="d-flex qt">
          <p>Please finish your payment for vespa for Vespa Rental Jogja</p>
          <a href="/Reservation"><i class="fa-solid fa-chevron-right"></i></a> 
        </div>
        <div className="underline-1"></div>
        <div className="d-flex qt-2">
          <p>Your payment has been confirmed!</p>
          <a href="/Payment"><i class="fa-solid fa-chevron-right"></i></a>
        </div>
        <div className="underline-1"></div>
        <div className="timer">
          <p>A week ago</p>
        </div>
        <div className="d-flex image-1">
          <div className="img">
            <img src="./assets/images/vespa-matic.png" alt="VespaMatic" />
          </div>
          <div className="desc">
            <div>
              <p className="desc-1">Vespa Matic </p>
              <p className="desc-2">Jan 18 to 21 2021</p>
              <p className="desc-3">Prepayment : Rp. 245.000 </p>
              <p className="desc-4">Has been returned</p>
            </div>
          </div>
        </div>
        <div className="d-flex image-2">
          <div>
            <img src="./assets/images/vespa-matic-2.png" alt="VespaMatic" />
          </div>
          <div className="desc-again">
            <p className="desc-1">Vespa Matic </p>
            <p className="desc-2">Jan 18 to 21 2021</p>
            <p className="desc-3">Prepayment : Rp. 245.000 </p>
            <p className="desc-4">Has been returned</p>
          </div>
          <button>Delete</button>
        </div>
      </div>
      <div className="two">
        <div className="new-arrival">
          <p>New Arrival</p>
        </div>
        <div className="vehicle-1">
          <img src="./assets/images/lamborghini.png" alt="Lamborghini" />
          <div className="telukbogam">Lamborghini  South Jakarta  </div>
        </div>
        <div className="vehicle-2">
          <img src="./assets/images/white-jeep-2.png" alt="WhiteJeep" />
          <div className="malioboro">White Jeep Kalimantan  </div>
        </div>
        <div className="view">
          <p>View more</p>
          <a href="/ViewMoreDetail"><i class="fa-solid fa-chevron-down"></i></a> 
        </div>
      </div>
    </div>
  </div>
  <Footer />
      </Layout>
    )
  }
}
