import React, { useState } from 'react'
import { RiEyeLine, RiEyeCloseLine } from 'react-icons/ri'
import { BsGithub } from 'react-icons/bs'
import { Link } from 'react-router-dom';

const LoginForm = () => {

    const [showPassword, setShowPassword] = useState(false);

    function toggleShowPassword() {
        const passwordElement = document.getElementById("password");
        if (showPassword) {
            passwordElement.type = "password";
        } else {
            passwordElement.type = "text";
        }
        setShowPassword(!showPassword);
    }

    return (
        <div className='login-wrapper'>
            <div className='login-form'>
                <h1 className='login-form-title'>Login</h1>
                <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' placeholder='Email' />
                </div>
                <div className='form-group' style={{ position: "relative" }}>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' placeholder='Password' />
                    <div className='password-icon' onClick={toggleShowPassword}>
                        {
                            showPassword ?
                                <RiEyeCloseLine /> :
                                <RiEyeLine />
                        }
                    </div>
                </div>
                <button className='btn login-btn'>Log In</button>
                <div className='sign-up-section'>
                    <h5 style={{ fontWeight: "normal" }}>Or Sign In with</h5>
                    <div className='social-login-btns'>
                        <button className='btn github-btn'><BsGithub /><span>Github</span></button>
                    </div>
                </div>
                <div className='create-account'>
                    <h5>Don't have an account?&nbsp;&nbsp;<Link to='/signup'>Sign Up</Link></h5>
                </div>
            </div>
        </div>
    )
}

export default LoginForm