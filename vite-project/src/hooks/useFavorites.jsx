import React, { useContext, useEffect, useRef } from "react";
import AllDetails from "../components/context/AllDetails";
import { useQuery } from "react-query";
import { useAuth0 } from "@auth0/auth0-react";
import { UserDetailContext } from "../components/context/Context";
import { getAllFav } from "../components/api/api";

function useFavorites() {
    const {allDeatils, setAllDetails} = useContext(AllDetails);
    const { loggedInUser } = useContext(UserDetailContext);
    const queryRef = useRef();
    const { user }= useAuth0();

    const {data, isLoading, isError, refetch}= useQuery({
        queryKey: "allFavourites",
        queryFn:()=>getAllFav(user?.email, loggedInUser),
        onSuccess: (data)=> setAllDetails((prev)=>({...prev, favorites:data})),
        enabled: user !== undefined,
        staleTime:30000
    });

    queryRef.current = refetch

    useEffect(()=>{
        queryRef.current && queryRef.current()
    },[loggedInUser])
  return {data, isError, isLoading, refetch};
}

export default useFavorites ;