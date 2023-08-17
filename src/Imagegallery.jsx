import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
function Imagegallery() {
  const navi=useNavigate()
  const add=()=>{
    navi('/Add')
    }
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get('https://6258573d0c918296a495a609.mockapi.io/address');
      setImages(response.data);
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  const handleDelete = async (imageId) => {
      await axios.delete(`https://6258573d0c918296a495a609.mockapi.io/address/${imageId}`);
      fetchImages();
   
  };

  return (
    <div>
       <button className="btnadd" onClick={()=>add()}>add</button>
      <h2>Image Gallery</h2>
      <div className="image-grid">
        {images.map((image) => (
          <div key={image.id} className="image-item">
            <img src={image.img} alt="" />
            <button onClick={() =>handleDelete(image.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Imagegallery;
