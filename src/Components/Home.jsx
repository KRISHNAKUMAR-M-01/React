import React from "react";
import {Link} from 'react-router-dom';
export default function Home(){
    return(
        <div className="ho">
            <div className="ho1"> 
                <h5><Link to="/" className="l1">Home</Link></h5> 
                <h5> <Link to="/AboutUs" className="l1">AboutUs</Link></h5>
                 <h5><Link to="/Courses" className="l1">Courses</Link></h5>
                 <h5><Link to="/Contact" className="l1">Contact</Link></h5>
            </div>
            <div className="ho3"> 
            <button><Link to="/Login" className="l2">Sign-In</Link></button>
            </div>
            <div className="ho4"> 
                <h1>Build a <br /> Better You </h1>
            </div>
           
            <div className="ho6">
                <img src="https://i.pinimg.com/originals/97/a0/41/97a0414c680679feb7145130b0e08e71.jpg"alt=""  className="img22"/>
            </div>
            <dir className="ho7">
               <h1 className="ho8">EduSpark</h1>
            </dir>
            <div className="hero">
                <h1>Welcome to EduSpark</h1><p>Your journey to knowledge, skills, and success begins here.</p>
                <button><Link to="/Courses" className="l3">Explore Courses</Link></button>
           </div>
           <div className="ho9">
            <img src="https://wallpaperbat.com/img/1813387-actress-walls-on-twitter-beautiful-face-image-sai-pallavi-hd-image-actress-pics.jpg" alt=""  className="img23"/>
           </div>
           <div className="ho10"> 
            <h3>Educator:SaiPallavi</h3>
           </div>
           <div className="ho11">
            <div className="ho12">
                <h1>✉-eduspark012gmail.com <br />☎-9867456453</h1>
            </div>

           </div>
        </div>
    
    );
}