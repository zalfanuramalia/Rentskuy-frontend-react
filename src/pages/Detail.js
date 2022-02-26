import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { getData } from '../helpers/http'
import Footer from '../components/Footer'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

export const Detail = (props) => {
    const [vehicles, setVehicles] = useState({})
    const [count, setCount] = useState(0)
    
    const onPlus = () => {
      setCount(count + 1);
    };
    const onMinus = () => {
      setCount(count - 1);
    };

    const {id} = useParams()

    useEffect(()=>{
        getDataComponent(id)
    },[])

    useEffect(()=>{
      console.log(vehicles)
    })

    useEffect(()=>{
      setCount(count)
    },[])

    const getDataComponent = async (id)=>{
        try{
            const {data} = await getData(`http://localhost:8080/vehicles/${id}`, props.history)
            console.log(data)
            setVehicles(data.results)
        }catch(e){
            
        }
    }
  return (
    <>
    <Navbar />
    <div className='detail-vehicle'>
      <div className="back">
        <Link to='/VehicleType' className="d-inline-flex justify-content-start" aria-current="page"> <FaChevronLeft /> <p>Detail</p> </Link>
      </div>
      <div className="vehicles">
        <div className="vehicles-details d-flex justify-content center flex-wrap position-relative">
          <div className="vehicles-image p-3">
            <div className="main-image">
              <img className='img-fluid' src={vehicles?.image} alt="charImg" />
            </div> 
          </div>
          <div className="description">
            <div className="details p-1 position-relative">
              <div className="city">
                <h2>{vehicles?.brand}</h2>
                <h3>{vehicles?.location}</h3>
              </div>
              <h4 className='available'>{vehicles?.isAvailable}</h4>
              <p className='pre'>{vehicles?.can_prepayment}</p>
              <div class="about">
                <p>Capacity : 1 person</p>
                <p>Type : Bike</p>
                <p>Reservation before 2 PM</p>
              </div>
              <div className="price position-absolute">Rp.{vehicles?.price}/day</div>
            </div>
          </div>
        </div>
      </div>
      <form className="position-relative container reserve">
        <div className="quantity row">
          <div className='col d-flex px-1'>
            <FaChevronLeft /> 
            <img className='img-fluid' src={vehicles?.image} alt='charImg' />
            <img className='img-fluid' src={vehicles?.image} alt='charImg' />
            <FaChevronRight />
          </div>
          <div className='col d-flex'>
            <button onClick={onMinus}>-</button>
            <div>{count}</div>
            <button variant="contained" onClick={onPlus}>+</button>
          </div>
        </div>
      </form>
      <div className="button container">
        <div className='row'>
          <div className='col'>
            <Link to='/' className="button-chat btn btn-primary chat " type="button">Chat Admin</Link>
            <Link to='/reservation' className="submit-button btn btn-primary chat">Reservation</Link>
            <Link to="/" className="button-like btn btn-primary like " role="button"><i className="fa-solid fa-heart"></i>Like</Link>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Detail