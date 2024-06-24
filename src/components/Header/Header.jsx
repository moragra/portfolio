import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <h2 className="header__gm">gm.</h2>
      <nav className="header__nav">
        <ul className="header__ul">
          <li  className="header__li">
            <h2 className="header__h2">Work</h2>
          </li>
          <li  className="header__li">
            <h2 className="header__h2">About</h2>
          </li>
          <li  className="header__li">
            <h2 className="header__h2">Contact</h2>
          </li>
        </ul>
      </nav>
    </header>
  );
}
