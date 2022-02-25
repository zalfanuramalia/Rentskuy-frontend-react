import React, { useState, useEffect } from 'react'
import {default as axios} from 'axios'
import { useNavigate, useSearchParams, Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import people from '../assets/images/people-2.png'
import Footer from '../components/Footer'
import { FaCircle } from 'react-icons/fa'
import { GoMail } from 'react-icons/go'
import image from '../assets/images/image-not-found.png'

export const VehicleType = () => {
  const [popular, setPopular] = useState([])
  const [car, setCar] = useState([])
  const [motorbike, setMotorbike] = useState([])
  const [page, setPage] = useState({})
  const [errorMsg, setErrorMsg] = useState(null)

  const navigate = useNavigate()
  let [searchParams, setSearchParams] = useSearchParams();
  
  useEffect(()=>{
    const brand = searchParams.get('brand')

    if(brand){
        const url = (brand)=> `http://localhost:8080/vehicles/category/1?search=${brand}`
        document.getElementById('search').elements['search'].value = brand
        getNextData(url(brand), true)
    }else{
        getCar()
    }
  },[])

  useEffect (()=>{
    getMotorbike()
  },[])

  useEffect (()=>{
    getPopular()
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

  const getNextData = async (url, replace = false) => {
        try{
            setErrorMsg(null)
            const {data} = await axios.get(url)
            if(replace){
                setCar(data.result)
            }else{
                setCar([
                    ...car,
                    ...data.result
                ])
            }
            setPage(data.info)
        }catch(e){
            if(e.message.includes('404')){
                setErrorMsg('Data not found!')
                setCar([])
                setPage({
                    next: null
                })
            }
        }
    }

  const onSearch = async(event)=>{
    event.preventDefault();
    const url = (brand)=> `http://localhost:8080/vehicles?search=${brand}`
    const brand = event.target.elements["search"].value
    setSearchParams({brand})
    await getNextData(url(brand), true)
  }

  const goToDetail = (id)=> {
    navigate(`/vehicles/${id}`)
  }

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <a className="navbar-brand" href="Home">
          <img src={logo} alt="logo" className='logo'/>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to='/Home' className="nav-link active" aria-current="page">Home</Link>
            </li>
            <li className="nav-item">
              <Link to='/VehicleType' className="nav-link">Vehicle Type</Link>
            </li>
            <li className="nav-item">
              <Link to='/History' className="nav-link">History</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Home">About</a>
            </li>
          </ul>
          <div className="toggled-action d-inline-block position-relative">
            <div className="d-inline-block position-relative mail">
              <span className='position-relative goMail'>
                <GoMail className='mail-1'/>
                <FaCircle color='#FE6696' className='circle'/>
                <p className='val'>1</p>
              </span>              
              <img src={people} alt="Profile-Picure" className="img-thumbnail rounded-circle" />
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div className="tombol container"  >
      <div className='row mt-5'>
        <div className='col-md-12'>
          <form id='search' onSubmit={onSearch} className="input-group" >
            <input name='search' type="search" className="form-control" placeholder="Search vehicle" aria-label="Search" aria-describedby="search-addon" />
            {/* <select name='type' className='form-control'>
              <option value='' style={{display: 'none'}}>Type</option>
              <option value="cars">Car</option>
              <option value="motorbike">Motorcycle</option>
              <option value="bike">Bike</option>
            </select> */}
            <button type='submit' className='btn btn-primary'>Search</button>
          </form>
          {errorMsg!==null&&
            <div className='row my-5'>
              <div className='col'>
                <div className='alert alert-warning alert-dismissible fade show' role='alert'>
                  <span>{errorMsg}</span>
                  <button onClick={()=>setErrorMsg(null)} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
              </div>
            </div>
          } 
        </div>
      </div>              
    </div>
    <div  className="list">
    <div className="pop">
      <div className="texts d-flex justify-content-between">
        <div>
          <p className="hei">Popular in Town </p>
        </div>
        <div>
          <p className="hai">view all <i className="fa-solid fa-chevron-right"> </i></p> 
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
                  <div className='position-absolute bottom-0 start-0 bg-white px-3 py-2'>{data2.brand}</div>
                </div>
              </div>
            )
          })}
        </div>
        {/* {page.next!==null&&
          <div className='row my-5'>
            <div className='col-md-12 text-center'>
              <button onClick={()=>getNextData(page.next)} className='btn btn-primary'>Load More</button>
            </div>
          </div>
        } */}
      </div>
    </div>
    <div className="car">
      <div className="texts d-flex justify-content-between">
        <div>
          <p className="hei">Cars </p>
        </div>
        <div>
          <p className="hai">view all <i className="fa-solid fa-chevron-right"> </i></p> 
        </div>      
      </div>
      <div className="image container">
        <div className="row">
          {car.map((data, idt)=>{
            return(
              <div key={String(data.id)} onClick={()=>goToDetail(data.id)} style={{cursor: 'pointer'}} className='col-6 col-lg-3'>
                <div className='position-relative mb-2'>
                  <img className='img-fluid' src={data.image} alt={data.brand} />
                  <div className='position-absolute bottom-0 start-0 bg-white px-3 py-2'>{data.brand}</div>
                </div>
              </div>
            )
          })}
        </div>
        {/* {page.next!==null&&
          <div className='row my-5'>
            <div className='col-md-12 text-center'>
              <button onClick={()=>getNextData(page.next)} className='btn btn-primary'>Load More</button>
            </div>
          </div>
        } */}
      </div>
    </div>
    <div className="motorbike">
      <div className="texts d-flex justify-content-between">
        <div>
          <p className="hei">Motorbike </p>
        </div>
        <div>
          <p className="hai">view all <i className="fa-solid fa-chevron-right"> </i></p> 
        </div>      
      </div>
      <div className="image container">
        <div className="row">
          {motorbike.map((data1, idu)=>{
            return(
              <div key={String(data1.id)} onClick={()=>goToDetail(data1.id)} style={{cursor: 'pointer'}} className='col-6 col-lg-3'>
                <div className='position-relative mb-2'>
                  <img className='img-fluid' src={data1.image} alt={data1.brand} />
                  <div className='position-absolute bottom-0 start-0 bg-white px-3 py-2'>{data1.brand}</div>
                </div>
              </div>
            )
          })}
        </div>
        {/* {page.next!==null&&
          <div className='row my-5'>
            <div className='col-md-12 text-center'>
              <button onClick={()=>getNextData(page.next)} className='btn btn-primary'>Load More</button>
            </div>
          </div>
        } */}
      </div>
    </div>
    <div className="bike">
      <div className="texts d-flex justify-content-between">
        <div>
          <p className="hei">Bike </p>
        </div>
        <div>
          <p className="hai">view all <i className="fa-solid fa-chevron-right"> </i></p> 
        </div>      
      </div>
      <div className="image container">
        <div className="row">
          <div className="col-6 col-lg-3 ">
            <img src="./assets/images/fixie.png" className="img-fluid" alt="Fixie" />
            <div className="merapi">Fixie Yogyakarta  </div>
          </div>
          <div className="col-6 col-lg-3 ">
            <img src="./assets/images/sport-bike.png" className="img-fluid" alt="SportBike" />
            <div className="telukbogam">Sport Bike  Kalimantan  </div>
          </div>
          <div className="col-6 col-lg-3 ">
            <img src="./assets/images/onthel.png" className="img-fluid" alt="Onthel" />
            <div className="bromo">Onthel Malang </div>
          </div>
          <div className="col-6 col-lg-3 ">
            <img src="./assets/images/fixie-grey.png" className="img-fluid" alt="FixieGrey" />
            <div className="malioboro">Fixie Grey  Yogyakarta  </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
  </>
  )
  
}

export default VehicleType