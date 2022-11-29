import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Hotel from "../pages/hotel";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hotel' element={<Hotel />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
