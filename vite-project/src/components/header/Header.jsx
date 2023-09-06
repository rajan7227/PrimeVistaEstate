import "./header.scss";
import { Link } from "react-router-dom";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import AddPropertyModal from "../AddPropertyModal/AddPropertyModal";
import { useState } from "react";
import useAuthCheck from "../../hooks/useAuthCheck";
import { toast } from "react-toastify";
import logo from "../../assets/logo.svg";

function Header() {
  const [modalOpened, setModalOpened] = useState(false);
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  const { logout } = useAuth0();
  const { validateLogin } = useAuthCheck();

  const handleAddPropertyClick = () => {
    console.log("clicked");
    if (isAuthenticated) {
      setModalOpened(true);
    }
  };

  return (
    <>
      <section className="header">
        <div className="header__wrapper">
          <div className="header__nav">
            <ul className="header__ul">
              <li className="header__li"><Link to="/">Home</Link></li>
              <li className="header__li"><Link to="/property ">Listings</Link></li>
              <li className="header__li"> <Link to="/" >About us</Link></li>
            </ul>
          </div>
          <div className="header__logo">
            <div className="header__logowrapper">
              <img className="header__logosvg" src={logo}></img>
              <h1 className="header__logoname"> <Link to="/">PrimeVista</Link></h1>
            </div>
          </div>
          <div className="header__account">
            <ul className="header__account-ul">
              <li >
                {!isAuthenticated ? (
                  <button  className="header__login" onClick={loginWithRedirect}>LOGIN</button>
                ) : (
                  <ProfileMenu user={user} logout={logout} />
                )}</li>
              <li><button className="header__logout"
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                /Log Out
              </button></li>
              <li className="header__addproperty">
                <img
                  className="header__logo-addproperty"
                  alt="logo of house"
                  src={logo}
                />
                <div className="header__logo-addlisting" onClick={()=>handleAddPropertyClick()}>Add Listing</div>
                <AddPropertyModal opened={modalOpened} setOpened={setModalOpened}/>
              </li>
            </ul>
          </div>
        </div>
      </section>
      
    </>
  );
}

export default Header;
