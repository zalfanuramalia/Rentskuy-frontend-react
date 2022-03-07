import React, { useState, useEffect } from 'react'
import Footer from '../components/Footer'
import {default as axios} from 'axios'
import { connect, useSelector } from 'react-redux'
import { useNavigate, useSearchParams} from 'react-router-dom'
import { getBike, filterBike } from '../redux/actions/bike'
import Skeleton from  'react-loading-skeleton'
import Layout from '../components/Layout'

export const ViewMoreBike = ({getBike, filterBike}) => {
  const {bike: bikes} = useSelector (state => state)
  const [bike, setBike] = useState([])
  const [page, setPages] = useState({})
  const [errorMsg, setErrorMsg] = useState(null)

  const navigate = useNavigate()
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(()=>{
    console.log(setBike)
    const brand = searchParams.get('brand')
    const location = searchParams.get('location')
    const type = searchParams.get('type')
    const payment = searchParams.get('payment')
    
    if(brand || location || type || payment){
        const url1 = (brand)=> `http://localhost:8080/vehicles/category/3?search=${brand}&location=${location}&type=${type}&payment=${payment}`
        document.getElementById('search').elements['search'].value = brand
        document.getElementById('search').elements['search'].value = location
        document.getElementById('search').elements['search'].value = type
        document.getElementById('search').elements['search'].value = payment
        getToData(url1(brand, location, type, payment), true)
    }else{
        getBike()
    }
  },[])

  const getToData = async (url1, replace = false) => {
    try{
        setErrorMsg(null)
        const {data} = await axios.get(url1)
        if(replace){
            setBike(data.results)
        }else{
            setBike([
                ...bike,
                ...data.results
            ])
        }
        setPages(data.info)
    }catch(e){
        if(e.message.includes('404')){
            setErrorMsg('Data not found!')
            setBike([])
            setPages({
                next: null
            })
          }
        }
    }

    const toSearch = async(event)=>{
      event.preventDefault();
      const brand = event.target.elements["search"].value
      const location = event.target.elements["location"].value
      const type = event.target.elements["type"].value
      const payment = event.target.elements["payment"].value
      setSearchParams({brand, location, type, payment})
      filterBike(brand, location, type, payment)
    }
  
    const goCarDetail = (id)=> {
      navigate(`/vehicles/${id}`)
    }
  return (
    <Layout>
      <div className="tombol container"  >
      <div className='row mt-5'>
        <div className='col-md-12'>
          <form id='search' onSubmit={toSearch} className="input-group" >
            <input name='search' type="search" className="form-control" placeholder="Search vehicle" aria-label="Search" aria-describedby="search-addon" />
            <select name='location' className='form-control'>
              <option value='' style={{display: 'none'}}>Location</option>
              <option value="cars">Yogyakarta</option>
              <option value="motorbike">Bandung</option>
            </select>
            <select name='type' className='form-control'>
              <option value='' style={{display: 'none'}}>Type</option>
              <option value="Car">Car</option>
              <option value="Motorcycle">Motorcycle</option>
              <option value="Bike">Bike</option>
            </select>
            <select name='payment' className='form-control'>
              <option value='' style={{display: 'none'}}>Payment</option>
              <option value="cash">Cash</option>
              <option value="transfer">Transfer</option>
            </select>
            <button type='submit' className='btn btn-primary'>Search</button>
          </form>
          {bikes.isError &&
            <div className='row my-5'>
              <div className='col'>
                <div className='alert alert-warning alert-dismissible fade show' role='alert'>
                  <span>{bikes.errorMsg}</span>
                  <button onClick={()=>setErrorMsg(null)} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
              </div>
            </div>
          } 
        </div>
      </div>              
      </div>
      <div  className="list">
      <div className="car">
      <div className="texts d-flex justify-content-between">
        <div>
          <p className="hei">Bike </p>
        </div>  
      </div>
      <div>
        <p class="click">Click item to see details and reservation</p>
      </div>
      <div className="image container">
        {bikes.isloading &&
          <Skeleton height={150} containerClassName='row' count={8} wrapper={({children})=>(<div className='col-md-3'>{children}</div>)} />
        }
        {!bikes.isloading && <div className="row">
          {bikes.bike.map((data, idx)=>{
            return(
              <div key={String(data.id)} onClick={()=>goCarDetail(data.id)} style={{cursor: 'pointer'}} className='col-6 col-lg-3'>
                <div className='position-relative mb-2'>
                  <img className='img-fluid' src={data.image} alt={data.brand} />
                  <div className='position-absolute bottom-0 start-0 bg-white px-3 py-2 bike'>{data.brand}</div>
                </div>
              </div>
            )
          })}
        </div>}
        {page.next!==null&&
          <div className='row my-5'>
            <div className='col-md-12 text-center'>
              <button onClick={()=>getToData(page.next)} className='btn btn-primary load'>Load More</button>
            </div>
          </div>
        }
      </div>
    </div>
    <div class="last">
        <p>There is no vehicle left</p>
     </div>
    </div>
        <Footer />
    </Layout>
  )
}

const mapStateToProps = state => ({bike: state.bike})

const mapDispatchToProps = {getBike, filterBike}

export default connect(mapStateToProps, mapDispatchToProps)(ViewMoreBike)
