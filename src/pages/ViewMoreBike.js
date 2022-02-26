import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {default as axios} from 'axios'
import { useNavigate, useSearchParams} from 'react-router-dom'

export const ViewMoreBike = () => {
    const [bike, setBike] = useState([])
  const [pages, setPages] = useState({})
  const [errorMsg, setErrorMsg] = useState(null)

  const navigate = useNavigate()
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(()=>{
    console.log(setBike)
    const brand = searchParams.get('brand')
    
    if(brand){
        const url1 = (brand)=> `http://localhost:8080/vehicles/category/3?search=${brand}`
        document.getElementById('search').elements['search'].value = brand
        getToData(url1(brand), true)
    }else{
        getCar()
    }
  },[])

  const getCar = async () => {
    const {data} = await axios.get ('http://localhost:8080/vehicles/category/3?limit=50')
    console.log(data)
    setBike(data.results)
  }

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
      const url = (brand)=> `http://localhost:8080/vehicles/category/3?search=${brand}`
      const brand = event.target.elements["search"].value
      setSearchParams({brand})
      await getToData(url(brand), true)
    }
  
    const goCarDetail = (id)=> {
      navigate(`/vehicles/${id}`)
    }
  return (
    <>
        <Navbar />
        <div className="tombol container"  >
      <div className='row mt-5'>
        <div className='col-md-12'>
          <form id='search' onSubmit={toSearch} className="input-group" >
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
        <div className="row">
          {bike.map((data, idx)=>{
            return(
              <div key={String(data.id)} onClick={()=>goCarDetail(data.id)} style={{cursor: 'pointer'}} className='col-6 col-lg-3'>
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
    <div class="last">
        <p>There is no vehicle left</p>
     </div>
    </div>
        <Footer />
    </>
  )
}

export default ViewMoreBike