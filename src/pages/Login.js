import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import google from '../assets/images/google.png'
import logo from '../assets/images/logo.png'
// import Input from '../components/Input'
// import Button from '../components/Button'
import { Navigate } from 'react-router-dom'

export const Login = ({auth, dispatch, counter}) => {

  useEffect(()=>{
    console.log(auth);
  })

  const onLogin = (e)=>{
    e.preventDefault()
    dispatch({
      type: 'LOGIN',
      payload: {
        email: e.target.elements['email'].value,
        password: e.target.elements['password'].value
      }
    })
  }

//   const onLogout = ()=>{
//     dispatch({
//       type: 'LOGOUT'
//     })
//   }

  return (
    <>
    {auth.token!==null && <Navigate to='/homepage' />}
    <div className="container-fluid g-0 login">
        <div className="row g-0">
            <div className="col-6 bg-image"></div>
            <div className="col text2">
                <form onSubmit={onLogin} className="overflow-auto">
                    <h1 className="text-login">Login</h1>
                    <div>
                        <div className="input-group-md">
                            <input  className='mb-5 form-control' type='email' id='email' placeholder='Email'  />
                        </div>
                        <div className="input-group-md">
                            <input  className='mb-5 form-control' type='password' id='password' placeholder='Password'  />
                        </div>
                        <div className="mb-3">
                            <button type='submit' className='button-send btn btn-primary' >Login</button>
                        </div>
                        <div className="mb-3">
                            <Link to='/ForgotPassword' className="nav-link active" aria-current="page">Forgot Password?</Link>
                        </div>
                        <div className="d-flex position-relative justify-content-center align-items-center flex-column my-5 text-again">
                            <div className="border border-bottom-1 w-100"></div>
                            <div className="position-absolute px-3 text-try">or try another way</div>
                        </div>
                        <div>
                            <button className="button-mail"> <img src={google} alt="Logo" /><span>    Login with Google     </span> </button> 
                        </div>
                        <div>
                            <button className="button-register"><a href="/register.html">Sign Up</a></button>
                        </div>
                    </div>
                </form>
                <div className="text-desc">
                    <div className="row g-0 px-5 text-desc-1">
                        <div className="col-12">
                            <div>
                                <img src={logo} alt="Logo" />
                            </div>
                            <div className="description">Plan and book your perfect trip with expert advice, travel tips for vehicle information from us</div>
                            <div className="desc">©2020 Vehicle Rental Center. All rights reserved</div>
                        </div>
                        <div className="link-social mt-5">
                            <FaTwitter />
                            <FaFacebookF />
                            <FaInstagram />
                            <FaLinkedinIn />
                            <FaYoutube />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </>
  )
}

const mapStateToProps = state => ({auth:state.auth, counter: state.counter})

const mapDispatchToProps = dispatch => ({dispatch})

export default connect(mapStateToProps, mapDispatchToProps)(Login)