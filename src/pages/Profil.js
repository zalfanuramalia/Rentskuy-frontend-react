import React, {useEffect, useRef, useState} from 'react';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import profil from '../assets/images/people-2.png';
import { FaPencilAlt } from 'react-icons/fa';
import {  useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getProfile, updateProfil } from '../redux/actions/profil';

export const Profil = () => {
  const [gender, setGender] = useState('');
  const [updateGender, setUpdateGender] = useState({});
  const [file,setFile] = useState({});
  const {id} = useParams();
  const auth = useSelector(state => state.auth);
  const hiddenFileInput = useRef(null);

  const dispatch = useDispatch();

  const fileInputHandler = (e) => {
    const reader = new FileReader();
    const image = e.target.files[0];

    const profileImage = document.querySelector('#profile-image');
    reader.readAsDataURL(image);

    reader.onload = (e) => {
      profileImage.src = e.target.result;
      profileImage.className += ' rounded-circle';
    };    
    
    setFile({
      image: e.target.files[0]
    });
  };

  const uploadFile = (e) => {
    e.preventDefault();
    hiddenFileInput.current.click();
    // document.getElementById('fileUpload').click();
  };

  useEffect(()=>{
    getProfile(auth.token);
  },[]);

  const genderChange = (e) => {
    const isRadio = e.target.type === 'radio';

    if (isRadio) {
      setGender(e.target.id);
      if (gender === auth.userData.gender) {
        setUpdateGender({
          ...updateGender,
          gender: e.target.id
        });
      } else {
        setUpdateGender({
          ...updateGender,
          gender: ''
        });
      }
    }
  };

  // const handleChange = (event)=>{
  //   let value = event.target.value;
  //   let nameOfInput = event.target.name;
  //   let gender = ['Men','Women'];
  //   if(gender.indexOf(-1)){
  //     setUpdateGender({...updateGender,[nameOfInput]:value});
  //   }else{
  //     setUpdateGender({...updateGender});
  //   }
  // };

  const editProfileHandler = (e)=>{
    e.preventDefault();
    const gender = updateGender.gender;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const number = document.getElementById('number').value;
    const name = document.getElementById('name').value;
    const birthdate = document.getElementById('birthdate').value;
    const image = file.image;
    const data = {name, gender, email, address, number, birthdate, image};
    dispatch(updateProfil(auth.userData.id, auth.token, data));
    window.scrollTo(0, 0);
  };

  

  // const selectedFile = (e)=>{
  //   e.preventDefault();
  //   setFile(e.target.files[0]);
  //   setImage(URL.createObjectURL(e.target.files[0]));
  // };

  // const uploadFile = (e) => {
  //   e.preventDefault();
  //   document.getElementById('fileUpload').click();
  // };
  
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
                {auth.userData.image !== '' ? (
                  <img id='profile-image' src={ auth.userData.image || image  } alt="Profile Picure" className="img-thumbnail rounded-circle photo-people" />
                ) : (
                  <img src={ profil } alt="Profile Picure" className="img-thumbnail rounded-circle photo-people" />
                )}
                <input type="file"
                  ref={hiddenFileInput}
                  className='d-none'
                  // id='fileUpload'
                  name='image'
                  accept='image'
                  onChange={(e) => fileInputHandler(e)}
                />
                <button className="edit-photo" onClick={(e)=>uploadFile(e)}> <FaPencilAlt /> </button>
              </div>
            </div>
            <div>
              <h1 className="big-name">{auth.userData.name}</h1>
            </div>
            <div className="details">
              <div>{auth.userData.email || 'Set your email'}</div>
              <div>{auth.userData.number || 'Set your phone number'}</div>
              <div>Has been active since 2022</div>
            </div>
          </div>
          <div className="d-flex justify-content-center mb-5">
            <div className="me-5">
              <label className="radio-button">
                <input type="radio" name='gender' checked={gender=='Men' ? true : false} value="Men" onChange={genderChange} />
                <div className="checkmark"></div>
                <div className="text">Male</div>
              </label>
            </div>
            <div>
              <label className="radio-button">
                <input type="radio" name='gender' checked={gender=='Women' ? true : false} value="Women" onChange={genderChange}/>
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
            <input className="d-block w-100 input-underline mt-2" name="email" id="email" defaultValue={auth.userData.email}/>
          </div>
          <div className="mb-5">
            <label>Address: </label>
            <textarea className="d-block w-100 input-underline mt-2" name="address" id="address" defaultValue={auth.userData.address} />
          </div>
          <div className="mb-5">
            <label>Mobile Number: </label>
            <input className="d-block w-100 input-underline mt-2" type="text" name="number" id="number" defaultValue={auth.userData.number}  />
          </div>
          <div className="mb-5">
            <h5>Identity</h5>
          </div>
          <div className="row">
            <div className="col">
              <label>Display Name: </label>
              <input className="d-block w-100 input-underline mt-2" type="text" name="name" id="name" defaultValue={auth.userData.name} />
            </div>
            <div className="col">
              <label>DD/MM/YY: </label>
              <input className="d-block w-100 input-underline mt-2" type="date" name="birthdate" id="birthdate" defaultValue={auth.userData.birthdate}  />
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
    </Layout>
  );
};

export default Profil;
