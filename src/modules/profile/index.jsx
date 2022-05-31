import React, { useState, useEffect } from "react";
import Page from "../components/page";
import UserNav from "../components/usernav";
import styled from "styled-components";
import Button from "../components/button";
import { useNavigate } from "react-router-dom";
import { showErrorToaster, showSuccessToaster } from "../../components/Toaster";
import ChangePassword from "./changePassword";

const Profile = () => {
  const [name, setName] = useState("mailinh");
  const [email, setEmail] = useState("abc@gmail.com");
  const [password, setPassword] = useState("123456");
  const [file, setFile] = useState(null);
  const [pic, setPic] = useState(
    "https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg"
  );
  const [list, setList] = useState([]);
  const [error, setError] = useState(false);

  const [isShowChangePassword, setIsShowChangePassword] = useState(false);
  const handleChangePassword = (e) => {
    e.preventDefault();
    setIsShowChangePassword(true);
  };

  const hideChangePassword = () => {
    setIsShowChangePassword(false);
  };

  let navigate = useNavigate();
  const path = "/home";

  const getProfile = () => {
    return fetch("/api/users").then((data) => data.json());
  };

  useEffect(() => {
    getProfile().then((items) => {
      setList(items);
    });
  }, []);

  const [er, setEr] = useState({
    name: false,
    email: false,
  });

  const handleChangeAvatar = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFile(file);
      setPic(URL.createObjectURL(file));
    }
    console.log(pic);
  };

  const handleUpdate = () => {
    let path = "/profile";
    setEr({
      ...er,
      name: name === "",
      email: email === "",
    });

    if (er.name || er.email || name === "" || email === "") {
      showErrorToaster("Something Wrong, Check again !");
    } else {
      showSuccessToaster("Update Successfully !");
      navigate(path);
    }

    const sendData = {
      title: "",
      content: { name, email, password },
    };
    fetch("/api/users/profile", {
      method: "POST",
      body: JSON.stringify(sendData),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <>
      <UserNav></UserNav>
      <Page>
        <Title>Account Settings</Title>
        <WrapForm>
          <ProfileWapper>
            <CoverImage title="Avatar">
              <input
                accept="image/*"
                id="profilePhoto"
                type="file"
                style={{ display: "none" }}
                onChange={handleChangeAvatar}
              />
              <p
                style={{ position: "absolute", zIndex: "-1", fontSize: "18px" }}
              >
                + Add Image Avatar
              </p>
              <Image src={pic} alt="" />
            </CoverImage>
            <Infor>
              <InputInfo
                placeholder="Enter user name"
                type="text"
                className={er.name ? "invalid" : ""}
                value={name}
                onChange={(e) => {
                  setEr({ ...er, name: false });
                  setName(e.target.value.trim());
                }}
                onBlur={() => {
                  setEr({ ...er, name: name === "" });
                }}
              />

              <InputInfo
                placeholder="Enter email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEr({ ...er, name: false });
                  setEmail(e.target.value.trim());
                }}
                onBlur={() => {
                  setEr({ ...er, name: name === "" });
                }}
              />

              <InputInfo type="password" value={password} />
            </Infor>
          </ProfileWapper>

          <Button
            style={{ margin: "10px 1.5rem" }}
            onClick={handleChangePassword}
          >
            Change Password
          </Button>
          <Button style={{ margin: "10px 1.5rem" }} onClick={handleUpdate}>
            Update
          </Button>
        </WrapForm>
        {isShowChangePassword && (
          <ChangePassword onClose={hideChangePassword} />
        )}
      </Page>
    </>
  );
};

export default Profile;
const ProfileWapper = styled.div`
  width: 100%;
  display: flex;

  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;
const CoverImage = styled.label`
  position: relative;
  height: 200px;
  width: 200px;
  margin-right: 100px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 6px #004468;
  margin: 2rem 0;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  cursor: "pointer";
  vertical-align: middle;
`;
const WrapForm = styled.form`
  //margin-top: 15px;
  width: 40%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  text-shadow: 2px 2px 1px #00000033;
  margin: 30px 0;
  text-transform: uppercase;
  background-image: linear-gradient(
    to right,
    #051937,
    #004468,
    #00748c,
    #00a69d,
    #68d69d
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 2s linear infinite;
  display: inline-block;
  font-weight: bold;
  font-size: 60px;
  font-family: "Comic Sans MS", Courier, monospace;

  @keyframes textclip {
    to {
      background-position: 200% center;
    }
  }
`;
const Infor = styled.div`
  display: flex;
  width: 80%;

  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`;

const InputInfo = styled.input`
  width: 100%;
  height: 50px;
  margin: 10px 0 5px;
  padding-left: 5px;
  line-height: 30px;
  border: 2px solid #dddddd;
  font-size: 20px;
  border-radius: 5px;

  :hover {
    border: 2px solid blue;
  }
  & .invalid {
    border: 1px solid red;
  }
`;
