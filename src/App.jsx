import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from './Components/Login';
import Registration from "./Components/Registration";
import ForgetPasssword from "./Components/ForgetPassword";
import NotFound from "./Components/NotFound";
import "./App.css";
export default function App(){
  return(

  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Login/>} /> 
    <Route path="/Registration" element={<Registration/>} />
    <Route path="/ForgetPassword" element={<ForgetPasssword/>} />
    <Route path="*" element={<NotFound/>} />
  </Routes>
  </BrowserRouter>

  );
 
}