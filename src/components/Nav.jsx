import { Link } from "react-router-dom";
import './Nav.css'; // Import the CSS file for styling

function Nav() {
  return (
    <nav>
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/booking" className="nav-link">Booking</Link>
        </li>
        <li className="nav-item">
          <Link to="/chicago" className="nav-link">Chicago</Link>
        </li>
        <li className="nav-item">
          <Link to="/customers" className="nav-link">Customers</Link>
        </li>
        <li className="nav-item">
          <Link to="/specials" className="nav-link">Specials</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
