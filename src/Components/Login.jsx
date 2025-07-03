import { Link } from 'react-router-dom';
export default function Login(){
    return(
        <div className="div1">
             <div className='div2'>
                <label htmlFor="name">Username:</label>
                <input type="text" placeholder='Enter your name..' id='name'/>
                <br/>
                <label htmlFor="pw">Password:</label>
                <input type="password" placeholder='Enter your password..' id='pw'/>
                <br />
                <Link to="/ForgetPassword" className='link1'>Forget Password?</Link>
                <br />
                <button>Login</button>
             </div>
             <div className='div3'>
                <button><Link to="/Registration" className='div31' >Registration</Link></button>
             </div>
        </div>
    );
}    