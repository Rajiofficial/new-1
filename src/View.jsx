import React from 'react';

function View({ image }) {
  return (
    <div>
      <h2>Image Viewer</h2>
      <img src={image} alt="" />
    </div>
  );
}

export default View;
