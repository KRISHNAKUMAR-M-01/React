import React from "react";
import {Link} from 'react-router-dom';
import img11 from "../img1.jpg";
export default function AboutusUs(){
    return(
        <div className="ab1">
            <img src={img11} alt="" className="img1"/>
            <div className="ab2"> 
              <h1>Who <br />We <br />Are.</h1>
            </div>
                <h1 className="h11">
                    <span>
                        <span>educators</span>
                        <span>innovators</span>
                        <span>mentors</span>
                    </span>
                </h1>
                <div className="ab3">
                    <button><Link to="/" className="ab31">Home</Link></button>
                </div>
               
        </div>
    );
}