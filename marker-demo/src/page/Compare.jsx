import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';

import SaveMarkImage from '../component/SaveMarkImage';

const Compare = () => {
    const location = useLocation();
    const [toggle, setToggle] = useState(false);
    const data = location.state;

    const toggleHandle = () => {
      setToggle(!toggle);
    };
  
    return (
      <div style={{ maxWidth: '500px' }} onClick={toggleHandle}>
        {toggle ? (
          <img src={data.defaultImg} width="50%" />
        ) : (
          <img src={data.markedImg} width="50%" />
        )}
        
        {/* <MyComponent data = {data}/> */}
        <SaveMarkImage data = {data}/>
      </div>
    );
  };


export default Compare