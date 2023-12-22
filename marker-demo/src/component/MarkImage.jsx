import React, { useReducer, useRef } from "react";
import * as markerjs2 from "markerjs2";

import { useNavigate } from "react-router-dom";

const initialState = {
  baseImg: "",
  markPoint: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "addMark":
      let marking = [];
      marking = [...state.markPoint, action.payload];
      return { ...state, baseImg: `http://localhost:3000/uploads/${action.image}`, markPoint: marking };
      
    default:
      throw new Error("Unknow action");
  }
};

function MarkImage({ condition, show, image }) {
  const imgRef = useRef(null);

  let color = "";
  let marker = "";
  const navigate = useNavigate();
  const [stateData, dispatch] = useReducer(reducer, initialState);
  
  const addMark = (valume) => {
    dispatch({ type: "addMark", payload: valume, image: image });
  };

  const saveData =  () => {
    navigate("/result", { state: { stateData: stateData } });
  };
 

  switch (condition) {
    case "scratch":
      color = "red";
      marker = "FrameMarker";
      break;
    case "screen-scratch":
      color = "blue";
      marker = "FrameMarker";
      break;
    case "screen-dent":
      color = "green";
      marker = "FrameMarker";
      break;
    case "dent":
      color = "orange";
      marker = "FrameMarker";
      break;

    case "screen-cracked":
      color = "red";
      marker = "EllipseFrameMarker";
      break;

    case "back-glass-cracked":
      color = "orange";
      marker = "EllipseFrameMarker";
      break;

    case "back-camera-crack":
      color = "blue";
      marker = "EllipseFrameMarker";
      break;
    case "pixel-white":
      color = "red";
      marker = "ArrowMarker";
      break;

    case "pixel-black":
      color = "blue";
      marker = "ArrowMarker";
      break;

    case "pink-burn":
      color = "black";
      marker = "FrameMarker";
      break;

    case "yellow-burn":
      color = "black";
      marker = "FrameMarker";
      break;

    case "overlay-burn":
      color = "black";
      marker = "FrameMarker";
      break;

    default:
      color = "";
      marker = "";
  }

  let preImage = "";
  const showMarkerArea = () => {
    if (imgRef.current !== null) {
      const markerArea = new markerjs2.MarkerArea(imgRef.current);

      markerArea.settings.defaultColorSet = [color, ""];
      markerArea.settings.defaultStrokeColor = color === "" ? "green" : color;
      markerArea.settings.defaultColor = color;
      //set
      markerArea.availableMarkerTypes = [marker];
      markerArea.uiStyleSettings.toolboxColor = "";
      markerArea.settings.defaultStrokeWidths = [5, 8];
      markerArea.settings.defaultStrokeWidth = 5;

      markerArea.addEventListener("render", (event) => {
        

        if (imgRef.current) {
          imgRef.current.src = event.dataUrl;
          preImage = event.dataUrl;
          addMark(preImage);
          event.state.markers[0].height = 122
          event.state.markers[0].left = 34
          event.state.markers[0].opacity = 1
          event.state.markers[0].strockColor = 'blue'
          event.state.markers[0].strockWidth = 5
          event.state.markers[0].top = 42
          event.state.markers[0].typeName = 'FrameMarker'
          console.log(event.state.markers[0])
          markerArea.clear()

        }
      });
      markerArea.show();
    }
  };

  if (show) {
    showMarkerArea();
  }

  return (
    <div>
      <button
        onClick={() => {
          saveData();
        }}
      >
        SAVE
      </button>
      <h1>marker.js 2 Demo.</h1>
      <div style={{maxWidth:'450px'}}>
        <img ref={imgRef} src={`uploads/${image}`} alt="sample" width="100%"  />
      </div>
    </div>
  );
}

export default MarkImage;
