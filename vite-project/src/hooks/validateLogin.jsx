import React from "react";
import {useAuth0} from '@auth0/auth0-react'


function validateLogin() {
    const {isAuthenticated} = useAuth0();
    const validateLogn = () =>{
        if (!isAuthenticated){
            console.alert("please login to continue")
            return false
        } else return true
    }

    return ( { validateLogn} );
}

export default validateLogin;