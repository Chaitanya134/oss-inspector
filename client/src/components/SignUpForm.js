import React from 'react'
import { Link } from 'react-router-dom'

const SignUpForm = () => {
    return (
        <div className='signup-wrapper'>
            <div className='signup-form'>
                <h1 className='signup-form-title'>Sign Up</h1>
                <div className='form-group'>
                    <label htmlFor='username'>Username</label>
                    <input type='text' id='username' placeholder='Username' />
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' placeholder='Email' />
                </div>
                <div className='password-wrapper'>
                    <div className='form-group' style={{ position: "relative" }}>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' placeholder='Password' />
                    </div>
                    <div className='form-group' style={{ position: "relative" }}>
                        <label htmlFor='cofirm-password'>Confirm Password</label>
                        <input type='password' id='cofirm-password' placeholder='Confirm Password' />
                    </div>
                </div>
                <button className='btn signup-btn'>Sign Up</button>
                <div className='already-account'>
                    <h5>Already have an account?&nbsp;&nbsp;<Link to='/login'>Log In</Link></h5>
                </div>
            </div>
        </div>
    )
}

export default SignUpForm