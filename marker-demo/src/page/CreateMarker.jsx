
import React, { useState } from "react";
import MarkImage from '../component/MarkImage';
import { useLocation } from 'react-router-dom';
const CreateMarker = () => {

  let location = useLocation();
    const image = location.state?.imageName

    const [condition, setCondition] = useState("");
    // const [problem, setProblem] = useState([]);
    const [show, setShow] = useState(false);
  
    const handlerColor = (value) => {
      setCondition(value);
      setShow(true);
      // setProblem((prevProblem) => [...prevProblem, value]);
    };
  return (
    <>
      <button
        onClick={() => {
          handlerColor("scratch");
        }}
      >
        Scratch
      </button>

      <button
        onClick={() => {
          handlerColor("screen-scratch");
        }}
      >
        Screen scratch
      </button>

      <button
        onClick={() => {
          handlerColor("screen-dent");
        }}
      >
        Screen dent
      </button>

      <button
        onClick={() => {
          handlerColor("dent");
        }}
      >
        Dent
      </button>

      <button
        onClick={() => {
          handlerColor("screen-cracked");
        }}
      >
        Screen cracked
      </button>

      <button
        onClick={() => {
          handlerColor("back-glass-cracked");
        }}
      >
        Back-glass cracked
      </button>

      <button
        onClick={() => {
          handlerColor("back-camera-crack");
        }}
      >
        Back Camera Crack
      </button>

      <button
        onClick={() => {
          handlerColor("pixel-white");
        }}
      >
        Pixel white
      </button>

      <button
        onClick={() => {
          handlerColor("pixel-black");
        }}
      >
        Screen black
      </button>

      <button
        onClick={() => {
          handlerColor("pink-burn");
        }}
      >
        Pink Burn
      </button>

      <button
        onClick={() => {
          handlerColor("yellow-burn");
        }}
      >
        Yello Burn
      </button>

      <button
        onClick={() => {
          handlerColor("overlay-burn");
        }}
      >
        Overlay Burn
      </button>


      <MarkImage condition={condition} show={show} image={image} />
    </>
  )
}

export default CreateMarker