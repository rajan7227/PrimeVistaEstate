import { createContext, useEffect, useState } from "react";
 export const UserDetailContext = createContext();

export const UserDetailContextProvider = ({ children }) => {
    const [user, setUser] = useState({loggedInUser:null});

    useEffect(()=>{
        const userToken = localStorage.getItem("access_token")
        if(userToken){
            setUser({loggedInUser:userToken})
        }
    },[])

  return <UserDetailContext.Provider value={user}>
    {children}
  </UserDetailContext.Provider>;
};
