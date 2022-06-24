import React, { useEffect } from "react";
import { useState } from "react";
import { BaseURL } from "./modules/AxiosInstance";

const authentication = React.createContext();

function AuthProvider({ children }) {
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("accessToken")
  );
  const [avatar, setAvatar] = useState(localStorage.getItem("avatar"));
  const [fullName, setFullname] = useState(localStorage.getItem("fullName"));
  const [roles, setRoles] = useState(localStorage.getItem("roles"));
  const [role, setRole] = useState(localStorage.getItem("role"));

  const setAuthInfo = (token, avatar, name, roles, role) => {
    setAccessToken(token);
    setAvatar(avatar);
    setFullname(name);
    setRoles(roles);
    setRole(role);
  };

  const TIME_TO_REFRESH_TOKEN = 29 * 60 * 1000;
  const refreshToken = localStorage.getItem("refreshToken");

  useEffect(() => {
    async function refreshTokenHandler() {
      try {
        const res = await BaseURL.post(
          "api/auth/refreshToken",
          { refreshToken: refreshToken },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        localStorage.setItem("accessToken", res.data.token);
        setAccessToken(res.data.token);
      } catch (err) {
        console.log(err);
      }
    }
    if (refreshToken) {
      refreshTokenHandler();
    }
    setInterval(() => {
      if (refreshToken) {
        refreshTokenHandler();
      }
    }, TIME_TO_REFRESH_TOKEN);
  }, [TIME_TO_REFRESH_TOKEN, refreshToken]);

  let value = {
    accessToken: accessToken,
    avatar: avatar,
    fullName: fullName,
    roles: roles,
    role: role,
    setAuthInfo,
  };

  return (
    <authentication.Provider value={value}>{children}</authentication.Provider>
  );
}

export { authentication, AuthProvider };
