import React from 'react'
import {Link} from 'react-router-dom'


const Login = () => {
    return (
        <>
            <form>
                <div className='input-container'>
                    <label>Username:&nbsp;</label>
                    <input 
                        type='text'
                        name='username'
                        placeholder='Username'
   
                    />
                </div>
                <div className='input-container'>
                    <label>Password:&nbsp;</label>
                    <input 
                        type='password'
                        name='password'
                        placeholder='Password'
               
                    />
                </div>
                <button type='submit'>Login</button>
            </form>
       
            <div className='account'>
                Don't have an account?&nbsp;
                <Link className='register-link' to='/'>Click Here</Link>
            </div>
        </>
    )
}
export default Login 