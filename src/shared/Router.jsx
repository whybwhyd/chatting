import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from '../pages/Homepage/Homepage';
import Login from '../pages/Login/Login';
import ChatContent from '../pages/ChatContent/ChatContent';
import DefaultChat from '../pages/ChatContent/DefaultChat';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/:id" element={<ChatContent />} />
        <Route path="/defaultChat" element={<DefaultChat />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
