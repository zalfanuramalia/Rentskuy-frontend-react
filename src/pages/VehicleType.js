import React, { useState, useEffect } from 'react';
import {default as axios} from 'axios';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import people from '../assets/images/people-2.png';
import Footer from '../components/Footer';
import { FaCircle } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';
import { FaChevronRight } from 'react-icons/fa';
import Layout from '../components/Layout';
import { useSelector } from 'react-redux';
import noimage from '../assets/images/image-not-found.png';

export const VehicleType = () => {
  const [popular, setPopular] = useState([]);
  const [car, setCar] = useState([]);
  const [motorbike, setMotorbike] = useState([]);
  const [bike, setBike] = useState([]);
  const [page, setPage] = useState({});
  const [errorMsg, setErrorMsg] = useState(null);

  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();
  
  useEffect(()=>{
    getCar();
  },[]);

  useEffect (()=>{
    getMotorbike();
  },[]);

  useEffect (()=>{
    getPopular();
  },[]);

  useEffect (()=>{
    getBike();
  },[]);
  

  const getPopular = async () => {
    const {data: data2} = await axios.get ('https://rentskuy.herokuapp.com/history/vehicles');
    console.log(data2);
    setPopular(data2.results);
  };

  const getCar = async ()=> {
    const {data}= await axios.get ('https://rentskuy.herokuapp.com/vehicles/category/1');
    console.log(data);
    setCar(data.results);
    setPage(data.pageInfo);
  };

  const getMotorbike = async () => {
    const {data: data1}= await axios.get ('https://rentskuy.herokuapp.com/vehicles/category/2');
    setMotorbike(data1.results);
    setPage(data1.pageInfo);
  };

  const getBike = async () => {
    const {data: data1}= await axios.get ('https://rentskuy.herokuapp.com/vehicles/category/3');
    setBike(data1.results);
    setPage(data1.pageInfo);
  };

  const goToDetail = (id)=> {
    navigate(`/vehicles/${id}`);
  };
  return (
    <Layout>
      <div  className="list">
        <div className="pop">
          <div className="texts d-flex justify-content-between">
            <div>
              <p className="hei">Popular in Town </p>
            </div>
            <div>
              <Link to='/viewPopular' className='nav-link hai'>view all <FaChevronRight /> </Link>
            </div>      
          </div>
          <div className="image container">
            <div className="row">
              {popular.map((data2, idx)=>{
                return(
                  <div key={String(data2.id)} onClick={()=>goToDetail(data2.id)} style={{cursor: 'pointer'}} className='col-6 col-lg-3'>
                    <div className='position-relative mb-2'>
                      <img className='img-fluid' src={!data2?.image  ? data2.image : noimage} alt={data2.brand} />
                      <div className='position-absolute bottom-0 start-0 bg-white px-3 py-2 popular'>{data2.brand} </div>
                    </div>
                  </div>
                );
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
                      <img className='img-fluid' src={!data?.image  ? data.image : noimage} alt={data.brand} />
                      <div className='position-absolute bottom-0 start-0 bg-white px-3 py-2 cars'>{data.brand}</div>
                    </div>
                  </div>
                );
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
                      <img className='img-fluid' src={!data1?.image  ? data1.image : noimage} alt={data1.brand} />
                      <div className='position-absolute bottom-0 start-0 bg-white px-3 py-2 motorcycle'>{data1.brand}</div>
                    </div>
                  </div>
                );
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
                      <img className='img-fluid' src={!data1?.image  ? data1.image : noimage} alt={data1.brand} />
                      <div className='position-absolute bottom-3 start-0 bg-white px-3 py-2 bike'>{data1.brand}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );  
};

export default VehicleType;