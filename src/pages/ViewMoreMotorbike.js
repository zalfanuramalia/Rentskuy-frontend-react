import React, { useState, useEffect } from 'react'
import Footer from '../components/Footer'
import {default as axios} from 'axios'
import { connect, useSelector } from 'react-redux'
import { useNavigate, useSearchParams} from 'react-router-dom'
import { getMotorbike, filterMotorbike } from '../redux/actions/motorbike'
import Skeleton from  'react-loading-skeleton'
import Layout from '../components/Layout'

export const ViewMoreMotorbike = ({getMotorbike, filterMotorbike}) => {
  const {motorbike: motorbikes} = useSelector (state => state)
  const [motorbike, setMotorbike] = useState([])
  const [pages, setPages] = useState({})
  const [errorMsg, setErrorMsg] = useState(null)

  const navigate = useNavigate()
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(()=>{
    console.log(setMotorbike)
    const brand = searchParams.get('brand')
    const location = searchParams.get('location')
    const type = searchParams.get('type')
    const payment = searchParams.get('payment')
    
    if(brand || location || type || payment){
        const url1 = (brand)=> `http://localhost:8080/vehicles/category/2?search=${brand}&location=${location}&type=${type}&payment=${payment}`
        document.getElementById('search').elements['search'].value = brand
        document.getElementById('search').elements['search'].value = location
        document.getElementById('search').elements['search'].value = type
        document.getElementById('search').elements['search'].value = payment
        getToData(url1(brand, location, type, payment), true)
    }else{
        getMotorbike()
    }
  },[])

  const getToData = async (url1, replace = false) => {
    try{
        setErrorMsg(null)
        const {data} = await axios.get(url1)
        if(replace){
            setMotorbike(data.results)
        }else{
            setMotorbike([
                ...motorbike,
                ...data.results
            ])
        }
        setPages(data.info)
    }catch(e){
        if(e.message.includes('404')){
            setErrorMsg('Data not found!')
            setMotorbike([])
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
      filterMotorbike(brand, location, type, payment)
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
            <input name='search' type="search" className="form-control searching" placeholder="Search vehicle" aria-label="Search" aria-describedby="search-addon" />
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
      <div className="car">
      <div className="texts d-flex justify-content-between">
        <div>
          <p className="hei">Motorbike </p>
        </div>
      </div>
      <div>
          <p className="click">Click item to see details and reservation</p>
      </div>
      <div className="image container">
        {motorbikes.isloading &&
          <Skeleton height={150} containerClassName='row' count={8} wrapper={({children})=>(<div className='col-md-3'>{children}</div>)} />
        }
        {!motorbikes.isloading && <div className="row">
          {motorbikes.motorbike.map((data, idx)=>{
            return(
              <div key={String(data.id)} onClick={()=>goCarDetail(data.id)} style={{cursor: 'pointer'}} className='col-6 col-lg-3'>
                <div className='position-relative mb-2'>
                  <img className='img-fluid' src={data.image} alt={data.brand} />
                  <div className='position-absolute bottom-0 start-0 bg-white px-3 py-2 motorcycle'>{data.brand}</div>
                </div>
              </div>
            )
          })}
        </div>}
        {/* {page.next!==null&&
          <div className='row my-5'>
            <div className='col-md-12 text-center'>
              <button onClick={()=>getNextData(page.next)} className='btn btn-primary'>Load More</button>
            </div>
          </div>
        } */}
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

const mapStateToProps = state => ({motorbike: state.motorbike})

const mapDispatchToProps = {getMotorbike, filterMotorbike}

export default connect(mapStateToProps, mapDispatchToProps)(ViewMoreMotorbike)


