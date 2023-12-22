import React from "react";
import { useLocation } from "react-router-dom";
const ImageMarked = () => {
  const location = useLocation();

  const image = location.state.image;

  return (
    <div>
      Show image was save
      <div>
        <img src={image} width="50%" />
      </div>
    </div>
  );
};

export default ImageMarked;
