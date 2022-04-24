import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import { FaSearch } from 'react-icons/fa';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';
import { getPopularHistory } from '../redux/actions/popular';
import { FaChevronRight, FaChevronDown } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { deleteHistory, historyByUser, ListHistory } from '../redux/actions/history';
import { useSearchParams } from 'react-router-dom';
import noimage from '../assets/images/image-not-found.png';

export const History = () => {
  // const [searchParams,setSearchParams] = useSearchParams();
  const [isDelete,setIsDelete] = useState();
  const dispatch = useDispatch();
  const {popular: populars} = useSelector (state => state);
  const {history} = useSelector(state => state);
  const buttons = useSelector(state=>state.buttons);

  const {auth} = useSelector(state=>state);
  
  const navigate = useNavigate();
    
  useEffect (()=>{
    getPopularHistory();
  },[]);

  useEffect(()=>{
    console.log(buttons);
  }, [buttons]);

  useEffect (()=>{
    getPopularHistory();
  },[]);

  useEffect (()=>{
    dispatch(ListHistory(auth.token));
  },[]);

  useEffect (()=>{
    dispatch(historyByUser(auth.userData.id, auth.token));
  },[]);

  const goToDetail = (id)=> {
    navigate(`/vehicles/${id}`);
  };

  // const handleDelete = (id) => {
  //   dispatch(deleteHistory(id, auth.token));
  // };
  return (
    <Layout>
      <div className="history-1">
        <div className="d-flex">
          <div className="one">
            <div className="d-flex">
              <div className="input-group-md form-1">
                <input type="search" className="form-control" placeholder="Search history"  />
                <span><FaSearch /></span> 
              </div>
              <div className="form-2">
                <select className="form-select" aria-label="Default select example">
                  <option selected>Filter</option>
                  <option value="1">Type</option>
                  <option value="2">Date Added</option>
                  <option value="3">Name</option>
                  <option value="4">Favorite Product</option>
                </select>
              </div>
            </div>
            <div className="today">
              <p>Today</p>
            </div>          
            <div className="d-flex qt">
              <p>Please finish your payment for vespa for Vespa Rental Jogja</p>
              <Link to='/reservation'><FaChevronRight /></Link>
            </div>
            <div className="underline-1"></div>
            <div className="d-flex qt-2">
              <p>Your payment has been confirmed!</p>
              <Link to='/history'><FaChevronRight /></Link>
            </div>
            <div className="underline-1"></div>
            <div className="timer">
              <p>A week ago</p>
            </div>
            <div>
              {auth.userData.role === 'Customer' ? (
                <ul className="list-group list-history">
                  {history.historyUser.map((item)=>{
                    return (
                      <div key={item.id} className="d-flex align-items-center justify-content-between image-1">
                        <div className="img py-3">
                          <img src={!item?.image ? item.image : noimage} alt={item?.brand} width="400" height="200" />
                        </div>
                        <div className="desc">
                          <div>
                            <p className="desc-1">{item?.vehicleName} </p>
                            <p className="desc-2">Jan 18 to 21 2021</p>
                            <p className="desc-3">Payment : <NumberFormat value={item?.Price} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'Rp. '} ></NumberFormat> </p>
                            <p className="desc-4">Has not been returned</p>
                          </div>
                        </div>
                        <div className="col-md-4 px-5">
                          <button btnVarian="button-filled" >Delete</button>
                        </div>
                      </div>
                    );                  
                  })
                  }
                </ul>                         
              ) : (
                <ul className="list-group list-history">
                  {history.history.map((item)=>{
                    return (
                      <div key={item.id} className="d-flex image-1">
                        <div className="img">
                          <img src={item?.image} alt={item?.vehicleName} />
                        </div>
                        <div className="desc">
                          <div>
                            <p className="desc-1">{item?.vehicleName} </p>
                            <p className="desc-2">Jan 18 to 21 2021</p>
                            <p className="desc-3">Payment : <NumberFormat value={item?.Price} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'Rp. '} ></NumberFormat> </p>
                            <p className="desc-4">Has not been returned</p>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <button btnVarian="button-filled">Delete</button>
                        </div>
                      </div>
                    );
                
                  })
                  }
                </ul>
              )}
            </div>
          </div>
          <div className="two">
            <div className="new-arrival">
              <p>New Arrival</p>
            </div>
            {populars.popular.map((data, idx)=>{
              return (
                <div key={String(data.id)} onClick={()=>goToDetail(data.id)} style={{cursor: 'pointer'}} >
                  <div className='position-relative mb-2 mt-5 vehicle-1'>
                    <img className='img-fluid' src={!data.image ? data.image : noimage} alt={data.brand} />
                    <div className='position-absolute bottom-0 start-0 bg-white px-3 py-2 popular'>{data.brand} </div>
                  </div>
                </div>
              );
            })}
            <div className="view">
              <p>View more</p>
              <Link to='/viewPopular'><FaChevronDown /></Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};


// const mapDispatchToProps = { getPopularHistory, ListHistory, historyByUser};

export default History;
