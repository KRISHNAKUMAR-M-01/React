import React from "react";
import {Link} from 'react-router-dom';

export default function Registration(){
    return(
        <div>
            <form action="">
                <label htmlFor="name">Username:</label>
                <input type="text" placeholder='Enter your name..' id='na'/>
                <br/><br />
                <label htmlFor="em">Email:</label>
                <input type="email" placeholder='Enter your Email..' id='em'/>
                <br /><br />
                <label htmlFor="pw">PassWord:</label>
                <input type="password" placeholder="Enter the Password.." id="pw"/>
                <br /><br />
                <label htmlFor="pw1">PassWord</label>
                <input type="password" placeholder="Reapeat the PassWord" id="pw1"/>
                <br />
                <input type="checkbox" />Confirm
                <br />
                <button>Registers</button>


            </form>    



        </div>
        );
        }
