import { Link } from 'react-router-dom';
export default function Login(){
    return(
      <>
        <div className="div1">
         
             <div className='div2'>
                <label htmlFor="name">Username:</label>
                <input type="text" placeholder='Enter your name..' id='name' />
                <br/>
                <label htmlFor="pw">Password:</label>
                <input type="password" placeholder='Enter your password..' id='pw'/>
                <br />
                <Link to="/ForgetPassword" className='link1'>Forget Password?</Link>
                <br />
                <button><Link to="/" className='div21'>Sign-in</Link> </button>
             </div>
              <div className='div11'>
               <h1>Sign-In</h1>
              </div>
             <div className='div3'>
                <button><Link to="/Registration" className='div31' >Sign-up</Link></button>
             </div>
             <div className='div4'>
                <button><Link to="/" className='link2'>Home</Link></button>

             </div>
        </div>
        </>
    );
}