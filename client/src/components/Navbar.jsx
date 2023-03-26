
function Navbar() {
  return (
    <nav class="nav">
    <img
      src="./src/assets/logof.png"
      alt=" logo"
      class="nav__logo"
    />
    <ul class="nav__links">
      <li class="nav__item">
        <a class="nav__link" href="#">Tasks</a>
      </li>
      <li class="nav__item">
        <a class="nav__link" href="#">Login</a>
      </li>
      <li class="nav__item">
        <a class="nav__link nav__link--btn " href="#"
          >Get Started</a>
      </li>
    </ul>
  </nav>
  );
}

export default Navbar;
