import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import DisplayImage from '../component/DisplayImage';




const Result = () => {
  let location = useLocation();
  const navigate = useNavigate()
  const data = location.state.stateData
  const latestMarkedImg = data.markPoint.length > 0 ? data.markPoint[data.markPoint.length - 1] : null;

  const checker = () =>{
    
    navigate("/check", { state: { defaultImg: data.baseImg, markedImg:latestMarkedImg }});

  }
  return (
    <div style={{maxWidth:'500px'}}>Result
    <button onClick={()=>{
      checker(data)
    }}>CHECK</button>
      <h2>base image</h2>
      <img src={data.baseImg} width='60%' alt="" />

      { data.markPoint.map((img,index)=>(
        <DisplayImage key={index} image={img} />
      ))}

    </div>
  )
}

export default Result