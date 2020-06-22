import React from 'react'
import {Link} from 'react-router-dom'

const Register = () => {

  //all form fields still need a value, and onChange. 
  //form needs an onSubmit
  //state needs to be added
    return (
       <>
            <form>
                <div className='input-container'>
                    <label>First Name:&nbsp;</label>
                    <input 
                        type='text'
                        name='firstName'

                    />
                </div>
                <div className='input-container'>
                    <label>Last Name:&nbsp;</label>
                    <input 
                        type='text'
                        name='lastName'

                    />
                </div>
                <div className='input-container'>
                    <label>Email:&nbsp;</label>
                    <input 
                        type='email'
                        name='email'

                    />
                </div>           
                <div className='input-container'>
                    <label>Username:&nbsp;</label>
                    <input 
                        type='text'
                        name='username'

                    />
                </div>
                <div className='input-container'>
                    <label>Password:&nbsp;</label>
                    <input 
                        type='password'
                        name='password'

                    />
                </div>
                <button type='submit'>Register</button>
            </form>
            <div className='account'>
                    Already have an account?&nbsp;
                    <Link className='login-link' to='/login'>Click Here</Link>
            </div>
       </>
   ) 
}
export default Register