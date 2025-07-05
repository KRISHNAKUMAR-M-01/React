import React from "react";
import {Link} from 'react-router-dom';
export default function AboutusUs(){
    return(
        <div className="ab1">
            <img src="https://wallpapers.com/images/featured/office-virtual-background-dpl0mg1xuxsgpcvn.jpg" alt="" className="img1"/>
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