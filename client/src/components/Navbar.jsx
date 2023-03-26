
function Navbar() {
  return (
    <nav className="nav">
    <img
      src="./src/assets/logof.png"
      alt=" logo"
      className="nav__logo"
    />
    <ul className="nav__links">
      <li className="nav__item">
        <a className="nav__link" href="#">Tasks</a>
      </li>
      <li className="nav__item">
        <a className="nav__link" href="#">Login</a>
      </li>
      <li className="nav__item">
        <a className="nav__link nav__link--btn " href="#"
          >Get Started</a>
      </li>
    </ul>
  </nav>
  );
}

export default Navbar;
