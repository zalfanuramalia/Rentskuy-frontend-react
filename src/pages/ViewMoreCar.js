import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import { connect, useSelector } from 'react-redux';
import { useNavigate, useSearchParams} from 'react-router-dom';
import { getCar, filterCar } from '../redux/actions/car';
import Skeleton from  'react-loading-skeleton';
import Layout from '../components/Layout';
import http from '../helpers/http';
import axios from 'axios';

export const ViewMoreCar = ({getCar, filterCar}) => {
  const {car: cars} = useSelector (state => state);
  const [car, setCar] = useState([]);
  const [page, setPages] = useState({});
  const [errorMsg, setErrorMsg] = useState(null);

  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(()=>{
    const brand = searchParams.get('brand');
    const location = searchParams.get('location');
    const payment = searchParams.get('payment');
    
    if(brand || location ||  payment){
      const url1 = (brand)=> `https://rentskuy.herokuapp.com/search/1?brand=${brand}&location=${location}&payment=${payment}`;
      document.getElementById('search').elements['search'].value = brand;
      document.getElementById('search').elements['search'].value = location;
      document.getElementById('search').elements['search'].value = payment;
      getToData(url1(brand, location, payment), true);
    }else{
      getCar();
    }
  },[]);

  const getToData = async (url1, replace = false) => {
    try{
      setErrorMsg(null);
      const {data} = await axios.get(url1);
      console.log(data);
      if(replace){
        setCar(data.results);
      }else{
        setCar([
          ...car,
          ...data.results
        ]);
      }
      setPages(data.info);
    }catch(e){
      if(e.message.includes('404')){
        setErrorMsg('Data not found!');
        setCar([]);
        setPages({
          next: null
        });
      }
    }
  };

  const toSearch = async(event)=>{
    event.preventDefault();
    const brand = event.target.elements['search'].value;
    const location = event.target.elements['location'].value;
    const payment = event.target.elements['payment'].value;
    setSearchParams({brand, location, payment});
    filterCar(brand, location, payment);
  };
  
  const goCarDetail = (id)=> {
    navigate(`/vehicles/${id}`);
  };

  return (
    <Layout>
      <div className="tombol container"  >
        <div className='row mt-5'>
          <div className='col-md-12'>
            <form id='search' onSubmit={toSearch} className="input-group" >
              <input name='search' type="search" className="form-control searching" placeholder="Search vehicle" aria-label="Search" aria-describedby="search-addon" />
              <select name='location' className='form-control'>
                <option value='' style={{display: 'none'}}>Location</option>
                <option value="Yogyakarta">Yogyakarta</option>
                <option value="Bandung">Bandung</option>
              </select>
              <select name='payment' className='form-control'>
                <option value='' style={{display: 'none'}}>Payment</option>
                <option value="cash">Cash</option>
                <option value="transfer">Transfer</option>
              </select>
              <button type='submit' className='btn btn-primary'>Search</button>
            </form>
            {cars.isError &&
            <div className='row my-5'>
              <div className='col'>
                <div className='alert alert-warning alert-dismissible fade show' role='alert'>
                  <span>{cars.errorMsg}</span>
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
              <p className="hei">Cars </p>
            </div>
          </div>
          <div>
            <p className="click">Click item to see details and reservation</p>
          </div>
          <div className="image container">
            {cars.isLoading &&
          <Skeleton height={150} containerClassName='row' count={8} wrapper={({children})=>(<div className='col-md-3'>{children}</div>)} />
            }
            {!cars.isLoading && <div className="row">
              {cars.car.map((data, idx)=>{
                return(
                  <div key={String(data.id)} onClick={()=>goCarDetail(data.id)} style={{cursor: 'pointer'}} className='col-6 col-lg-3'>
                    <div className='position-relative mb-2'>
                      <img className='img-fluid' src={data.image} alt={data.brand} />
                      <div className='position-absolute bottom-0 start-0 bg-white px-3 py-2 cars'>{data.brand}</div>
                    </div>
                  </div>
                );
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
        <div className="last">
          <p>There is no vehicle left</p>
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = state => ({car: state.car});

const mapDispatchToProps = {getCar, filterCar};

export default connect(mapStateToProps, mapDispatchToProps)(ViewMoreCar);