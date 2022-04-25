import React, { useEffect, useState } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { useParams, useNavigate } from 'react-router-dom';
import { increment, decrement } from '../redux/actions/buttons';
import { connect, useDispatch, useSelector } from 'react-redux';
import Layout from '../components/Layout';
import NumberFormat from 'react-number-format';
import { getDetail } from '../redux/actions/detail';
import noimage from '../assets/images/image-not-found.png';

export const Reservation = ({getDetail}) => {
  const {detail} = useSelector(state => state);
  const [vehicles, setVehicles] = useState({});
  const buttons = useSelector(state=>state.buttons);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(()=>{
    console.log(buttons);
  }, [buttons]);

  useEffect(()=>{
    getDetail(id);
  },[]);

  useEffect(()=>{
    console.log(vehicles);
  },[]);

  const onIncrement = (e)=>{
    e.preventDefault();
    dispatch(increment());
  };
    
  const onDecrement = (e)=>{
    e.preventDefault();
    dispatch(decrement());
  };

  const goBack = () => {
    window.history.back();
  };

  const goPayment = (id)=> {
    navigate(`/payment/${id}`);
  };

  return (
    <Layout>
      <div className="payment">
        <div className="reserve">
          <div onClick={goBack} className="back-btn d-flex justify-content-start" style={{cursor: 'pointer'}}>
            <span><FaChevronLeft /></span> 
            <p>Reservation</p> 
          </div>
        </div>
        <div className="container-fluid g-0">
          <div className="row g-0">
            <div className="col">
              <img className='img-fluid' src={detail.detail?.image} alt="charImg" />
            </div>
            <div className="col info">
              <div>
                <h1 className="text-1">{detail.detail?.brand} </h1>
                <h1 className="text-2"> {detail.detail?.location}</h1>
                <p className="text-3">{detail.detail?.can_prepayment}</p>
                <div className='d-flex align-items-center qty'>         
                  <button className="minus " onClick={onDecrement}>-</button>
                  <h1 className="count">{buttons.value}</h1>
                  <button className="plus "  onClick={onIncrement}>+</button>
                </div>
                <div className="text-4">
                  <p>Reservation Date :</p>
                </div>
                <div className="op-1">
                  <input className="form-control date" type="date" name="date" placeholder='Date' />
                  <span className="input-group-append"></span>  
                </div>
                <div className="op-2">
                  <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                    <option value="1" selected>1 Day</option>
                    <option value="2">2 Day</option>
                    <option value="3">3 Day</option>
                    <option value="4">4 Day</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pay-1 container-fluid">
          <button onClick={()=>goPayment(id)} style={{cursor: 'pointer'}} className="submit-button nav-link active">
            <NumberFormat value={detail.detail?.price * buttons.value} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'Pay now : Rp. '}  >Rp.{vehicles?.price}/day</NumberFormat>
          </button>
        </div>
      </div>
    </Layout>
  );
};


const mapStateToProps = state => ({detail: state.detail});

const mapDispatchToProps = {getDetail};

export default connect(mapStateToProps, mapDispatchToProps)(Reservation);
