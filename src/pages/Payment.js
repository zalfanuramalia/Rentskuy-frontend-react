import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import { FaChevronLeft } from 'react-icons/fa'
import { https } from '../helpers/https'
import { useParams } from 'react-router-dom'
import { connect, useDispatch, useSelector } from 'react-redux'
import { getDetail } from '../redux/actions/detail'

export const Payment = ({getDetail}) => {
  const {detail} = useSelector(state => state)
  const [vehicles, setVehicles] = useState({})
  const buttons = useSelector(state=>state.buttons)
  const [text, setText] = useState('');

  const dispatch = useDispatch()
  const {id} = useParams()

  const inputHandler = event => {
    setText(event.target.value);
  }

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    alert('Text copied');
  }

  useEffect(()=>{
    console.log(buttons);
  }, [buttons])

  useEffect(()=>{
    getDetail(id)
  },[])

  useEffect(()=>{
    console.log(vehicles)
  },[])

  const goBack = () => {
    window.history.back()
  }
    return (
      <Layout>
        <div className="payment">
    <     div className="reserve">
            <div onClick={goBack} className="back-btn d-flex justify-content-start back" style={{cursor: 'pointer'}}>
              <span><FaChevronLeft /></span> 
              <p>Payment</p> 
            </div>
    </div>
    <div className="container-fluid g-0">
      <div className="row g-0 in">
        <div className="col info-img g-0">
          <img src={detail.detail?.image} alt="Fixie" />
        </div>
        <div className="col info-pay g-0">
          <h1 className="text-1">{detail.detail?.brand} </h1>
          <h1 className="text-2"> {detail.detail?.location}</h1>
          <p className="text-3">{detail.detail?.can_prepayment}</p>
          <p className="text-4" onChange={inputHandler}>#FG1209878YZS</p>
          <button onClick={copy} className="text-5">Copy booking code</button>
        </div>
      </div>
    </div>
  </div>
  <div className="result-1">
    <div className="d-flex res">
      <div className="res-1">
        <p>Quantity : {buttons.value} cars</p>
      </div>
      <div className="d-inline-flex p-2 bd-highlight res-2">
        <p>Reservation Date :</p>
        <span>Jan 18 - 20, 2021</span>
      </div>
    </div>
    <div className="d-flex res-4">
      <div className="res-5">
        <p className="get-1">Order details :</p>
        <p className="get-2">1 bike : Rp. 78.000 <br/> 1 bike : Rp. 78.000 </p>
        <p className="get-3">Total : 178.000</p>
      </div>
      <div className="d-flex res-6">
        <p className="id-1">Identity :</p>
        <p className="id-2">Samantha Doe (+6290987682) <br/> samanthadoe@mail.com</p>
      </div>
    </div>
    <div className="d-flex ress">
      <div className="ress-1">
        <p>Payment code :</p>
      </div>
      <div className="d-flex ress-2">
        <p>#FG1209878YZS</p>
        <button onClick={copy}>Copy</button>
      </div>
      <div className=" d-flex ress-3">
        <select className="form-select sel-op" aria-label="Default select example">
          <option style={{display:'none'}} selected>Select payment methods</option>
          <option value="1">Cash</option>
          <option value="2">Transfer</option>
        </select>
        <span><i className="fa-solid fa-chevron-down"></i></span>
      </div>
    </div>
  </div>
  <div className=" pay">
    <button className="d-flex" >
      <p className="fin">Finish payment :</p>
      <p className="time">59:30</p> 
    </button>
  </div>
  <Footer />
      </Layout>
    )
}

const mapStateToProps = state => ({detail: state.detail})

const mapDispatchToProps = {getDetail}

export default connect(mapStateToProps, mapDispatchToProps)(Payment)