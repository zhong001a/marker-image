import React from "react";
import { useLocation } from "react-router-dom";
const ImageMarked = () => {
  const location = useLocation();

  const data = location.state;
  console.log(data);
  return (
    <div>
      ImageMarked
      {/* <img src={data} width="30%"/> */}
    </div>
  );
};

export default ImageMarked;
