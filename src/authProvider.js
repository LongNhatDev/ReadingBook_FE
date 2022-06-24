import React from "react";
import { useState } from "react";

const authentication = React.createContext();

function AuthProvider({ children }) {
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("accessToken")
  );
  const [avatar, setAvatar] = useState(localStorage.getItem("avatar"));
  const [fullName, setFullname] = useState(localStorage.getItem("fullName"));
  const [roles, setRoles] = useState(localStorage.getItem("roles"));

  const setAuthInfo = (token, avatar, name, roles) => {
    setAccessToken(token);
    setAvatar(avatar);
    setFullname(name);
    setRoles(roles);
  };

  let value = {
    accessToken: accessToken,
    avatar: avatar,
    fullName: fullName,
    roles: roles,
    setAuthInfo,
  };

  return (
    <authentication.Provider value={value}>{children}</authentication.Provider>
  );
}

export { authentication, AuthProvider };
