import React, { useState, useEffect } from 'react'
import { RiEyeLine, RiEyeCloseLine } from 'react-icons/ri'
import { BsGithub } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useAuth } from '../contexts/AuthProvider';

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [data, setData] = useState({ isLoading: false, error: null });

    const { dispatch } = useAuth();
    const { REACT_APP_CLIENT_ID, REACT_APP_SERVER_URL } = process.env;

    async function signin(code) {
        setData({ ...data, isLoading: true });
        try {
            const response = await axios.post(REACT_APP_SERVER_URL + "/signin", { code });
            const { user } = response.data;
            dispatch({
                type: "LOGIN",
                payload: { user }
            });
        } catch {
            setData({ ...data, error: "Error signing in" });
        } finally {
            setData({ ...data, isLoading: false });
        }
    }

    useEffect(() => {
        const url = window.location.href;
        const hasCode = url.includes("code");

        if (!hasCode) return;

        const code = url.split("code=")[1];
        signin(code);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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
            {
                data.isLoading ?
                    <h2>Loading...</h2> :
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
                                <button className='btn github-btn' onClick={() => {
                                    window.location.href = `https://github.com/login/oauth/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=user%20repo`;
                                }}><BsGithub /><span>Github</span></button>
                            </div>
                        </div>
                        <div className='create-account'>
                            <h5>Don't have an account?&nbsp;&nbsp;<Link to='/signup'>Sign Up</Link></h5>
                        </div>
                    </div>
            }
        </div>
    )
}

export default LoginForm