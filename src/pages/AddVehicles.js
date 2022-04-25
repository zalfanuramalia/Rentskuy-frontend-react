import React from 'react';
import Layout from '../components/Layout';
import noimage from '../assets/images/image-not-found.png';
import { FaPencilAlt, FaChevronDown } from 'react-icons/fa';

const AddVehicles = () => {
  return (
    <>
      <Layout>
        <form encType='multipart/form-data'>
          <section className="profile container">
            <h1 className="title">Form Vehicle</h1>
            <div className="text-center">
              <div className="d-inline-block position-relative">
                <image photo={noimage} photoVarian="profile rounded-circle" alt="profile"/>
                {/* <input id="fileUpload" type="file" name="photo" hidden />    */}
                <button className="position-absolute button-edit-profile rounded-circle" ><FaPencilAlt/></button>
              </div>
              {/* {error!==null && error.image ? <div className="error">{error.image}</div> : '' } */}
            </div>
          </section>
          <section className="profile-form container">
            <div className="container">
              <div className="mb-5">
                <label htmlFor="name">Name</label>
                <input className="d-block w-100" type="text" name="name"  />
                {/* {error!==null && error.name ? <div className="error">{error.name}</div> : '' } */}
              </div>
              <div className="mb-5">
                <div className="row">
                  <div className="col-sm">
                    <label htmlFor="price">Price</label>
                    <input name="price" variantInput="d-block w-100" typeInput="number" />
                    {/* {error!==null && error.price ? <div className="error">{error.price}</div> : '' } */}
                  </div>
                  <div className="col-sm">
                    <label htmlFor="qty">Stock</label>
                    <input name="stock" variantInput="d-block w-100" typeInput="number" />
                    {/* {error!==null && error.stock ? <div className="error">{error.stock}</div> : '' } */}
                  </div>
                </div>
              </div>
              <div className="mb-5">
                <label htmlFor="description">Description</label>
                <textarea name="description" className="d-block w-100" ></textarea>
                {/* {error!==null && error.description ? <div className="error">{error.description}</div> : '' } */}
              </div>
              <div className="mb-5">
                <div className="row">
                  <div className="col-sm">
                    <label htmlFor="location">Location</label>
                    <div className='select-form d-flex position-relative align-items-center'>
                      <select name="location">
                        <option value="" style={{display:'none'}}>Select Location</option>
                        {/* {
                          location.listLocation.length > 0 && location.listLocation.map((item)=>{
                            return(
                              <option key={item.id} value={item.id}>{item.location}</option>
                            );
                          })
                        } */}
                      </select>
                      <FaChevronDown/>
                    </div>
                           
                    {/* {error!==null && error.location ? <div className="error">{error.location}</div> : '' } */}
                  </div>
                  <div className="col-sm">
                    <label htmlFor="category">Category</label>
                    <div className='select-form d-flex position-relative align-items-center'>
                      <select name="category" >
                        <option value="" style={{display:'none'}}>Select Category</option>
                        {/* {
                          category.listCategory.length > 0 && category.listCategory.map((item)=>{
                            return(
                              <option key={item.id} value={item.id}>{item.name}</option>
                            );
                          })
                        } */}
                      </select>
                      <FaChevronDown/>
                    </div>
                          
                    {/* {error!==null && error.category ? <div className="error">{error.category}</div> : '' } */}
                  </div>
                </div>
              </div>
              <div className="mt-5 row">
                <div className="col-md-4 mb-3">
                  <button type="submit" className="button-filled">Save Product</button>
                </div>
                <div className="col-md-4 mb-3">
                  <button className="button-gray" type="button" >Cancel</button>
                </div>
              </div>
            </div>
          </section>
        </form>

      </Layout>
    </>
  );
};

export default AddVehicles;