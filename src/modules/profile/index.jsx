import React, { useState, useEffect } from "react";
import { BaseURL } from "../AxiosInstance";
import { useDropzone } from "react-dropzone";
import Page from "../components/page";
import UserNav from "../components/usernav";
import styled from "styled-components";
import Button from "../components/button";
import Button1 from "../components/button1";
import { useNavigate } from "react-router-dom";
import { showErrorToaster, showSuccessToaster } from "../../components/Toaster";
import InvalidMessage from "../auth/components/invalidmessage";
import ChangePassword from "./components/changePassword";
import axios from "axios";

const Profile = (props) => {
  const { name, email, avatar } = props;
  useEffect(() => {
    setFullName(name);
  }, [name]);
  const [file, setFile] = useState([]);
  const [activeTab, setActiveTab] = useState("edit");
  const [isShowChangePassword, setIsShowChangePassword] = useState(false);
  const token = localStorage.getItem("token");
  const [fullname, setFullName] = useState(name);

  const [er, setEr] = useState({
    name: false,
  });

  let fileName = "";
  let fileType = "";
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: async (acceptedfile) => {
      setFile(
        acceptedfile.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const images = file.map((file) => (
    <div key={file.name}>
      <div>
        <img
          src={file.preview}
          style={{
            position: "relative",
            zIndex: "2",
            height: "200px",
            width: "200px",
            marginTop: "4px",
          }}
          alt="preview"
        />
      </div>
    </div>
  ));

  file.forEach((file) => {
    fileName = file.name;
    fileType = file.type;
  });
  const handleChangePassword = (e) => {
    e.preventDefault();
    setIsShowChangePassword(true);
    setActiveTab("change");
  };

  const hideChangePassword = () => {
    setIsShowChangePassword(false);
    setActiveTab("edit");
  };

  let navigate = useNavigate();
  const path = "/home";

  const handleUpdate = async (e) => {
    e.preventDefault();
    console.log(fullname);
    setEr({
      ...er,
      name: fullname === "",
    });

    const responeGetURL = await BaseURL.get(
      `/api/sign-s3?file-name=${fileName}&file-type=${fileType}&bucket-name=avatars`
    );
    console.log(responeGetURL.data.signedRequest);
    try {
      if (er.name || fullname === "") {
        showErrorToaster("Something Wrong, Check again !");
      } else {
        console.log("hiiii");
        await BaseURL.put(
          responeGetURL.data.signedRequest,
          file[file.length - 1],
          {
            headers: {
              "Content-Type": fileType,
            },
          }
        );

        const sendData = {
          fullName: fullname,
          avatar: responeGetURL.data.url,
        };
        console.log("fullName:", sendData.fullName, "url:", sendData.avatar);

        await BaseURL.put("/api/users/profile", sendData, {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        });
        showSuccessToaster("Update Successfully !");
        let path = "/profile";
        navigate(path);
      }
    } catch (error) {
      showErrorToaster("Error !");
    }
  };

  return (
    <Background>
      <UserNav></UserNav>
      <Page style={{ flexFlow: "nowrap", width: "100%" }}>
        <div style={{ position: "absolute", left: "25px", top: "125px" }}>
          <WrapButton1>
            <Button1
              className={activeTab === "edit" ? "active" : ""}
              onClick={() => setActiveTab("edit")}
              style={{ padding: "0.6em 2.18em" }}
            >
              Edit profile
            </Button1>
            <Button1
              className={activeTab === "change" ? "active" : ""}
              onClick={handleChangePassword}
            >
              Change Password
            </Button1>
          </WrapButton1>
        </div>
        <WrapForm>
          <ProfileWapper>
            <CoverImage title="Avatar" {...getRootProps()}>
              <input {...getInputProps()} />
              {/* <p
                style={{ position: "absolute", zIndex: "1", fontSize: "18px" }}
              >
                + Add Image Avatar
              </p> */}
              <img
                src={avatar}
                alt=""
                style={{
                  position: "absolute",
                  zIndex: "1",
                  height: "200px",
                  width: "200px",
                }}
              />
              {images}
            </CoverImage>
            <Infor>
              <label htmlFor="" style={{ fontWeight: "600" }}>
                Full Name
              </label>
              <InputInfo
                placeholder="Enter user name"
                type="text"
                className={er.name ? "invalid" : ""}
                value={fullname}
                onChange={(e) => {
                  setEr({ ...er, name: false });
                  setFullName(e.target.value);
                }}
                onBlur={() => {
                  setEr({ ...er, name: name === "" });
                }}
              />
              {er.name && (
                <div>
                  <InvalidNoti>
                    Please fill full name (e.g: Nguyen Van A)
                  </InvalidNoti>
                </div>
              )}
              <label htmlFor="" style={{ fontWeight: "600" }}>
                Email
              </label>
              <InputInfo placeholder="Enter email" type="email" value={email} />
            </Infor>
          </ProfileWapper>
          <WrapButton>
            <ButtonCancel
              style={{ margin: "0 10px" }}
              onClick={() => {
                navigate(path);
              }}
            >
              Cancel
            </ButtonCancel>
            <Button style={{ margin: "0 10px" }} onClick={handleUpdate}>
              Update
            </Button>
          </WrapButton>
        </WrapForm>
        {isShowChangePassword && (
          <ChangePassword onClose={hideChangePassword} />
        )}
      </Page>
    </Background>
  );
};

export default Profile;
const ButtonCancel = styled(Button)`
  background-color: red;
`;

const Background = styled.div`
  background-color: #eaeaeaa9;
  width: 100%;
  height: 100%;
  min-height: 712px;
`;
const ProfileWapper = styled.div`
  width: 100%;
  height: 30rem;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  background-color: white;
  /* box-shadow: 2px 2px 6px grey; */
  box-shadow: 2rem 2rem 1px -1rem #b9b9b9;
  margin-bottom: 2rem;
`;
const CoverImage = styled.label`
  position: relative;
  height: 200px;
  width: 200px;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 6px #004468;
`;
const WrapForm = styled.form`
  width: 40%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 100px;
  right: 0;
  bottom: 0;
  margin: auto;
  position: absolute;
`;
const WrapButton = styled.div`
  margin: 10px 0 0 0;
  width: 50%;
  display: flex;
  flex-flow: row;
  justify-content: space-evenly;
  align-items: center;
`;

const WrapButton1 = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 10px;
  .active {
    background: linear-gradient(35deg, #ced4d8, #acacac);
    color: #000000;
  }
`;
const Infor = styled.div`
  display: flex;
  margin-left: 20px;
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const InputInfo = styled.input`
  width: 100%;
  height: 45px;
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
const InvalidNoti = styled(InvalidMessage)`
  margin-bottom: 10px;
`;
