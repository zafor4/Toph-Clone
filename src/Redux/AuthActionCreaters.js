import * as actionTypes from "./ActionTypes";
import axios from "axios";

export const  authSuccess=(token,userId)=>{
    return {
        type:actionTypes.AUTH_SUCCESS,
        payload:{
            token:token,
            userId:userId
        }
    }

}


export const auth = (email, password, mode)=>dispatch=> {
  const authData = {
    email: email,
    password: password,
    returnSecureToken: true,
  };
  const API_KEY = "AIzaSyDh1pWPzC6_-hz2TaIVorj-wbkMbX4GE0g";
  let LINK = null; // Change const to let
  if (mode === "sign up") {
    LINK = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
  } else if (mode === "log in") {
    LINK =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";
  }

  axios
    .post(LINK + API_KEY, authData)
    .then((response) => {
        localStorage.setItem('token',response.data.idToken)
        localStorage.setItem('userId',response.data.localId)
        const expirationTime=new Date(new Date().getTime()+response.data.expiresIn*1000)
        localStorage.setItem('expirationTime',expirationTime)
        dispatch(authSuccess(response.data.idToken,response.data.localId))
    })
    .catch((err) => console.log("Error", err));
};



export const logOut=()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');
    localStorage.removeItem('userId');
    return{
        type:actionTypes.AUTH_LOGOUT,
    }
}
export const authCheck=()=>dispatch=>{
    const token=localStorage.getItem('token')
    if(!token){
        dispatch(logOut())
    }
    else {
        const expirationTime=new Date(localStorage.getItem('expirationTime'))

        if(expirationTime<=new Date()){
            dispatch(logOut())

        }
        else {

            const userId=localStorage.getItem('userId');
            dispatch(authSuccess(token,userId))
        }
     
    }
}



