import React from "react";
import {Link} from 'react-router-dom';
export default function Courses(){
    return(
        <div className="c1">
             <div className="ho1"> 
                    <h5><Link to="/" className="l1">Home</Link></h5> 
                    <h5> <Link to="/AboutUs" className="l1">AboutUs</Link></h5>
                    <h5><Link to="/Courses" className="l1">Courses</Link></h5>
                    <h5><Link to="/Contact" className="l1">Contact</Link></h5>
            </div>


             <div className="ho7">
               <h1 className="ho8">⚛︎EduSpark✴</h1> 
            </div>

            <div className="ho3"> 
                 <button><Link to="/Login" className="l2">Sign-In</Link></button>
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

             <div className="c2">
                <marquee scrollamount="10"  scrollbehavior="scroll" direction="left">   <p>📣 <strong>50% OFF</strong> on all courses until <strong>Sep 13</strong>! Enroll now and upgrade your skills 🚀</p></marquee>
            </div>
            
            </div>

        
    );
}