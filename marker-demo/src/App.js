import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import CreateMarker from "./page/CreateMarker";
import Result from "./page/Result";
import Compare from "./page/Compare";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateMarker />} />
        <Route path="/result" element={<Result />} />
        <Route path="/check" element={<Compare />} />
        <Route path="*" element={"NOT FOUND"} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
