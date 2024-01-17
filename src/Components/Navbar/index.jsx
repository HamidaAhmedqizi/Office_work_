import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='bg-white'>
            <div className='flex items-center font-medium justify-around'>

                <ul>
                    <li>
                        <Link to="/" className='py-7 px-3 inline-block'>
                            Home
                        </Link>

                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar