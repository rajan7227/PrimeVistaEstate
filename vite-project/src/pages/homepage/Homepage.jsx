import Hero from "../../components/hero/Hero";
import Header from "../../components/header/Header";
import Slider from "../../components/slider/Slider";
import Card from "../../components/Card/Card";
import { useAuth0 } from "@auth0/auth0-react";
import { useContext, useEffect } from "react";
import userDetailContext from "../../components/context/Context";
import { useMutation } from "react-query";
import axios from "axios";

function Homepage() {
  const { isAuthenticated, user, getAccessTokenWithPopup } = useAuth0();
  const { setUserDetails } = useContext(userDetailContext);

  const { mutate } = useMutation({
    mutationKey: [user?.email],
    mutationFn: (token) => createUser(user?.email),
  });
  
  useEffect(() => {

    const getAccessTokeAndRegister =  async () =>{
      const res = await getAccessTokenWithPopup({
        authorizationParams: {
          audience: "http://localhost:9090",
          scope: "openid profile email"
        },
      });
      localStorage.setItem("access_token", res)
      setUserDetails((prev)=>({...prev, token: res}))
      console.log(res)
      
      }

    if (isAuthenticated) {
      axios
        .post("http://localhost:9090/user/signup", { email: user.email })
        .then((response) => {
          console.log(response.data);
        })
        .catch();
    }
    isAuthenticated && getAccessTokeAndRegister()
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
