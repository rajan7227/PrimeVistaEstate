import { useState, useEffect } from "react";
import { AiFillHeart } from "react-icons/ai";
import { UserDetailContext } from "../context/Context";
import { useContext } from "react";
import AllDetails from "../context/AllDetails";
import { useAuth0 } from "@auth0/auth0-react";
import useAuthCheck from "../../hooks/useAuthCheck";
import axios from "axios";
import { updateFavourites } from "../../utils/slidersetting";
import { checkFavourites } from "../../utils/slidersetting";
import { useMutation } from "react-query"
import { toFav } from "../api/api";

function Heart({ id }) {
  const [heartColor, setHeartColor] = useState("grey");
  const {validateLogin} = useAuthCheck()
  const { loggedInUser } = useContext(UserDetailContext);
  const { user } = useAuth0();
  const {
    allDeatils: { favourites },
    setAllDetails,
  } = useContext(AllDetails);
  

  useEffect(()=>{
      setHeartColor(()=>checkFavourites(id,favourites))
  },[favourites])

  const {mutate} = useMutation({
    mutationFn: () => toFav(id, user?.email, loggedInUser),
    onSuccess: ()=> {
      setAllDetails((prev)=> (
            {
                ...prev,
                favourites: updateFavourites(id, prev.favourites)
            }
        ))
    }
})


const handleLike = () => {
  if(validateLogin())
  {
      mutate()
      setHeartColor((prev)=> prev === "#fa3e5f" ? "grey": "#fa3e5f")
  }
}
  return (
    <>
      <AiFillHeart
      size={24}
      color={heartColor}
      onClick={(e) => {
        e.stopPropagation();
        handleLike();
      }}
    />
    </>
  );
}

export default Heart;
