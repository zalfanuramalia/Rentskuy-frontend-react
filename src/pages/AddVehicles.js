import React, { useRef, useState } from 'react';
import Layout from '../components/Layout';
import { FaChevronLeft } from 'react-icons/fa';
import camera from '../assets/images/camera.png';
import { useDispatch, useSelector } from 'react-redux';
import { addItemVehicles } from '../redux/actions/vehicles';

const AddVehicles = () => {
  const {auth} = useSelector(state=>state);
  const [file, setFile] = useState({});
  const hiddenFileInput = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const fileInputHandler = (e) => {
    const reader = new FileReader();
    const image = e.target.files[0];

    const profileImage = document.querySelector('#profile-image');
    reader.readAsDataURL(image);

    reader.onload = (e) => {
      profileImage.src = e.target.result;
    };    
    
    setFile({
      image: e.target.files[0]
    });
  };

  const uploadFile = (e) => {
    e.preventDefault();
    hiddenFileInput.current.click();
  };

  const addVehiclesHandler = (e)=>{
    e.preventDefault();
    const brand = document.getElementById('brand').value;
    const location = document.getElementById('location').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;
    const qty = document.getElementById('qty').value;
    const category_id = document.querySelector('#category_id option:checked').value;
    const image = file.image;
    const data = {brand, location, description, price, qty, category_id, image};
    dispatch(addItemVehicles(auth.token, data));
    setIsOpen(true);
    window.scrollTo(0, 0);
  };

  const goBack = () => {
    window.history.back();
  };
  return (
    <Layout>
      <main className='container '>
        <div onClick={goBack} className="back-btn d-flex justify-content-start back" style={{cursor: 'pointer'}}>
          <span><FaChevronLeft /></span> 
          <p>Add new item</p> 
        </div>

        <form className='preview mt-3'>
          <div className='row'>
            <div className='col-6'>
              <div className='img-add d-flex flex-column justify-content-center align-items-center h-75'>
                <img id='profile-image' className='img-fluid add' src={camera || image} alt="vehicles" />
                <p className='mt-2' onClick={(e)=>uploadFile(e)} style={{cursor: 'pointer'}}>Click to add image</p>
              </div>
              <input type="file"
                ref={hiddenFileInput}
                className='d-none'
                name='image'
                accept='image'
                onChange={(e) => fileInputHandler(e)}
              />
              <div className='row text-center align-items-center mx-1 my-3'>
                <div className='col-6 img-add d-flex justify-content-center align-items-center h-75 py-5'>
                  <img className='img-fluid' src={camera} alt="vehicles" />
                </div>
                <div className='col-6 img-add d-flex justify-content-center align-items-center h-75 py-5'>
                  <img className='img-fluid' src={camera} alt="vehicles" />
                </div>
              </div>
            </div>
            <div className='col-6 mt-3'>
              <div>
                <div className='mb-3'>
                  <input placeholder='Name (max up to 50 words)' id='brand' name='brand' className="d-block w-100 input-underline" type="text" />
                </div>
                <div className='mb-3'>
                  <input placeholder='Location' id='location' name='location' className="d-block w-100 input-underline" type="text" />
                </div>
                <div className='mb-3'>
                  <input placeholder='Description' id='description' name='description' className="d-block w-100 input-underline" type="text" />
                </div>
                <div className="mb-3">
                  <label style={{ fontSize: 24, fontFamily:'Playfair Display', fontWeight:'bold'}}>Price :</label>
                  <input placeholder='Type the price' id='price' name='price' style={{ height:45 }} className="d-block w-100 form-control price-add my-2" type="number" />
                </div>
                <div className="mb-3">
                  <label style={{ fontSize: 24, fontFamily:'Playfair Display', fontWeight:'bold'}}>Stock :</label>
                  <input placeholder='Insert stock' id='qty' name='qty' style={{ height:45 }} className="d-block w-100 form-control price-add my-2" type="number" />
                </div>
              </div>              
            </div>
          </div>
          
          <div className="button">
            <div className='row align-items-center mt-5'>
              <div className='col-6 mt-5'>
                <select name='category_id' id='category_id' className="form-select w-100  button-chat btn btn-primary " style={{backgroundColor:'#70553B', color : 'black'}}>
                  <option style={{ display: 'none' }}>Add to item</option>
                  <option value={1} >Car</option>
                  <option value={2} >Motorbike</option>
                  <option value={3} >Bike</option>
                </select>
              </div>
              <div className='col-6 mt-5'>
                <button type="submit" data-bs-toggle="modal" data-bs-target="#exampleModal" className="submit-button btn btn-primary w-100" onClick={addVehiclesHandler}>
                  <p className='mt-3'>Save Item</p>
                </button>
                {isOpen && 
                  <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">Add item confirmation</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                          <p>You have added a new item!</p>
                        </div>
                        <div className="modal-footer">
                          <button className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => setIsOpen(false)}>Close</button>
                        </div>
                      </div>
                    </div>
                  </div>
                }
              </div>
            </div>
          </div>
        </form>
      </main>
    </Layout>
  );
};

export default AddVehicles;