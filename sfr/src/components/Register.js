import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {axiosWithAuth} from '../utils/axiosWithAuth'

import RegisterStyles from '../styles/RegisterStyles'

const initialState = {
    firstname:'',
    lastname:'',
    email:'',
    username:'',
    password:''
}


const Register = () => {
    let history = useHistory()
    const [registerInfo, setRegisterInfo] = useState(initialState)

    const handleFormChange = e => {
        setRegisterInfo({
            ...registerInfo,
            [e.target.name]: e.target.value 
        })
    }


    const handleRegister = e => {
        e.preventDefault()
        axiosWithAuth()
    
            .post('/api/auth/register', registerInfo)
            .then(res => {
                console.log('new user:', res)
                // localStorage.setItem('token', res.data.token)
                history.push('/login')
               
            })
            .catch(err => console.log(err))
    }


    return (
        <RegisterStyles>
            <div className='register-container'>
                <h2>Register</h2>
                <form onSubmit={(e) => handleRegister(e)}>
                    <div className='input-container'>
                        <label>First Name:&nbsp;</label>
                        <input 
                            type='text'
                            name='firstname'
                            value={registerInfo.firstname}
                            onChange={(e) => handleFormChange(e)}
                        />
                    </div>
                    <div className='input-container'>
                        <label>Last Name:&nbsp;</label>
                        <input 
                            type='text'
                            name='lastname'
                            value={registerInfo.lastname}
                            onChange={(e) => handleFormChange(e)}

                        />
                    </div>
                    <div className='input-container'>
                        <label>Email:&nbsp;</label>
                        <input 
                            type='email'
                            name='email'
                            value={registerInfo.email}
                            onChange={(e) => handleFormChange(e)}

                        />
                    </div>           
                    <div className='input-container'>
                        <label>Username:&nbsp;</label>
                        <input 
                            type='text'
                            name='username'
                            value={registerInfo.username}
                            onChange={(e) => handleFormChange(e)}

                        />
                    </div>
                    <div className='input-container'>
                        <label>Password:&nbsp;</label>
                        <input 
                            type='password'
                            name='password'
                            value={registerInfo.password}
                            onChange={(e) => handleFormChange(e)}
                        />
                    </div>
                    <button type='submit'>Register</button>
                </form>
                <div className='account'>
                        Already have an account?&nbsp;
                        <Link className='login-link' to='/login'>Click Here</Link>
                </div>
            </div>
        </RegisterStyles>

   ) 
}
export default Register