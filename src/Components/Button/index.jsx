import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Button = () => {
    return (
        <Link to='Sign up'>
            <button className='btn'>
                Sign up
            </button>
        </Link>
    )
}

export default Button