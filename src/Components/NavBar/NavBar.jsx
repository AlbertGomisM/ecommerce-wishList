import "./navBar.css";
import {Link} from "react-router-dom";

export const NavBar = () => {
  return (
    <div >
      <nav className='nav'>
        <Link to="/">Home</Link>
        <Link to="/manage">Manage</Link>

      </nav>
    </div>
  )
}