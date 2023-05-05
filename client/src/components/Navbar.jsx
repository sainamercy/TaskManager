import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="nav">
      <Link to="/">
        <img src="/assets/logof.png" alt=" logo" className="nav__logo" />
      </Link>
      <ul className="nav__links">
        <li className="nav__item">
          <Link className="nav__link" to="/">
            Home
          </Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/todos">
            Tasks
          </Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link nav__link--btn" to="/login">
            Login
          </Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link nav__link--btn " to="/signup">
            Get Started
          </Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link nav__link--btn " to="/signup">
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
