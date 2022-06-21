import React from "react";
import { useState } from "react";

const authentication = React.createContext();

function AuthProvider({ children }) {

  const [accessToken, setAccessToken] = useState(localStorage.getItem("token"))
  const [avatar, setAvatar] = useState(localStorage.getItem("ava"))
  const [fullName, setFullname] = useState(localStorage.getItem("name"))

  const setAuthInfo = (token, avatar, name) => {
    setAccessToken(token);
    setAvatar(avatar);
    setFullname(name)
  }

  let value = {
    accessToken: accessToken,
    avatar: avatar,
    fullName: fullName,
    setAuthInfo
  };


  return (
    <authentication.Provider value={value}>{children}</authentication.Provider>
  );
}

export { authentication, AuthProvider };
