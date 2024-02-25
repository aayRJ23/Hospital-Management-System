import { NavLink } from 'react-router-dom'

import './navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          //Logo dena hai
        </div>
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/userauth">User</NavLink>
            </li>
            <li>
              <NavLink to="/doctorauth">Doctor</NavLink>
            </li>
            <li>
              <NavLink to="/adminauth">Admin</NavLink>
            </li>
            <li>
              <NavLink to="/contactus">ContactUs</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar