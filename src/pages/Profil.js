import React, {useState} from 'react';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import profil from '../assets/images/people-2.png';
import { FaPencilAlt } from 'react-icons/fa';
import {  useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateProfil } from '../redux/actions/profil';

export const Profil = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [address, setAddress] = useState('');
  const [image, setImage] = useState('');
  const {id} = useParams();
  const auth = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const editProfileHandler = (e)=>{
    e.preventDefault();
    dispatch(updateProfil(auth.userData.id, name, gender, email, address, number, birthdate));
  };  
  return (
    <Layout>
      <form className="profile-edit">
        <main className="container">  
          <div className="profile mb-5">
            <h5>Profile</h5>
          </div>
          <div className="text-center mb-5">
            <div className="mb-5">
              <div className="d-inline-block position-relative">
                <img src={profil} alt="Profile Picure" className="img-thumbnail rounded-circle photo-people" />
                <button className="edit-photo"> <FaPencilAlt /> </button>
              </div>
            </div>
            <div>
              <h1 className="big-name">{auth.userData.name}</h1>
            </div>
            <div className="details">
              <div>{auth.userData.email}</div>
              <div>{auth.userData.number}</div>
              <div>Has been active since 2022</div>
            </div>
          </div>
          <div className="d-flex justify-content-center mb-5">
            <div className="me-5">
              <label className="radio-button">
                <input type="radio" name={gender} defaultValue={auth.userData!== null && auth.userData.gender} onChange={setGender} />
                <div className="checkmark"></div>
                <div className="text">Male</div>
              </label>
            </div>
            <div>
              <label className="radio-button">
                <input type="radio" name={gender} defaultValue={auth.userData!== null && auth.userData.gender} onChange={setGender}/>
                <div className="checkmark"></div>
                <div className="text">Female</div>
              </label>
            </div>
          </div>
          <div className="mb-5">
            <h5>Contact</h5>
          </div>
          <div className="mb-5">
            <label>Email: </label>
            <input className="d-block w-100 input-underline" name={email} defaultValue={auth.userData!== null && auth.userData.email} onChange={setEmail}/>
          </div>
          <div className="mb-5">
            <label>Address: </label>
            <textarea className="d-block w-100 input-underline" name={address} defaultValue={auth.userData!== null && auth.userData.address} onChange={setAddress} />
          </div>
          <div className="mb-5">
            <label>Mobile Number: </label>
            <input className="d-block w-100 input-underline" type="text" name={number} defaultValue={auth.userData!== null && auth.userData.number} onChange={setNumber} />
          </div>
          <div className="mb-5">
            <h5>Identity</h5>
          </div>
          <div className="row">
            <div className="col">
              <label>Display Name: </label>
              <input className="d-block w-100 input-underline" type="text" name={name} defaultValue={auth.userData!== null && auth.userData.name} onChange={setName} />
            </div>
            <div className="col">
              <label>DD/MM/YY: </label>
              <input className="d-block w-100 input-underline" type="date" name={birthdate} value={auth.userData!== null && auth.userData.birthdate} onChange={setBirthdate} />
            </div>
          </div>
          <div className="mt-5 d-flex justify-content-between but">
            <div>
              <button className="button-filled" onClick={editProfileHandler}>Save Change</button>
            </div>
            <div>
              <button className="button-dark">Edit Password</button>
            </div>
            <div>
              <button className="button-gray">Cancel</button>
            </div>
          </div>
        </main>
      </form>
      <Footer />
    </Layout>
  );
};

export default Profil;
