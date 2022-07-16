import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
        <h2 className='logo' onClick={() => navigate("/")}>OSS Inspector</h2>
        <div className='btn-group'>
            <button className='btn primary' onClick={() => navigate("/login")}>Log In</button>
            <button className='btn primary outline' onClick={() => navigate("/signup")}>Sign Up</button>
        </div>
    </header>
  )
}

export default Header