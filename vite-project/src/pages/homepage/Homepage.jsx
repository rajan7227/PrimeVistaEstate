import Hero from "../../components/hero/Hero";
import Header from "../../components/header/Header";
import Slider from "../../components/slider/Slider";
import Card from "../../components/Card/Card";
import { useAuth0 } from "@auth0/auth0-react";
import { useContext, useEffect } from "react";
import { UserDetailContext } from "../../components/context/Context";

import axios from "axios";
import useFavorites from "../../hooks/useFavorites";
import WhoWeAre from "../../components/WhoWeAre/WhoWeAre";

function Homepage() {

  useFavorites();
  const { isAuthenticated, user, getAccessTokenWithPopup } = useAuth0();
  const  { loggedInUser }  = useContext(UserDetailContext);
  // console.log(loggedInUser)


  useEffect(() => {
    const getAccessTokenAndRegister = async () => {
      try {
        const res = await getAccessTokenWithPopup({
          authorizationParams: {
            audience: "https://dev-l6.uk.auth0.com/api/v2/",
            scope: "openid profile email"
          },
        });
        localStorage.setItem("access_token", res);
        setUserDetail((prev) => ({ ...prev, token: res }));
        // console.log(res)
         mutate(res)
      } catch (error) {
        console.log("Error getting access token:", error);
      }
    };
  
    if (isAuthenticated) {
      axios
        .post("http://localhost:9090/user/signup", { email: user.email }, {
          headers: {
            Authorization: `Bearer  ${loggedInUser}`,
          }})
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log("Error registering user:", error);
        });
    }
    isAuthenticated && getAccessTokenAndRegister();
  }, [isAuthenticated]);

  return (
    <>
      <Header />
      <Hero />
      <Slider />
      <WhoWeAre/>
      <Card />
    </>
  );
}

export default Homepage;
