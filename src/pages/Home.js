import React, { Component } from 'react'
import Footer from '../components/Footer'
import NavbarHome from '../components/NavbarHome'
import item1 from '../assets/images/merapi.png'
import item2 from '../assets/images/telukbogam.png'
import item3 from '../assets/images/bromo.png'
import item4 from '../assets/images/malioboro.png'
import element from '../assets/images/element.png'
import elementTwo from '../assets/images/element-2.png'
import people from '../assets/images/people.png'
import {FaStar} from 'react-icons/fa'

export default class Home extends Component {
  state = {
    item: [
      {
        name: 'Merapi',
        location: 'Yogyakarta'
      },
      {
        name: 'Teluk Bogam',
        location: 'Kalimantan'
      },
      {
        name: 'Bromo',
        location: 'Malang'
      },
      {
        name: 'Malioboro',
        location: 'Yogyakarta'
      }
    ]
  }
  render() {
    return (
      <>
        <NavbarHome />
        <header className="header-home">
          <div className="content-home">
            <div className="header-pic">
              <h1 className="text-1">Explore and Trave</h1>
              <h1 className="text-2"> Vehicle Finder </h1>
              <div><i className="fa-solid fa-horizontal-rule"></i></div>
            </div>
            <form>
              <div className="row type-1">
                <div className="col select-1">
                  <select className="form-select" aria-label="Default select example">
                    <option selected>Location</option>
                    <option value="1">Yogyakarta</option>
                    <option value="2">Malang</option>
                    <option value="3">Kalimantan</option>
                  </select>
                  <i class="fa-solid fa-chevron-down"></i>
                </div>
                <div className="col select-2">
                  <select className="form-select" aria-label="Default select example">
                    <option selected>Type</option>
                    <option value="1">Cars</option>
                    <option value="2">Motorbike</option>
                    <option value="3">Bike</option>
                  </select>
                  <i class="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="row type-2">
                <div className="col select-1">
                  <select className="form-select" aria-label="Default select example">
                    <option selected>Payment</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <i class="fa-solid fa-chevron-down"></i>
                </div>
                <div className="col select-2">
                  <select className="form-select" aria-label="Default select example" id="datepicker">
                    <option selected>Date</option>
                  </select>
                  <i class="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <button className="explore">Explore</button>
            </form>
          </div>
        </header>
        <footer>
          <div className="texts d-flex justify-content-between">
            <div>
              <p className="hei">Popular in Town </p>
            </div>
            <div>
              <p className="hai">view all <i class="fa-solid fa-chevron-right"> </i></p> 
            </div>      
          </div>
          <div className='image container'>
            <div className="row">
              <div className="col-6 col-lg-3 ">
                <img src={item1} alt="Merapi" />
                <div className="merapi">Merapi Yogyakarta  </div>
              </div>
              <div className="col-6 col-lg-3 ">
                <img src={item2} alt="TelukBogam" />
                <div className="telukbogam">Teluk Bogam Kalimantan  </div>
              </div>
              <div className="col-6 col-lg-3 ">
                <img src={item3} alt="Bromo" />
                <div className="bromo">Bromo Malang </div>
              </div>
              <div className="col-6 col-lg-3 ">
                <img src={item4} alt="Malioboro" />
                <div className="malioboro">Malioboro Yogyakarta  </div>
              </div>
            </div>
          </div>
          <div className="text-pic">
            <div className="d-inline-block position-relative img-1">
              <img src={element} alt="Element" />
              <img src={elementTwo} alt="Element-2" class="element" />
              <div className="element-2"><i class="fa-solid fa-plus"></i></div>
              <div className="d-flex element-3">
                <i class="fa-solid fa-circle-chevron-left"></i>
                <i class="fa-solid fa-circle-chevron-right"></i>
              </div>
            </div>
          </div>
          <div className="texts2">
            <p>Testimonials</p>
          </div>
          <div className="row">
            <div className="col">
              <div className="stars d-flex">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="text-description d-flex">
                <img src={element}alt="Element" />
                <p className="d-text"> ”It was the right decision to rent vehicle here, I spent less money and enjoy the trip. It was an amazing experience to have a ride for wildlife trip!”</p>
                </div>
              <div className="s-text">
                <p className="s-text-1">Edward Newgate</p>
                <p className="d-text-1">Founder Circle</p>
              </div>
            </div>
            <div className="col">
              <img src={people} alt="People" />
            </div>
          </div>
        </footer>
        <Footer />
      </>
    )
  }
}