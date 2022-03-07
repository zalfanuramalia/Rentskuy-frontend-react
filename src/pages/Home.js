import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import NavbarHome from '../components/NavbarHome'
import element from '../assets/images/element.png'
import people from '../assets/images/people.png'
import {FaStar} from 'react-icons/fa'
import { Link} from 'react-router-dom'
import { FaChevronRight } from 'react-icons/fa'
import { getPopularHome } from '../redux/actions/popular'
import { connect, useSelector } from 'react-redux'
import Skeleton from  'react-loading-skeleton'

export const Home = ({getPopularHome}) => {
    const {popular: populars} = useSelector (state => state)

    const navigate = useNavigate()
    
  useEffect (()=>{
    getPopularHome()
  },[])

const goToDetail = (id)=> {
  navigate(`/vehicles/${id}`)
}
  return (
      <>
        <NavbarHome />
        <header className="header-home img-fluid">
          <div className="content-home img-fluid">
            <div className="header-pic ">
              <h1 className="text-1  fs-0-0 mb-5 text-center text-md-start">Explore and Travel</h1>
              <h1 className="text-2 fs-5 mt-4 w-50 text-center text-md-start"> Vehicle Finder </h1>
              <div className="text-3 w-50 text-center text-md-start"><i className="fa-solid fa-horizontal-rule mt-4"></i></div>
            </div>
            <form  className='filter-home container mt-5'>
              <div className="row row-cols-1 row-cols-md-12 type-1">
                <div className="my-2 col-md-3 col-md-6 g-0 form-select-sm select-1 position-relative">
                  <select className="form-select" aria-label="Default select example">
                    <option style={{display:'none'}} selected>Location</option>
                    <option value="1">Yogyakarta</option>
                    <option value="2">Bandung</option>
                  </select>
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
                <div className="my-2 col-md-3 col-md-6 g-0 form-select-sm select-2 position-absolute">
                  <select className="form-select" aria-label="Default select example">
                    <option style={{display:'none'}} selected>Type</option>
                    <option value="1">Cars</option>
                    <option value="2">Motorbike</option>
                    <option value="3">Bike</option>
                  </select>
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="row type-2">
                <div className="my-2 col-md-3 col-md-6 form-select-sm select-1 position-relative">
                  <select className="form-select" aria-label="Default select example">
                    <option style={{display:'none'}} selected>Payment</option>
                    <option value="1">Cash</option>
                    <option value="2">Transfer</option>
                  </select>
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
                <div className="my-2 col-md-3 col-md-6 g-0 select-2 position-absolute">
                  <input className="form-control" type="date" name="date" placeholder='Date' />
                </div>
              </div>
              <button type='submit' className="explore ">Explore</button>
            </form>
          </div>
        </header>
        <footer className='container-md-fluid control'>
          <div className="texts d-flex justify-content-between">
            <div>
              <p className="hei">Popular in Town </p>
            </div>
            <Link to='/viewPopular' className='nav-link hai'>view all <FaChevronRight /> </Link>
          </div>
          <div className="image container">
          {populars.isloading &&
            <Skeleton height={150} containerClassName='row' count={8} wrapper={({children})=>(<div className='col-md-3'>{children}</div>)} />
          }
          {!populars.isloading && <div className="row">
            {populars.popular.map((data2, idx)=>{
            return(
              <div key={String(data2.id)} onClick={()=>goToDetail(data2.id)} style={{cursor: 'pointer'}} className='col-6 col-lg-3'>
                <div className='position-relative mb-2'>
                  <img className='img-fluid' src={data2.image} alt={data2.brand} />
                  <div className='position-absolute bottom-0 start-0 bg-white px-3 py-2 popular'>{data2.brand} </div>
                </div>
              </div>
            )
          })}
        </div>}
      </div>
          <div className="text-pic d-inline-block position-relative img-1">
            <img className='element' src={element} alt="Element" />            
          </div>
          <div className="texts2">
            <p>Testimonials</p>
          </div>
          <div className='container'>
            <div className='d-flex flex-wrap'>
            <div className="text-left">
              <div className="stars text-left text-md-start d-flex justify-content-justify">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="text-description ">
                <p className="d-text"> ”It was the right decision to rent vehicle here, I spent less money and enjoy the trip. It was an amazing experience to have a ride for wildlife trip!”</p>
              </div>
              <div className="s-text">
                <p className="s-text-1">Edward Newgate</p>
                <p className="d-text-1">Founder Circle</p>
              </div>
            </div>
            <div className="name align-items-center px-5">
              <img src={people} alt="People" />
            </div>
            </div>
          </div>
        </footer>
        <Footer />
      </>
    )
  }

const mapStateToProps = state => ({popular: state.popular})

const mapDispatchToProps = {getPopularHome}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

