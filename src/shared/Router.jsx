import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from '../pages/Homepage/Homepage';
import Login from '../pages/Login/Login';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/login:id" element={<Homepage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
