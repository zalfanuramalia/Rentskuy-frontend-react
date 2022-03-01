import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { getData } from '../helpers/http'
import Footer from '../components/Footer'
import { FaHeart, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Button from '../components/Button'

export const Detail = (props) => {
    const [vehicles, setVehicles] = useState({})
    const [count, setCount] = useState(0)    

    const onPlus = (count) => {
      setCount([count + 1]);
      
    };
    const onMinus = (count) => {
      setCount(count - 1);
    };

    const {id} = useParams()

    useEffect(()=>{
        getDataComponent(id)
    },[])

    useEffect(()=>{
      console.log(vehicles)
    },[])

    // useEffect(()=>{
    //   setCount(count)
    // },[])

    const getDataComponent = async (id)=>{
        try{
            const {data} = await getData(`http://localhost:8080/vehicles/${id}`, props.history)
            setVehicles(data.results)
        }catch(e){
          console.log(e)
        }
    }

    const goBack = () => {
      window.history.back()
    }

  return (
    <>
    <Navbar />
    <div className='detail-vehicle'>
      <div onClick={goBack} className="back-btn d-flex justify-content-start back" style={{cursor: 'pointer'}}>
        <span><FaChevronLeft /></span> 
        <p>Detail</p> 
      </div>
      <div className="vehicles">
        <div className="vehicles-details d-flex flex-wrap justify-content-start position-relative">
          <div className="main-image">
            <img className='img-fluid' src={vehicles?.image} alt="charImg" />
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
                <p>Capacity : {vehicles?.qty}</p>
                <p>Type : {vehicles?.category_id}</p>
                <p>Reservation before 2 PM</p>
              </div>
              <div className="price position-absolute">Rp.{vehicles?.price}/day</div>
            </div>
          </div>
        </div>
      </div>
      <form className="position-relative container reserve">
        <div className="quantity row">
          <div className='col-6 d-flex justify-content-between two-image py-4'>
            <div className='left'>
              <FaChevronLeft />
            </div>             
            <img className='img-fluid' src={vehicles?.image} alt='charImg' />
            <img className='img-fluid' src={vehicles?.image} alt='charImg' />
            <div className='right'>
              <FaChevronRight />
            </div>            
          </div>
          <Button></Button>
        </div>
      </form>
      <div className="button container">
        <div className='row justify-content-around'>
          <div className='button-chat btn btn-primary col-2'>
            <Link to='/' style={{textDecoration:"none"}} type="button"> <p>Chat Admin</p></Link>
          </div>
          <div className="submit-button btn btn-primary">
            <Link to='/reservation' style={{textDecoration:"none"}} > <p>Reservation</p> </Link>
          </div>
          <div className="button-like btn btn-primary ">
            <Link to="/" style={{textDecoration:"none"}} className='d-flex justifiy-content-around' role="button"> <span><FaHeart /> </span> <p>Like</p> </Link>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Detail