import "./header.scss";
import { Link } from "react-router-dom";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios'
import AddPropertyModal from "../AddPropertyModal/AddPropertyModal";
import { useState } from "react";
import useAuthCheck from "../../hooks/useAuthCheck";
import { toast } from "react-toastify";

function Header() {
  const [modalOpened, setModalOpened] = useState(false);
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  const { logout } = useAuth0();
  const { validateLogin } = useAuthCheck();

  const handleAddPropertyClick = () => {
    console.log("clicked")
    if(isAuthenticated){
      setModalOpened(true);
    }
    
  }
  

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
                {!isAuthenticated ? (
                  <button onClick={loginWithRedirect}>LOGIN</button>
                ) : (
                  <ProfileMenu user={user} logout={logout} />
                )}
              </li>
              <button
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Log Out
              </button>
              <div onClick={()=>handleAddPropertyClick()}>Add Property</div>
              <AddPropertyModal opened={modalOpened} setOpened={setModalOpened}/>
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
}

export default Header;
