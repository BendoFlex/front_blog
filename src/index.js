
import React from 'react';
import ReactDOM from 'react-dom';
import { 
  BrowserRouter,
  Routes, 
  Route } from "react-router-dom";
import Home from './containers/home'
import Admin from './containers/admin'
import Posts from './containers/posts'
import WhoAmI from './containers/whoami';
import Header from './components/Header'
import Footer from './components/Footer'


ReactDOM.render(
    <BrowserRouter>
       <Header/>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/whoami" element={<WhoAmI/>} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/posts" element={<Posts />} />
       </Routes>
       <Footer/>
    </BrowserRouter>
  ,
  document.getElementById('root')
);
