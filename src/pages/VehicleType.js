import React, { Component } from 'react'

export default class VehicleType extends Component {
  render() {
    return (
        <div  class="list">
        <div class="pop">
          <div class="texts d-flex justify-content-between">
            <div>
              <p class="hei">Popular in Town </p>
            </div>
            <div>
              <p class="hai">view all <i class="fa-solid fa-chevron-right"> </i></p> 
            </div>      
          </div>
          <div class="image container">
            <div class="row ">
              <div class="col-6 col-lg-3 ">
                <img src="./assets/images/merapi.png" class="img-fluid " alt="Merapi" />
                <div class="merapi">Merapi <span>Yogyakarta</span>   </div>
              </div>
              <div class="col-6 col-lg-3">
                <img src="./assets/images/telukbogam.png" class="img-fluid " alt="TelukBogam" />
                <div class="telukbogam">Teluk Bogam <span>Kalimantan</span>   </div>
              </div>
              <div class="col-6 col-lg-3">
                <img src="./assets/images/bromo.png" class="img-fluid " alt="Bromo" />
                <div class="bromo">Bromo  <span>Malang</span>  </div>
              </div>
              <div class="col-6 col-lg-3">
                <img src="./assets/images/malioboro.png" class="img-fluid" alt="Malioboro" />
                <div class="malioboro"> Malioboro  <span>Yogyakarta </span>  </div>
              </div>
            </div>
          </div>
        </div>
        <div class="car">
          <div class="texts d-flex justify-content-between">
            <div>
              <p class="hei">Cars </p>
            </div>
            <div>
              <p class="hai">view all <i class="fa-solid fa-chevron-right"> </i></p> 
            </div>      
          </div>
          <div class="image container">
            <div class="row">
              <div class="col-6 col-lg-3 ">
                <img src="./assets/images/van.png" class="img-fluid" alt="Van" />
                <div class="merapi">Van  Yogyakarta  </div>
              </div>
              <div class="col-6 col-lg-3 ">
                <img src="./assets/images/lamborghini.png" class="img-fluid" alt="Lamborghini" />
                <div class="telukbogam">Lamborghini  South Jakarta  </div>
              </div>
              <div class="col-6 col-lg-3 ">
                <img src="./assets/images/jeep.png" class="img-fluid" alt="Jeep" />
                <div class="bromo">Jeep Malang </div>
              </div>
              <div class="col-6 col-lg-3 ">
                <img src="./assets/images/white-jeep.png" class="img-fluid" alt="White Jeep" />
                <div class="malioboro">White Jeep  Kalimantan  </div>
              </div>
            </div>
          </div>
        </div>
        <div class="motorbike">
          <div class="texts d-flex justify-content-between">
            <div>
              <p class="hei">Motorbike </p>
            </div>
            <div>
              <p class="hai">view all <i class="fa-solid fa-chevron-right"> </i></p> 
            </div>      
          </div>
          <div class="image container">
            <div class="row">
              <div class="col-6 col-lg-3 ">
                <img src="./assets/images/vespa.png" class="img-fluid" alt="Vespa" />
                <div class="merapi">Vespa  Yogyakarta  </div>
              </div>
              <div class="col-6 col-lg-3 ">
                <img src="./assets/images/honda-klx.png" class="img-fluid" alt="HondaKLX" />
                <div class="telukbogam">Honda KLX  Kalimantan  </div>
              </div>
              <div class="col-6 col-lg-3 ">
                <img src="./assets/images/honda.png" class="img-fluid" alt="Honda" />
                <div class="bromo">Honda Malang </div>
              </div>
              <div class="col-6 col-lg-3 ">
                <img src="./assets/images/matic-bike.png" class="img-fluid" alt="MaticBike" />
                <div class="malioboro">Matic Bike Yogyakarta  </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bike">
          <div class="texts d-flex justify-content-between">
            <div>
              <p class="hei">Bike </p>
            </div>
            <div>
              <p class="hai">view all <i class="fa-solid fa-chevron-right"> </i></p> 
            </div>      
          </div>
          <div class="image container">
            <div class="row">
              <div class="col-6 col-lg-3 ">
                <img src="./assets/images/fixie.png" class="img-fluid" alt="Fixie" />
                <div class="merapi">Fixie Yogyakarta  </div>
              </div>
              <div class="col-6 col-lg-3 ">
                <img src="./assets/images/sport-bike.png" class="img-fluid" alt="SportBike" />
                <div class="telukbogam">Sport Bike  Kalimantan  </div>
              </div>
              <div class="col-6 col-lg-3 ">
                <img src="./assets/images/onthel.png" class="img-fluid" alt="Onthel" />
                <div class="bromo">Onthel Malang </div>
              </div>
              <div class="col-6 col-lg-3 ">
                <img src="./assets/images/fixie-grey.png" class="img-fluid" alt="FixieGrey" />
                <div class="malioboro">Fixie Grey  Yogyakarta  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
