import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { increment, decrement } from '../redux/actions/buttons'
import { FaHeart, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { connect, useDispatch, useSelector } from 'react-redux'
import NumberFormat from 'react-number-format'
import { getDetail } from '../redux/actions/detail'
import Layout from '../components/Layout'

export const Detail = ({getDetail}) => {
    const {detail, auth} = useSelector(state => state)
    const [vehicles, setVehicles] = useState({})
    const buttons = useSelector(state=>state.buttons)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {id} = useParams()
    console.log({id})

    useEffect(()=>{
      console.log(buttons);
    }, [buttons])

    useEffect(()=>{
        getDetail(id)
    },[])

    useEffect(()=>{
      console.log(vehicles)
    },[])

    const onIncrement = (e)=>{
      e.preventDefault()
      dispatch(increment())
    }
  
    const onDecrement = (e)=>{
      e.preventDefault()
      dispatch(decrement())
    }

    const goBack = () => {
      window.history.back()
    }

    const goReservation = (id)=> {
      navigate(`/reservation/${id}`)
    }

  return (
    <>
    <Layout>
    <div className='detail-vehicle px-5 mx-5'>
      <div onClick={goBack} className="back-btn d-flex justify-content-start back px-4" style={{cursor: 'pointer'}}>
        <span><FaChevronLeft /></span> 
        <p>Detail</p> 
      </div>
      <div className="vehicles-details d-flex align-items-center px-4">
        <div className="main-image px-5 mt-4">
          <img className='img-fluid' src={detail.detail?.image} alt="charImg" width="500" height="500" />
        </div> 
        <div className="details position-relative mx-5 px-5">
          <div className="city">
            <h2 className='brand'>{detail.detail?.brand}</h2>
            <h3>{detail.detail?.location}</h3>
          </div>
          <h4 className='available'>{detail.detail?.isAvailable}</h4>
          <p className='pre'>{detail.detail?.can_prepayment}</p>
          <div class="about">
            <p>Capacity : {detail.detail?.qty}</p>
            <p>Type : {detail.detail?.category_id}</p>
            <p>Reservation before 2 PM</p>
          </div>
          <div className="price">
            <NumberFormat value={detail.detail?.price} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'Rp. '} suffix={'/day'} ></NumberFormat>
          </div>
        </div>
      </div>
      <form className="position-relative container reserve px-4 py-5">
        <div className="quantity row">
          <div className='col-md-6 col-12 d-flex justify-content-between two-image'>
            <div className='left'>
              <FaChevronLeft />
            </div>             
            <img className='img-fluid' src={detail.detail?.image} alt='charImg' width='300' height='200' />
            <img className='img-fluid' src={detail.detail?.image} alt='charImg' width='300' height='200' />
            <div className='right'>
              <FaChevronRight />
            </div>           
          </div>
          <div className='col-md-6 col-12 d-flex justify-content-center align-items-center counting'>         
            <button className="minus " onClick={onDecrement}>-</button>
            <h1 className="count">{buttons.value}</h1>
            <button className="plus "  onClick={onIncrement}>+</button>
          </div> 
        </div>
      </form>
      {auth.userData.role === 'Customer' ? (
        <div className="button container">
          <div className='row justify-content-around'>
            <div className='button-chat btn btn-primary col-2'>
              <Link to='/' style={{textDecoration:"none"}} type="button"> <p>Chat Admin</p></Link>
            </div>
            <button onClick={()=>goReservation(id)} style={{cursor: 'pointer'}} className="submit-button btn btn-primary"> <p>Reservation</p></button>
            <div className="button-like btn btn-primary ">
              <Link to="/" style={{textDecoration:"none"}} className='d-flex justifiy-content-around' role="button"> <span><FaHeart /> </span> <p>Like</p> </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="button container">
         <div className='row justify-content-around'>
           <div className='button-chat btn btn-primary col-2'>
             <Link to='/' style={{textDecoration:"none"}} type="button"> <p>Add to homepage</p></Link>
           </div>
           <button onClick={()=>goReservation(id)} style={{cursor: 'pointer'}} className="submit-button btn btn-primary"> <p>Edit Item</p></button>
         </div>
       </div>
      )}
    </div>
    </Layout>
    </>
  )
}

const mapStateToProps = state => ({detail: state.detail})

const mapDispatchToProps = {getDetail}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)