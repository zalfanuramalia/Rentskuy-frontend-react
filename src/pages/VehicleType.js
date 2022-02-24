import React, { useState, useEffect } from 'react'
import {default as axios} from 'axios'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'

export const VehicleType = () => {
  const [vehicles, setVehicles] = useState([])
  const [page, setPage] = useState({})
  const [errorMsg, setErrorMsg] = useState(null)

  const navigate = useNavigate()
  let [searchParams, setSearchParams] = useSearchParams();
  
  useEffect(()=>{
    const brand = searchParams.get('brand')

    if(brand){
        const url = (brand)=> `http://localhost:8080/vehicles?brand=${brand}`
        document.getElementById('search').elements['search'].value = brand
        getNextData(url(brand), true)
    }else{
        getVehicles()
    }
  },[])

  const getVehicles = async ()=> {
    const {data}= await axios.get ('http://localhost:8080/vehicles')
    console.log(data.pageInfo)
    setVehicles(data.result)
    setPage(data.pageInfo)
  }

  const getNextData = async (url, replace = false) => {
        try{
            setErrorMsg(null)
            const {data} = await axios.get(url)
            if(replace){
                setVehicles(data.result)
            }else{
                setVehicles([
                    ...vehicles,
                    ...data.result
                ])
            }
            setPage(data.info)
        }catch(e){
            if(e.message.includes('404')){
                setErrorMsg('Data not found!')
                setVehicles([])
                setPage({
                    next: null
                })
            }
        }
    }

  const onSearch = async(event)=>{
    event.preventDefault();
    const url = (brand)=> `http://localhost:8080/vehicles?brand=${brand}`
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
        <img src="./assets/images/logo.png" alt="logo" />
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/Home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./vehicle.html">Vehicle</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/History">History</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Home">About</a>
          </li>
        </ul>
        <div className="tombol"  >
          <div id='search' onSubmit={onSearch} className="input-group input-group-md" >
            <input name='search' type="search" className="form-control rounded" placeholder="Search vehicle" aria-label="Search" aria-describedby="search-addon" />
            <span className="input-group-text border-0 searcher" id="search-addon">
              <button type='submit' className='btn'><FaSearch /></button>
            </span>
          </div>
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
        <div className="toggled-action d-inline-block position-relative">
          <div className="d-inline-block position-relative mail">
            <img src="./assets/images/message.png" alt="Email" />
            <span><i className="fa-solid fa-circle-1"></i></span>
            <span><i className="fa-solid fa-1"></i></span>
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
          <p className="hai">view all <i className="fa-solid fa-chevron-right"> </i></p> 
        </div>      
      </div>
      <div className="image container">
        <div className="row ">          
          <div className="col-6 col-lg-3 ">
            <img src="./assets/images/merapi.png" className="img-fluid " alt="Merapi" />
            <div className="merapi">Merapi <span>Yogyakarta</span>   </div>
          </div>
          <div className="col-6 col-lg-3">
            <img src="./assets/images/telukbogam.png" className="img-fluid " alt="TelukBogam" />
            <div className="telukbogam">Teluk Bogam <span>Kalimantan</span>   </div>
          </div>
          <div className="col-6 col-lg-3">
            <img src="./assets/images/bromo.png" className="img-fluid " alt="Bromo" />
            <div className="bromo">Bromo  <span>Malang</span>  </div>
          </div>
          <div className="col-6 col-lg-3">
            <img src="./assets/images/malioboro.png" className="img-fluid" alt="Malioboro" />
            <div className="malioboro"> Malioboro  <span>Yogyakarta </span>  </div>
          </div>
        </div>
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
        {vehicles.map((data, idx)=>{
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
          <div className="col-6 col-lg-3 ">
            <img src="./assets/images/vespa.png" className="img-fluid" alt="Vespa" />
            <div className="merapi">Vespa  Yogyakarta  </div>
          </div>
          <div className="col-6 col-lg-3 ">
            <img src="./assets/images/honda-klx.png" className="img-fluid" alt="HondaKLX" />
            <div className="telukbogam">Honda KLX  Kalimantan  </div>
          </div>
          <div className="col-6 col-lg-3 ">
            <img src="./assets/images/honda.png" className="img-fluid" alt="Honda" />
            <div className="bromo">Honda Malang </div>
          </div>
          <div className="col-6 col-lg-3 ">
            <img src="./assets/images/matic-bike.png" className="img-fluid" alt="MaticBike" />
            <div className="malioboro">Matic Bike Yogyakarta  </div>
          </div>
        </div>
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
  </>
  )
  
}

export default VehicleType