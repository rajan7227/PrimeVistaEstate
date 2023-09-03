import Hero from "../../components/hero/Hero";
import Header from "../../components/header/Header";
import Slider from "../../components/slider/Slider";
import Card from "../../components/Card/Card";
import { useAuth0 } from "@auth0/auth0-react";
import { useContext, useEffect } from "react";
import userDetailContext from "../../components/context/Context";
import { useMutation } from "react-query";
import { createHashRouter } from "react-router-dom";
import axios from "axios";

function Homepage() {
  const { isAuthenticated, user, getAccessTokenWithPopup } = useAuth0();
  const { setUserDetails } = useContext(userDetailContext);

  const { mutate } = useMutation({
    mutationKey: [user?.email],
    mutationFn: () => createUser(user?.email),
  });

  // const getTokenAndRegister = async () => {
  //   const response = await getAccessTokenWithPopup({
  //     authorizationParams: {
  //       audience: "http://localhost:9090",
  //       scope: "openid profile email",
  //     },
  //   });
  //   console.log(response);
  //   localStorage.setItem("access_token", response);
  //   setUserDetails((prev) => ({ ...prev, token: response }));
    
  // };

  useEffect(() => {

    if (isAuthenticated) {
      axios
        .post("http://localhost:9090/user/signup", { email: user.email })
        .then((response) => {
          console.log(response.data);
        })
        .catch();
    }
  }, [isAuthenticated]);

  return (
    <>
      <Header />
      <Hero />
      <Slider />
      <Card />
    </>
  );
}

export default Homepage;
