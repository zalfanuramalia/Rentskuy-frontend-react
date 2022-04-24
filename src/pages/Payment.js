import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import { FaChevronLeft } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';
import { getDetail } from '../redux/actions/detail';
import NumberFormat from 'react-number-format';
import { Link } from 'react-router-dom';
import { getPayment } from '../redux/actions/payment';
import noimage from '../assets/images/image-not-found.png';

export const Payment = ({getDetail}) => {
  const auth = useSelector(state => state.auth);
  const {detail} = useSelector(state => state);
  const [vehicles, setVehicles] = useState({});
  const buttons = useSelector(state=>state.buttons);
  const [text, setText] = useState('');

  const dispatch = useDispatch();
  const {id} = useParams();
  const navigate = useNavigate();

  const inputHandler = event => {
    setText(event.target.value);
  };

  const copy = async () => {
    var copyText = document.getElementById('myInput').innerHTML;
    await navigator.clipboard.writeText(copyText);
    alert('Text copied');
  };

  useEffect(()=>{
    console.log(buttons);
  }, [buttons]);

  useEffect(()=>{
    getDetail(id);
  },[]);

  useEffect(()=>{
    console.log(vehicles);
  },[]);

  const onHistory = (e)=>{
    e.preventDefault();
    const token = window.localStorage.getItem('token');
    dispatch(getPayment(token, auth.userData.id, detail.detail.id, 'No'));
    navigate('/history');
  };

  const goBack = () => {
    window.history.back();
  };
  return (
    <Layout>
      {/* {auth.token!==null && <Navigate to='/history' /> } */}
      <div className="payment">
        <div className="reserve">
          <div onClick={goBack} className="back-btn d-flex justify-content-start" style={{cursor: 'pointer'}}>
            <span><FaChevronLeft /></span> 
            <p>Payment</p> 
          </div>
        </div>
        <div className="container-fluid g-0">
          <div className="row g-0 in">
            <div className="col info-img g-0">
              <img className='img-fluid' src={!detail.detail?.image ? detail.detail?.image : noimage} alt="Fixie" width="400" height="600" />
            </div>
            <div className="col info-pay g-0">
              <h1 className="text-1">{detail.detail?.brand} </h1>
              <h1 className="text-2"> {detail.detail?.location}</h1>
              <p className="text-3">{detail.detail?.can_prepayment}</p>
              <p className="text-4" id='myInput' onChange={inputHandler}>#FG1209878YZS</p>
              <button onClick={copy} className="text-5">Copy booking code</button>
            </div>
          </div>
        </div>
      </div>
      <div className="result-1">
        <div className="d-flex res">
          <div className="res-1">
            <p>Quantity : {buttons.value} cars</p>
          </div>
          <div className="d-inline-flex p-2 bd-highlight res-2">
            <p>Reservation Date :</p>
            <span>Jan 18 - 20, 2021</span>
          </div>
        </div>
        <div className="d-flex res-4">
          <div className="res-5">
            <p className="get-1">Order details :</p>
            <p className="get-2">{buttons.value} cars : <NumberFormat value={detail.detail?.price * buttons.value} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'Rp. '} ></NumberFormat> </p>
            <p className="get-3">Total : <NumberFormat value={detail.detail?.price * buttons.value} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'Rp. '} ></NumberFormat></p>
          </div>
          <div className="d-flex res-6">
            <p className="id-1">Identity :</p>
            <p className="id-2">{auth.userData.name} ({auth.userData.number}) <br/> {auth.userData.email}</p>
          </div>
        </div>
        <div className="d-flex ress">
          <div className="ress-1">
            <p>Payment code :</p>
          </div>
          <div className="d-flex ress-2">
            <p>#FG1209878YZS</p>
            <button id='myInput' onClick={copy}>Copy</button>
          </div>
          <div className=" d-flex ress-3">
            <select className="form-select sel-op" aria-label="Default select example">
              <option style={{display:'none'}} selected>Select payment methods</option>
              <option value="1">Cash</option>
              <option value="2">Transfer</option>
            </select>
            <span><i className="fa-solid fa-chevron-down"></i></span>
          </div>
        </div>
      </div>
      <Link to='/history' className="pay">
        <button className="d-flex" onClick={onHistory}>
          <p className="fin">Finish payment :</p>
          <p className="time">59:30</p> 
        </button>
      </Link>
      <Footer />
    </Layout>
  );
};

const mapStateToProps = state => ({detail: state.detail});

const mapDispatchToProps = {getDetail};

export default connect(mapStateToProps, mapDispatchToProps)(Payment);