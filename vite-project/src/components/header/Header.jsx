import "./header.scss";
import { Link } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"
import ProfileMenu from "../ProfileMenu/ProfileMenu";

function Header() {
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();

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
              <li>
                {
                  !isAuthenticated ? (
                  <button onClick={loginWithRedirect}>LOGIN</button>):(
                  <ProfileMenu  user={user} logout={logout}/>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
}

export default Header;
