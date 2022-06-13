import React from "react";
import { useState, useEffect } from "react";
import { BaseURL } from "../AxiosInstance";
import Profile from "./index";

function InfoUser() {
  const [profile, setProfile] = useState({});
  const token = localStorage.getItem("token");

  useEffect(() => {
    console.log("run");
    const getProfile = async () => {
      try {
        const res = await BaseURL.get("api/users/profile", {
          headers: {
            Authorization: token,
          },
        });
        console.log(res.data);
        setProfile(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProfile();
  }, []);
  return (
    <Profile
      name={profile.fullName}
      email={profile.email}
      avatar={profile.avatar}
    />
  );
}

export default InfoUser;
