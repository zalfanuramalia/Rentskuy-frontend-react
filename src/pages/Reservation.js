import React, { Component } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { FaChevronLeft, FaChevronDown } from 'react-icons/fa'

export default class Reservation extends Component {
    state = {
        value: 0
    }

    changeValue = () => {
        if("minus"){
            this.setState({value: this.state.value-1})
        } else {
            this.setState({value: this.state.value+1})
        }
        
    }

  render() {
    return (
      <>
        <Navbar />
        <div class="payment">
        <div class="reserve">
          <a href="/ViewMoreDetail"><FaChevronLeft /></a> 
          <span>Reservation</span>
        </div>
        <div class="container-fluid g-0">
          <div class="row g-0">
            <div class="col">
              <img src="./assets/images/fixie-2.png" alt="Fixie" />
            </div>
            <div class="col info">
              <div>
                <h1 class="text-1">Fixie - Gray Only </h1>
                <h1 class="text-2"> Yogyakarta</h1>
                <p class="text-3">No Prepayment</p>
                <div class="qty ">
                    <button class="minus " onClick={this.changeValue}>-</button>
                    <div type="number" class="count" name="qty">{this.state.value}</div>
                    <button class="plus " onClick={this.changeValue}>+</button>
                </div>
                <div class="text-4">
                  <p>Reservation Date :</p>
                </div>
                <div class="op-1">
                  <div class="date" id="datepicker">
                    <input type="text" class="form-control pick" placeholder="Select date" />
                    <span class="input-group-append"></span>
                  </div>       
                </div>
                <div class="op-2">
                  <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                    <option selected>1 Day</option>
                    <option value="1">2 Day</option>
                    <option value="2">3 Day</option>
                    <option value="3">4 Day</option>
                  </select>
                  <FaChevronDown />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="pay-1">
          <button>Pay now : Rp. 178.000</button>
        </div>
      </div>
  <Footer />
      </>
    )
  }
}
