import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import { FaSearch } from 'react-icons/fa'
import { connect, useDispatch, useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import NumberFormat from 'react-number-format'
import { getPopularHistory } from '../redux/actions/popular'
import { FaChevronRight, FaChevronDown } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { historyByUser, ListHistory } from '../redux/actions/history'
import { useSearchParams } from 'react-router-dom'

export const History = ({getPopularHistory, ListHistory}) => {
  const [searchParams,setSearchParams] = useSearchParams()
  const [isDelete,setIsDelete] = useState()
  const dispatch = useDispatch()
  const {popular: populars} = useSelector (state => state)
  const {history} = useSelector(state => state)
  const buttons = useSelector(state=>state.buttons)

  const {auth} = useSelector(state=>state)
  
  const navigate = useNavigate()
    
  useEffect (()=>{
    getPopularHistory()
  },[])

  useEffect(()=>{
    console.log(buttons);
  }, [buttons])

  useEffect (()=>{
    getPopularHistory()
  },[])

  useEffect (()=>{
    ListHistory(auth.token)
  },[])

  useEffect (()=>{
    dispatch(historyByUser(auth.userData.id, auth.token))
  },[])

  const goToDetail = (id)=> {
    navigate(`/vehicles/${id}`)
  }
    return (
      <Layout>
        <div className="history-1">
          <div className="d-flex">
            <div className="one">
              <div className="d-flex">
                <div className="input-group-md form-1">
                  <input type="search" class="form-control" placeholder="Search history"  />
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
                  console.log(history.historyUser)
                  return (
                    <div className="d-flex align-items-center image-1">
                      <div className="img">
                        <img src={item?.image} alt={item?.brand} />
                      </div>
                      <div className="desc">
                        <div>
                          <p className="desc-1">{item?.vehicleName} </p>
                          <p className="desc-2">Jan 18 to 21 2021</p>
                          <p className="desc-3">Payment : <NumberFormat value={item?.price * buttons.value} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'Rp. '} ></NumberFormat> </p>
                          <p className="desc-4">Has not been returned</p>
                        </div>
                      </div>
                      <div className="col-md-4 px-5">
                        <button btnVarian="button-filled">Delete</button>
                      </div>
                    </div>
                  )
                  
                })
              }
              </ul>
                
              ) : (
                <ul className="list-group list-history">
                {history.history.map((item)=>{
                  console.log(history.history)
                  return (
                    <div className="d-flex image-1">
                      <div className="img">
                        <img src={history.history?.image} alt={history.history?.brand} />
                      </div>
                      <div className="desc">
                        <div>
                          <p className="desc-1">{history.history?.brand} </p>
                          <p className="desc-2">Jan 18 to 21 2021</p>
                          <p className="desc-3">Payment : <NumberFormat value={history.history?.price * buttons.value} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'Rp. '} ></NumberFormat> </p>
                          <p className="desc-4">Has not been returned</p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <button btnVarian="button-filled">Delete</button>
                      </div>
                    </div>
                  )
                  
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
                        <img className='img-fluid' src={data.image} alt={data.brand} />
                        <div className='position-absolute bottom-0 start-0 bg-white px-3 py-2 popular'>{data.brand} </div>
                      </div>
                    </div>
                )
              })}
              <div className="view">
                <p>View more</p>
                <Link to='/viewPopular'><FaChevronDown /></Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
}

const mapStateToProps = state => ({ popular: state.popular, history: state.history})

const mapDispatchToProps = { getPopularHistory, ListHistory}

export default connect(mapStateToProps, mapDispatchToProps)(History)
