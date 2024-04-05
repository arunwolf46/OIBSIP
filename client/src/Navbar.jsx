import React from 'react'
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div className = "nav">
            <Link to="/" className="site-title"> Fire <span> Wall </span> </Link>
            <ul>
                <li><Link to='/register' className='btn'>Register</Link></li>
                <li><Link to='/login' className='btn'>Logout</Link></li>

            </ul>
    </div>

  ) 
}

export default Navbar