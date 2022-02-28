import React, { useState, useEffect } from 'react'
import {default as axios} from 'axios'
import { useNavigate, useSearchParams, Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import people from '../assets/images/people-2.png'
import Footer from '../components/Footer'
import { FaCircle } from 'react-icons/fa'
import { GoMail } from 'react-icons/go'
import { FaChevronRight } from 'react-icons/fa'

export const VehicleType = () => {
  const [popular, setPopular] = useState([])
  const [car, setCar] = useState([])
  const [motorbike, setMotorbike] = useState([])
  const [bike, setBike] = useState([])
  const [page, setPage] = useState({})
  const [errorMsg, setErrorMsg] = useState(null)

  const navigate = useNavigate()
  let [searchParams, setSearchParams] = useSearchParams();
  
  useEffect(()=>{
    getCar()
  },[])

  useEffect (()=>{
    getMotorbike()
  },[])

  useEffect (()=>{
    getPopular()
  },[])

  useEffect (()=>{
    getBike()
  },[])
  

  const getPopular = async () => {
    const {data: data2} = await axios.get ('http://localhost:8080/history/vehicles')
    console.log(data2)
    setPopular(data2.result)
  }

  const getCar = async ()=> {
    const {data}= await axios.get ('http://localhost:8080/vehicles/category/1')
    setCar(data.results)
    setPage(data.pageInfo)
  }

  const getMotorbike = async () => {
    const {data: data1}= await axios.get ('http://localhost:8080/vehicles/category/2')
    setMotorbike(data1.results)
    setPage(data1.pageInfo)
  }

  const getBike = async () => {
    const {data: data1}= await axios.get ('http://localhost:8080/vehicles/category/3')
    setBike(data1.results)
    setPage(data1.pageInfo)
  }

  const goToDetail = (id)=> {
    navigate(`/vehicles/${id}`)
  }

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <Link to='/' className="navbar-brand">
          <img src={logo} alt="logo" className='logo'/>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to='/' className="nav-link active" aria-current="page">Home</Link>
            </li>
            <li className="nav-item">
              <Link to='/VehicleType' className="nav-link">Vehicle Type</Link>
            </li>
            <li className="nav-item">
              <Link to='/History' className="nav-link">History </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Home">About</a>
            </li>
          </ul>
          <div className="toggled-action d-inline-block position-relative">
            <div className="d-inline-block position-relative mail">
              <span className='position-relative goMail'>
                <GoMail className='mail-1'/>
                <FaCircle color='#71543A' className='circle'/>
                <p className='val'>1</p>
              </span>              
              <Link to='/profil' className='profile-nav'><img src={people} alt="Profile-Picure" className="img-thumbnail rounded-circle" /></Link> 
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div  className="list">
    <div className="pop">
      <div className="texts d-flex justify-content-between">
        <div>
          <p className="hei">Popular in Town </p>
        </div>
        <div>
          <Link to='/viewDetail' className='nav-link hai'>view all <FaChevronRight /> </Link>
        </div>      
      </div>
      <div className="image container">
        <div className="row">
          {popular.map((data2, idx)=>{
            console.log(data2.image)
            return(
              <div key={String(data2.id)} onClick={()=>goToDetail(data2.id)} style={{cursor: 'pointer'}} className='col-6 col-lg-3'>
                <div className='position-relative mb-2'>
                  <img className='img-fluid' src={data2.image} alt={data2.brand} />
                  <div className='position-absolute bottom-0 start-0 bg-white px-3 py-2 popular'>{data2.brand} </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
    <div className="car">
      <div className="texts d-flex justify-content-between">
        <div>
          <p className="hei">Cars </p>
        </div>
        <div>
          <Link to='/viewMoreCar' className='nav-link hai'>view all <FaChevronRight /></Link>
        </div>      
      </div>
      <div className="image container">
        <div className="row">
          {car.map((data, idt)=>{
            return(
              <div key={String(data.id)} onClick={()=>goToDetail(data.id)} style={{cursor: 'pointer'}} className='col-6 col-lg-3'>
                <div className='position-relative mb-2'>
                  <img className='img-fluid' src={data.image} alt={data.brand} />
                  <div className='position-absolute bottom-0 start-0 bg-white px-3 py-2 cars'>{data.brand}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
    <div className="motorbike">
      <div className="texts d-flex justify-content-between">
        <div>
          <p className="hei">Motorbike </p>
        </div>
        <div>
          <Link to='/viewMoreMotorbike' className='nav-link hai'>view all <FaChevronRight /></Link>
        </div>      
      </div>
      <div className="image container">
        <div className="row">
          {motorbike.map((data1, idu)=>{
            return(
              <div key={String(data1.id)} onClick={()=>goToDetail(data1.id)} style={{cursor: 'pointer'}} className='col-6 col-lg-3'>
                <div className='position-relative mb-2'>
                  <img className='img-fluid' src={data1.image} alt={data1.brand} />
                  <div className='position-absolute bottom-0 start-0 bg-white px-3 py-2 motorcycle'>{data1.brand}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
    <div className="bike">
      <div className="texts d-flex justify-content-between">
        <div>
          <p className="hei">Bike </p>
        </div>
        <div>
          <Link to='/viewMoreBike' className='nav-link hai'>view all <FaChevronRight /></Link> 
        </div>      
      </div>
      <div className="image container">
        <div className="row">
          {bike.map((data1, idu)=>{
            return(
              <div key={String(data1.id)} onClick={()=>goToDetail(data1.id)} style={{cursor: 'pointer'}} className='col-6 col-lg-3'>
                <div className='position-relative mb-2'>
                  <img className='img-fluid' src={data1.image} alt={data1.brand} />
                  <div className='position-absolute bottom-0 start-0 bg-white px-3 py-2 bike'>{data1.brand}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  </div>
  <Footer />
  </>
  )
  
}

export default VehicleType