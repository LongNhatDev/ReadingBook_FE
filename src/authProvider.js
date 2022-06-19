import React from "react";

const authentication = React.createContext();

function AuthProvider({ children }) {
  const accessToken = localStorage.getItem("token");
  const avatar = localStorage.getItem("ava");
  const fullName = localStorage.getItem("name");

  const auth = {
    accessToken: accessToken,
    avatar: avatar,
    fullName: fullName,
  };
  return (
    <authentication.Provider value={auth}>{children}</authentication.Provider>
  );
}

export { authentication, AuthProvider };
