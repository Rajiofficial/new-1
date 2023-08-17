import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Addimage({ onUpload }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const navigate=useNavigate()
  const fetchImages = async () => {
    try {
      const response = await axios.get('https://6258573d0c918296a495a609.mockapi.io/address');
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };


  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('image', selectedImage);

    try {
      await axios.post('https://6258573d0c918296a495a609.mockapi.io/address', formData,{
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        
      });
      setSelectedImage(null);
      onUpload();
      navigate("/")
    
    } catch (error) {
      console.error('Error uploading image:', error);
    }
   
  };

  return (
    <div>
      <h2>Upload Image</h2>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={()=>handleUpload}>Upload</button>
    </div>
  );
}

export default Addimage;
