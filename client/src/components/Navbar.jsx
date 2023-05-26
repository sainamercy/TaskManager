import { Link } from "react-router-dom";
import network from "../utils/network";
import { getToken } from "../utils/auth";
import { useState } from "react";

function Navbar() {
  const [active, setActive] = useState(false);

  const onlogout = () => {
    network.logout();
    window.location.reload();
    window.location.href = "/";
  };
  const token = getToken();

  const handleNav = () => {
    setActive(!active);
  };
  return (
    <nav className="nav">
      <Link to="/">
        <img src="/assets/logof.png" alt=" logo" className="nav__logo" />
      </Link>
      <i className="fa-solid fa-bars ham" onClick={handleNav}></i>
      <ul className={`nav__links ${!active && "hidden"}`} onClick={handleNav}>
        <li className="nav__item">
          <Link className="nav__link" to="/">
            Home
          </Link>
        </li>
        {token && (
          <li className="nav__item">
            <Link className="nav__link" to="/todos">
              Tasks
            </Link>
          </li>
        )}
        {!token && (
          <>
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
          </>
        )}
        {token && (
          <li className="nav__item" onClick={onlogout}>
            <Link className="nav__link nav__link--btn ">Logout</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
