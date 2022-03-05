
import React from 'react';
import ReactDOM from 'react-dom';
import { 
  BrowserRouter,
  Routes, 
  Route } from "react-router-dom";
import Home from './containers/home'
import Admin from './containers/admin'
import Posts from './containers/posts'
import BlogPost from './containers/blogpost'
import WhoAmI from './containers/whoami';
import Login from './containers/login';
import Register from './containers/register';
import Header from './components/Header'
import Footer from './components/Footer'


ReactDOM.render(
    <BrowserRouter>
       <Header/>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/whoami" element={<WhoAmI/>} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/posts" element={<Posts />} />
        <Route path="/postsid" element={<BlogPost />} />
       </Routes>
       <Footer/>
    </BrowserRouter>
  ,
  document.getElementById('root')
);
