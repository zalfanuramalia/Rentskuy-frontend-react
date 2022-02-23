import React, { Component } from 'react'
import Footer from '../components/Footer'
import peopleThree from '../assets/images/people-3.png'

export default class ViewMoreDetail extends Component {
  render() {
    return (
      <>
        <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <a class="navbar-brand" href="/Home">
        <img src="./assets/images/logo.png" alt="logo" />
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/Home">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./vehicle.html">Vehicle</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/History">History</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/">About</a>
          </li>
        </ul>
        <div class="tombol">
          <div class="input-group input-group-md">
            <input type="search" class="form-control rounded" placeholder="Search vehicle" aria-label="Search" aria-describedby="search-addon" />
            <span class="input-group-text border-0 searcher" id="search-addon">
              <i class="fas fa-search"></i>
            </span>
          </div>
        </div>
        <div class="toggled-action d-inline-block position-relative">
          <div class="d-inline-block position-relative mail">
            <img src="./assets/images/message.png" alt="Email" />
            <span><i class="fa-solid fa-circle-1"></i></span>
            <span><i class="fa-solid fa-1"></i></span>
          </div>
          <img className="img-thumbnail rounded-circle" src={peopleThree} alt="people" />
        </div>
      </div>
    </div>
  </nav>
  <div  class="list">
    <div class="pop">
      <div class="texts">
        <div>
          <p class="hei">Popular in Town </p>
        </div>
        <div>
          <p class="click">Click item to see details and reservation</p>
        </div>
      </div>
      <div class="image d-flex justify-content-between">
        <div>
          <img src="./assets/images/merapi.png" alt="Merapi" />
          <div class="merapi">Merapi <br/> <span>Yogyakarta</span>   </div>
        </div>
        <div>
          <img src="./assets/images/telukbogam.png" alt="TelukBogam" />
          <div class="telukbogam">Teluk Bogam <br/> Kalimantan  </div>
        </div>
        <div>
          <img src="./assets/images/bromo.png" alt="Bromo" />
          <div class="bromo">Bromo <br />Malang </div>
        </div>
        <div>
          <img src="./assets/images/malioboro.png" alt="Malioboro" />
          <div class="malioboro">Malioboro <br/> Yogyakarta  </div>
        </div>
      </div>
    </div>
    <div class="car">
      <div class="texts d-flex justify-content-between">
        <div>
          <p class="hei">Cars </p>
        </div>      
      </div>
      <div class="image d-flex justify-content-between">
        <div>
          <img src="./assets/images/van.png" alt="Van" />
          <div class="merapi">Van  Yogyakarta  </div>
        </div>
        <div>
          <img src="./assets/images/lamborghini.png" alt="Lamborghini" />
          <div class="telukbogam">Lamborghini  South Jakarta  </div>
        </div>
        <div>
          <img src="./assets/images/jeep.png" alt="Jeep" />
          <div class="bromo">Jeep Malang </div>
        </div>
        <div>
          <img src="./assets/images/white-jeep.png" alt="White Jeep" />
          <div class="malioboro">White Jeep  Kalimantan  </div>
        </div>
      </div>
    </div>
    <div class="motorbike">
      <div class="texts d-flex justify-content-between">
        <div>
          <p class="hei">Motorbike </p>
        </div>     
      </div>
      <div class="image d-flex justify-content-between">
        <div>
          <img src="./assets/images/vespa.png" alt="Vespa" />
          <div class="merapi">Vespa  Yogyakarta  </div>
        </div>
        <div>
          <img src="./assets/images/honda-klx.png" alt="HondaKLX" />
          <div class="telukbogam">Honda KLX  Kalimantan  </div>
        </div>
        <div>
          <img src="./assets/images/honda.png" alt="Honda" />
          <div class="bromo">Honda Malang </div>
        </div>
        <div>
          <img src="./assets/images/matic-bike.png" alt="MaticBike" />
          <div class="malioboro">Matic Bike  Yogyakarta  </div>
        </div>
      </div>
    </div>
    <div class="bike">
      <div class="texts d-flex justify-content-between">
        <div>
          <p class="hei">Bike </p>
        </div>    
      </div>
      <div class="image d-flex justify-content-between">
        <div>
          <img src="./assets/images/fixie.png" alt="Fixie" />
          <div class="merapi">Fixie  Yogyakarta  </div>
        </div>
        <div>
          <img src="./assets/images/sport-bike.png" alt="SportBike" />
          <div class="telukbogam">Sport Bike  Kalimantan  </div>
        </div>
        <div>
          <img src="./assets/images/onthel.png" alt="Onthel" />
          <div class="bromo">Onthel Malang </div>
        </div>
        <div>
          <img src="./assets/images/fixie-grey.png" alt="FixieGrey" />
          <div class="malioboro">Fixie Grey  Yogyakarta  </div>
        </div>
      </div>
    </div>
    <div class="last">
      <p>There is no vehicle left</p>
    </div>
  </div>
  <Footer />
      </>
    )
  }
}
