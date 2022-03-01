import React, { Component } from 'react'
import {FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import google from '../assets/images/google.png'
import logo from '../assets/images/logo.png'


export default class Login extends Component {
    state = {
        email : '',
        password: '',
        isLogged: false
    }

    handleEmailChange =(e)=>{
        this.setState({email:e.target.value})
    }
    handlePasswordChange=(e)=>{
        this.setState({password:e.target.value})
    }
    

    onLogin = (e)=>{
        e.preventDefault()
        if(this.state.email === "admin@mail.com" && this.state.password==="1234"){
        this.setState({isLogged: true})
        this.props.onLogin(true)
        }else{
        window.alert("Email atau password salah!")
        this.props.onLogin(false)
        }
    }

  render() {
    return (
      <>
        <div className="container-fluid g-0 login">
            <div className="row g-0">
                <div className="col-6 bg-image"></div>
                <div className="col text2">
                    <form className="overflow-auto">
                        <h1 className="text-login">Login</h1>
                        <div>
                            <div className="input-group-md">
                                <input onChange={this.handleEmailChange} className='mb-5 form-control' type='email' placeholder='Email'  />
                            </div>
                            <div className="input-group-md">
                                <input onChange={this.handlePasswordChange} className='mb-5 form-control' type='password' placeholder='Password'  />
                            </div>
                            <div className="mb-3">
                                <button onClick={this.onLogin} className='button-send btn btn-primary' >Login</button>
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
}
