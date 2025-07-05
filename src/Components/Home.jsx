import React from "react";
import img from "../assets/AI.jpg"
import img1 from "../assets/MachineLearning.jpg";
import img2 from "../assets/UIUX.jpg";
import img3 from "../assets/Mern.jpg";
import img4 from "../assets/Game.jpg";
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
                <div className="ho61">
                    <button><Link to="/Courses" className="l3">Explore Courses</Link></button>
                </div>
            </div>
            <dir className="ho7">
               <h1 className="ho8">⚛︎EduSpark✴</h1>
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
            <div className="ho111">
                <p>copyright &copy; 2025 EduSpark | Legal Information | Consumer Information</p>
            </div>
            <div className="ho13">
                <h1>✉-eduspark012gmail.com <br />☎-9867456453</h1>
            </div>
            <div className="ho14">
                <h1>⚛︎EduSpark✴︎</h1>
            </div>
            <div className="ho15">
               <p>✦Future Students <br /> ✦International Students <br />✦Current Students <br /> ✦Current Staff <br />✦ Future Staff</p>
            </div>
            <div className="ho16">
                <h1>Courses <br />For</h1>
            </div>
            </div>
              <div className="ho17">
                <marquee scrollamount="10"  scrollbehavior="scroll" direction="left">   <p>📣 <strong>50% OFF</strong> on all courses until <strong>Sep 13</strong>! Enroll now and upgrade your skills 🚀</p></marquee>
            </div>
            <div className="ho18">
                <div className="ho19"><h1>POPULAR COURSES</h1></div>
                <img src={img4} alt="" />
                <img src={img3} alt="" />
                <img src={img2} alt="" />
                <img src={img1} alt="" />
                <img src={img} alt="" />
           </div>
        </div>
    
    );
}