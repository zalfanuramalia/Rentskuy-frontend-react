import React from 'react'
import Footer from '../components/Footer'
import { FaChevronLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Button } from '../components/Button'
import fixie from '../assets/images/fixie-grey.png'
import Layout from '../components/Layout'

export const Reservation = () => {
      return (
      <Layout>
        <div className="payment">
        <div className="reserve">
          <Link to='/VehicleType' style={{textDecoration:"none"}} className="d-flex"> <span><FaChevronLeft /></span>  <p>Reservation</p> </Link>
        </div>
        <div className="container-fluid g-0">
          <div className="row g-0">
            <div className="col">
              <img src={fixie} alt="Fixie" />
            </div>
            <div className="col info">
              <div>
                <h1 className="text-1">Fixie - Gray Only </h1>
                <h1 className="text-2"> Yogyakarta</h1>
                <p className="text-3">No Prepayment</p>
                <Button></Button>
                <div className="text-4">
                  <p>Reservation Date :</p>
                </div>
                <div className="op-1">
                  <div className="date" id="datepicker">
                    <input type="text" class="form-control pick" placeholder="Select date" />
                    <span className="input-group-append"></span>
                  </div>       
                </div>
                <div className="op-2">
                  <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                    <option selected>1 Day</option>
                    <option value="1">2 Day</option>
                    <option value="2">3 Day</option>
                    <option value="3">4 Day</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pay-1">
          <Link to='/Payment' className="nav-link active" aria-current="page"><button>Pay now : Rp. 178.000</button></Link>
        </div>
      </div>
      <Footer />
      </Layout>
    )
}

export default Reservation


// import React, { Component } from 'react'
// import Footer from '../components/Footer'
// import Navbar from '../components/Navbar'
// import { FaChevronLeft, FaChevronDown } from 'react-icons/fa'
// import { Link } from 'react-router-dom'

// export default class Reservation extends Component {
//     state = {
//         value: 0
//     }

//     changeValue = (tombol) => {
//         if(tombol === "minus"){
//             this.setState({value: this.state.value-1})
//         } else {
//             this.setState({value: this.state.value+1})
//         }
        
//     }

//   render() {
//     return (
//       <>
//         <Navbar />
//         <div className="payment">
//         <div className="reserve">
//           <Link to='/VehicleType' style={{textDecoration:"none"}} className="d-flex"> <span><FaChevronLeft /></span>  <p>Reservation</p> </Link>
//         </div>
//         <div className="container-fluid g-0">
//           <div className="row g-0">
//             <div className="col">
//               <img src="./assets/images/fixie-2.png" alt="Fixie" />
//             </div>
//             <div className="col info">
//               <div>
//                 <h1 className="text-1">Fixie - Gray Only </h1>
//                 <h1 className="text-2"> Yogyakarta</h1>
//                 <p className="text-3">No Prepayment</p>
//                 <div className="qty ">
//                     <button className="minus " onClick={()=>this.changeValue("minus")}>-</button>
//                     <div type="number" className="count" name="qty">{this.state.value}</div>
//                     <button className="plus " onClick={()=>this.changeValue("plus")}>+</button>
//                 </div>
//                 <div className="text-4">
//                   <p>Reservation Date :</p>
//                 </div>
//                 <div className="op-1">
//                   <div className="date" id="datepicker">
//                     <input type="text" class="form-control pick" placeholder="Select date" />
//                     <span className="input-group-append"></span>
//                   </div>       
//                 </div>
//                 <div className="op-2">
//                   <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
//                     <option selected>1 Day</option>
//                     <option value="1">2 Day</option>
//                     <option value="2">3 Day</option>
//                     <option value="3">4 Day</option>
//                   </select>
//                   <FaChevronDown />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="pay-1">
//           <button>Pay now : Rp. 178.000</button>
//         </div>
//       </div>
//   <Footer />
//       </>
//     )
//   }
// }
