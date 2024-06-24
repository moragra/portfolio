import "./Header.scss";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <h2 className="header__gm">gm.</h2>
      <nav className="header__nav">
        <ul className="header__ul">
          <NavLink className="header__li" to={'/'}>
          <h2 className="header__h2">Work</h2>
          </NavLink>
          <NavLink  className="header__li" to={'/about'}>
            <h2 className="header__h2">About</h2>
          </NavLink>
          <NavLink  className="header__li" to={'/contact'}>
            <h2 className="header__h2">Contact</h2>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}
