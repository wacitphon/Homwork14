import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from './layouts/Layout';
import Home from './page/Home';
import About from './page/About';
import Contact from './page/Contact';
import NotFound from './page/NotFound';
import Private from './page/Private';
import Product from './page/Product';

function AppRouter() {
const isLogined = false
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout />} >
          <Route index element={<Home/>} />
          <Route path="about" element={<About/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="private" element={ isLogined ?  <Private/> : <Navigate to='/'/>} />
          <Route path="product/:id" element={<Product/>} />
          <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
