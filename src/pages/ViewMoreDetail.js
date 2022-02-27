import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {default as axios} from 'axios'
import { useNavigate, useSearchParams} from 'react-router-dom'

export const ViewMoreDetail = () => {
  const [popular, setPopular] = useState([])
  const [page, setPage] = useState({})
  const [errorMsg, setErrorMsg] = useState(null)

  const navigate = useNavigate()
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(()=>{
    const brand = searchParams.get('brand')

    if(brand){
        const url = (brand)=> `http://localhost:8080/history/vehicles?search=${brand}`
        document.getElementById('search').elements['search'].value = brand
        getNextData(url(brand), true)
    }else{
        getPopular()
    }
  },[])

  const getPopular = async () => {
    const {data: data2} = await axios.get ('http://localhost:8080/history/vehicles?limit=50')
    console.log(data2)
    setPopular(data2.result)
  }

  const getNextData = async (url, replace = false) => {
    try{
        setErrorMsg(null)
        const {data} = await axios.get(url)
        if(replace){
            setPopular(data.result)
        }else{
            setPopular([
                ...popular,
                ...data.result
            ])
        }
        setPage(data.info)
    }catch(e){
        if(e.message.includes('404')){
            setErrorMsg('Data not found!')
            setPopular([])
            setPage({
                next: null
            })
          }
        }
    }

    const onSearch = async(event)=>{
      event.preventDefault();
      const url = (brand)=> `http://localhost:8080/history/vehicles?search=${brand}&limit=50`
      const brand = event.target.elements["search"].value
      setSearchParams({brand})
      await getNextData(url(brand), true)
    }
  
    const goToDetail = (id)=> {
      navigate(`/vehicles/${id}`)
    }

  return (
    <>
      <Navbar />
      <div className="tombol container"  >
      <div className='row mt-5'>
        <div className='col-md-12'>
          <form id='search' onSubmit={onSearch} className="input-group" >
            <input name='search' type="search" className="form-control searching" placeholder="Search vehicle" aria-label="Search" aria-describedby="search-addon" />
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
      </div>
      <div>
        <p class="click">Click item to see details and reservation</p>
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
    <div class="last">
        <p>There is no vehicle left</p>
     </div>
    </div>
      <Footer />
    </>
  )
}

export default ViewMoreDetail