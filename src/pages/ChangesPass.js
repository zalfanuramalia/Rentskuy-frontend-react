import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate} from 'react-router-dom';
import { changePass } from '../redux/actions/auth';
import Footer from '../components/Footer';
import { FaChevronLeft } from 'react-icons/fa';

export const ChangesPass = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onResetPass = (e)=>{
    e.preventDefault();
    const email = e.target.elements['email'].value;
    const code = e.target.elements['code'].value;
    const password = e.target.elements['password'].value;
    const confirmPass = e.target.elements['confirmPass'].value;
    dispatch(changePass(email, code, password, confirmPass));
    navigate('/login');
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
          <form onSubmit={onResetPass}>
            <div >
              <input placeholder="Email your email address" id="email" />
            </div>
            <div>
              <input placeholder="Code" type="number" id="code" aria-describedby="codeHelp" />
            </div>
            <div >
              <input placeholder="New Password" type="password"  id="password" />
            </div>
            <div >
              <input placeholder="Confirmation Password" type="confirmPass"  id="confirmPass" />
            </div>
            <div>
              <button type='submit' className="button-send">Submit</button>
            </div>
          </form>
        </div>
      </header>
      <Footer />
    </>
  );
};

export default ChangesPass;
