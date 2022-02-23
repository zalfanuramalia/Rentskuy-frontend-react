import React, { Component } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default class History extends Component {
  render() {
    return (
        <>
        <Navbar />
            <div class="history-1">
    <div class="d-flex">
      <div class="one">
        <div class="d-flex">
          <div class="input-group-md form-1">
            <input type="search" class="form-control" placeholder="Search history"  />
            <i class="fas fa-search"></i>
          </div>
          <div class="form-2">
            <select class="form-select" aria-label="Default select example">
              <option selected>Filter</option>
              <option value="1">Type</option>
              <option value="2">Date Added</option>
              <option value="3">Name</option>
              <option value="4">Favorite Product</option>
            </select>
            <i class="fa-solid fa-chevron-down"></i>
          </div>
        </div>
        <div class="today">
          <p>Today</p>
        </div>          
        <div class="d-flex qt">
          <p>Please finish your payment for vespa for Vespa Rental Jogja</p>
          <a href="/Reservation"><i class="fa-solid fa-chevron-right"></i></a> 
        </div>
        <div class="underline-1"></div>
        <div class="d-flex qt-2">
          <p>Your payment has been confirmed!</p>
          <a href="/Payment"><i class="fa-solid fa-chevron-right"></i></a>
        </div>
        <div class="underline-1"></div>
        <div class="timer">
          <p>A week ago</p>
        </div>
        <div class="d-flex image-1">
          <div class="img">
            <img src="./assets/images/vespa-matic.png" alt="VespaMatic" />
          </div>
          <div class="desc">
            <div>
              <p class="desc-1">Vespa Matic </p>
              <p class="desc-2">Jan 18 to 21 2021</p>
              <p class="desc-3">Prepayment : Rp. 245.000 </p>
              <p class="desc-4">Has been returned</p>
            </div>
          </div>
        </div>
        <div class="d-flex image-2">
          <div>
            <img src="./assets/images/vespa-matic-2.png" alt="VespaMatic" />
          </div>
          <div class="desc-again">
            <p class="desc-1">Vespa Matic </p>
            <p class="desc-2">Jan 18 to 21 2021</p>
            <p class="desc-3">Prepayment : Rp. 245.000 </p>
            <p class="desc-4">Has been returned</p>
          </div>
          <button>Delete</button>
        </div>
      </div>
      <div class="two">
        <div class="new-arrival">
          <p>New Arrival</p>
        </div>
        <div class="vehicle-1">
          <img src="./assets/images/lamborghini.png" alt="Lamborghini" />
          <div class="telukbogam">Lamborghini  South Jakarta  </div>
        </div>
        <div class="vehicle-2">
          <img src="./assets/images/white-jeep-2.png" alt="WhiteJeep" />
          <div class="malioboro">White Jeep Kalimantan  </div>
        </div>
        <div class="view">
          <p>View more</p>
          <a href="/ViewMoreDetail"><i class="fa-solid fa-chevron-down"></i></a> 
        </div>
      </div>
    </div>
  </div>
  <Footer />
        </>
      

      
    )
  }
}
