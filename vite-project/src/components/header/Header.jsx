import "./header.scss";
import { Link } from "react-router-dom"

function Header() {
  return (
    <>
      <section className="header">
        <div className="header__wrapper">
          <h1 className="header__logo">PrimeVista</h1>
          <nav className="header__nav">
            <ul className="header__ul">
              <li className="header__home">
                <a href="/">home</a>
              </li>
              <li className="header__properties">
                <Link to="/property ">properties</Link>
              </li>
              <li className="header__contact">
                <a href="/">Contact us</a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
}

export default Header;
