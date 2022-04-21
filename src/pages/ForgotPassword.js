import React from 'react';
import Footer from '../components/Footer';
import { forgotpass } from '../redux/actions/auth';
import { useDispatch } from 'react-redux';
import { useNavigate} from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';

export const ForgotPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onForgotPass = (e)=>{
    e.preventDefault();
    const email = e.target.elements['email'].value;
    dispatch(forgotpass(email));
    navigate('/changePass');
  };

  return (
    <>
      <header className="header-forgot">
        <div className="header-content">
          <div className="header-nav">
            <div>
              <FaChevronLeft/>
              <span>Back</span>
            </div>
          </div>
          <h1 className="heading">Don`t worry, we got your back!</h1>
          <form onSubmit={onForgotPass}>
            <div>
              <input placeholder="Email your email address" id="email" />
            </div>
            <div>
              <button className="button-send">Send Link</button>
            </div>
          </form>
          <p className="text">
          You will receive a link to reset your password.<br/>If you haven’t received any link, click Resend Link
          </p>
        </div>
      </header>
      <Footer />
    </>
  );
};

export default ForgotPassword;
