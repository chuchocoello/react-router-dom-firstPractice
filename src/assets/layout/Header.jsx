import { Link, NavLink } from "react-router-dom"

const Header = () => {
  return (
      <div className='Header'>
          <NavLink className={({ isActive }) => (isActive? "link-active" : "")} to="/">Home</NavLink> <br/>
          <NavLink className={({ isActive }) => (isActive? "link-active" : "")} to="/Contact">Contact</NavLink> <br/>
          <NavLink className={({ isActive }) => (isActive? "link-active" : "")} to="/About">About</NavLink> <br/>
      </div>
  )
}

export default Header