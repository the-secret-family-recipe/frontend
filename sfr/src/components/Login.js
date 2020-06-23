import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import axios from 'axios'

import {axiosWithAuth} from '../utils/axiosWithAuth'

const initialState = {
    username: '',
    password: '',
}



const Login = () => {
    let history = useHistory()
    const [loginInfo, setLoginInfo] = useState(initialState)


    const handleLoginChange = e => {
        setLoginInfo({
            ...loginInfo,
            [e.target.name]: e.target.value
        })
    }

    const loginHandler = e => {
        e.preventDefault()
        axiosWithAuth()
        //   .post('https://bw-savor-backend.herokuapp.com/api/auth/login', loginInfo)
            .post('/api/auth/login', loginInfo)
            .then(res => {
                console.log('login:', res)
                localStorage.setItem('token', res.data.token)
                history.push('/member-page')
            })
            .catch(err => console.log('login error:', err))
            .finally(() => {
                window.location.reload()
            })

    }


    return (
        <>
            <form onSubmit={(e) => loginHandler(e)}>
                <div className='input-container'>
                    <label>Username:&nbsp;</label>
                    <input 
                        type='text'
                        name='username'
                        placeholder='Username'
                        value={loginInfo.username}
                        onChange={(e) => handleLoginChange(e)}
   
                    />
                </div>
                <div className='input-container'>
                    <label>Password:&nbsp;</label>
                    <input 
                        type='password'
                        name='password'
                        placeholder='Password'
                        value={loginInfo.password}
                        onChange={(e) => handleLoginChange(e)}
               
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