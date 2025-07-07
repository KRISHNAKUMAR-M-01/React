import React from "react";
import {Link} from 'react-router-dom';

export default function Registration(){
    return(
        <div className="reg1">
            <div className="reg2"> 
                <h1>Sign-up</h1>
                <label htmlFor="na">Username:</label>
                <input type="text" placeholder='Enter your name..' id='na'/>
                <br/><br />
                <label htmlFor="em">Email:</label>
                <input type="email" placeholder='Enter your Email..' id='em'/>
                <br /><br />
                <label htmlFor="pw">Password:</label>
                <input type="password" placeholder="Enter the Password.." id="pw"/>
                <br /><br />
                <label htmlFor="pw1">Confirm Password:</label>
                <input type="password" placeholder="Reapeat the PassWord.." id="pw1"/>
                <br />
                <br />
                <button><Link to="/Login" className="link2">Sign-up</Link></button>
                 
            </div >
            <div className='reg3'>
                <button><Link to="/AboutUs" className='reg31' >AboutUs</Link></button>
             </div>

        </div>
        );
}
