import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Components/Home";
import Login from './Components/Login';
import Registration from "./Components/Registration";
import ForgetPasssword from "./Components/ForgetPassword";
import NotFound from "./Components/NotFound";
import AboutUs from "./Components/AboutUs";
import Courses from "./Components/Courses";
import "./App.css";
export default function App(){
  return(

  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>} /> 
    <Route path="/Login" element={<Login/>} /> 
    <Route path="/Registration" element={<Registration/>} />
    <Route path="/ForgetPassword" element={<ForgetPasssword/>} />
    <Route path="/AboutUs" element={<AboutUs/>} />
    <Route path="/Courses" element={<Courses/>} />
    <Route path="*" element={<NotFound/>} />
  </Routes>
  </BrowserRouter>

  );
 
}