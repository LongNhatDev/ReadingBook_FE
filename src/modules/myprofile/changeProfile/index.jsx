import axios from "axios";
import React from "react";
import { useContext } from "react";
import { useDropzone } from "react-dropzone";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { authentication } from "../../../authProvider";
import {
  showErrorToaster,
  showInstructionToaster,
} from "../../../components/Toaster";
import InputWrapper from "../../auth/components/inputwrapper";
import InvalidMessage from "../../auth/components/invalidmessage";
import { BaseURL } from "../../AxiosInstance";
import Input from "../../components/input";
import UserNav from "../../components/usernav";

const ChangeProfile = () => {
  const navigate = useNavigate();
  let fileName = "";
  let fileType = "";
  let avaURL = "";
  const context = useContext(authentication);

  const [infor, setInfor] = React.useState({
    _id: "",
    fullName: "",
    avatar: "",
    email: "",
  });
  const [file, setfile] = React.useState([]);
  const [onDrop, setOnDrop] = React.useState(false);
  const [fullname, setFullname] = React.useState("");
  const [errorFullname, setErrorFullname] = React.useState(false);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: async (acceptedfile) => {
      setOnDrop(true);
      setfile(
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
          style={{ height: "243px", width: "182.25px", marginTop: "4px" }}
          alt="preview"
        />
      </div>
    </div>
  ));

  file.forEach((file) => {
    fileName = file.name;
    fileType = file.type;
  });

  const handleMoveToEditProfilePage = () => {
    let path = "/myprofile/";
    navigate(path);
  };

  const handleMoveToChangePasswordPage = () => {
    let path = "/myprofile/changepassword";
    navigate(path);
  };

  React.useEffect(() => {
    async function getProfile() {
      const query = "api/users/profile";
      const authorization = {
        headers: { Authorization: context.accessToken },
      };
      const respone = await BaseURL.get(query, authorization);
      setInfor({
        ...infor,
        _id: respone.data._id,
        fullName: respone.data.fullName,
        avatar: respone.data.avatar,
        email: respone.data.email,
      });
    }
    getProfile();
  }, []);

  const handleCancel = () => {
    let path = "/home";
    navigate(path);
  };

  const handleUpdate = async () => {
    try {
      if (errorFullname) {
        showErrorToaster("Please resolve error before clicking!");
        return;
      } else {
        if (file.length > 0) {
          const responeGetURL = await BaseURL.get(
            `/api/sign-s3?file-name=${fileName}&file-type=${fileType}&bucket-name=book-covers`
          );

          const config = {
            headers: {
              "Content-Type": fileType,
            },
          };

          avaURL = responeGetURL.data.url;
          await axios.put(
            responeGetURL.data.signedRequest,
            file[file.length - 1],
            config
          );
        }
        const authorization = {
          headers: { Authorization: context.accessToken },
        };
        const body = {
          fullName: fullname === "" ? infor.fullName : fullname,
          avatar: file.length > 0 ? avaURL : infor.avatar,
        };

        await BaseURL.put("api/users/profile", body, authorization);
        showInstructionToaster("Update successful, please login !");

        let path = "/";
        navigate(path);
      }
    } catch (error) {
      showErrorToaster("Error occur when updating!");
    }
  };

  return (
    <Background>
      <UserNav />
      <Content>
        <WrapButton>
          <ButtonCustom onClick={handleMoveToEditProfilePage}>
            Edit profile
          </ButtonCustom>
          <ButtonCustom onClick={handleMoveToChangePasswordPage}>
            Change Password
          </ButtonCustom>
        </WrapButton>
        <WrapTable>
          <WrapForm>
            <H1Custom>Change your profile</H1Custom>
            <WrapInfor>
              <CoverImage title="Image Cover" {...getRootProps()}>
                <input style={{}} {...getInputProps()} />
                <p
                  style={{
                    position: "absolute",
                    zIndex: "-1",
                    fontSize: "1.8rem",
                  }}
                >
                  + Add Image Cover
                </p>
                {images}
              </CoverImage>

              <Infor>
                <InputWrapperCustom style={{ flexFlow: "wrap" }}>
                  <Label>Your full name</Label>
                  <DivCustom>
                    <InputCustom
                      type="text"
                      placeholder={infor.fullName}
                      onChange={(event) => {
                        setFullname(event.target.value);
                      }}
                      onBlur={() => {
                        setErrorFullname(
                          fullname === "" || fullname === infor?.fullName
                        );
                      }}
                    />
                    <InvalidMessage>
                      {errorFullname
                        ? " Please enter your new full name"
                        : null}
                    </InvalidMessage>
                  </DivCustom>
                </InputWrapperCustom>

                <InputWrapperCustom style={{ flexFlow: "wrap" }}>
                  <Label>Your email</Label>
                  <DivCustom>
                    <InputCustomDisable
                      type="text"
                      disabled={true}
                      placeholder={infor.email}
                    />
                  </DivCustom>
                </InputWrapperCustom>

                <InputWrapperCustom style={{ flexFlow: "wrap" }}>
                  <Label>Your ID</Label>
                  <DivCustom>
                    <InputCustomDisable
                      type="text"
                      disabled={true}
                      placeholder={infor._id}
                    />
                  </DivCustom>
                </InputWrapperCustom>
              </Infor>
            </WrapInfor>

            <WrapperButtons>
              <ButtonPage
                style={{ backgroundColor: "red" }}
                onClick={handleCancel}
              >
                Cancel
              </ButtonPage>
              <ButtonPage
                type="button"
                style={{ backgroundColor: "#68d69d" }}
                onClick={handleUpdate}
              >
                Update
              </ButtonPage>
            </WrapperButtons>
          </WrapForm>
        </WrapTable>
      </Content>
    </Background>
  );
};

export default ChangeProfile;

const CoverImage = styled.div`
  position: relative;
  width: 184.25px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 250px;
  border-right: 1px solid black;
  margin-right: 5px;
  box-shadow: 2px 2px 6px black;
`;

const WrapperButtons = styled.div`
  width: 40%;
  margin-top: 2%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const ButtonPage = styled.button`
  width: 170px;
  line-height: 40px;
  border-radius: 6px;
  color: white;
  border: 0.3px solid #57ba87;
  font-size: 16px;
  font-weight: bold;
  box-shadow: 2px 2px 6px grey;
  margin-top: 10px;
  transition: 0.5s;
  :hover {
    color: #051937;
    transform: scale(1.1);
  }
`;

const InputWrapperCustom = styled(InputWrapper)`
  align-items: flex-start;
`;

const InputCustom = styled(Input)`
  width: 100%;
  :hover {
    border: 2px solid #a3a3a3;
    cursor: initial;
  }
`;

const InputCustomDisable = styled(Input)`
  width: 100%;
  :hover {
    border: 2px solid #a3a3a3;
    cursor: no-drop;
  }
`;

const Label = styled.label`
  min-width: 150px;
  font-size: 16px;
  font-weight: bolder;
  margin-top: 1.6%;
`;

const DivCustom = styled.div`
  width: 50%;
  min-height: 85px;
`;

const Infor = styled.div`
  flex: 2;
  height: 250px;
`;

const WrapInfor = styled.div`
  width: 60%;
  padding: 20px 30px;
  border: 1px solid grey;
  box-shadow: 1px 1px 6px grey;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

const WrapForm = styled.form`
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`;

const H1Custom = styled.h1`
  color: #051937;
  font-size: 40px;
  font-weight: bolder;
  text-shadow: -1px 1px 2px #004468;
`;

const Background = styled.div`
  width: 100%;
  min-height: 712px;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
`;

const WrapButton = styled.div`
  display: flex;
  flex: 1;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  border-right: 1px solid #051937;
  padding-top: 30px;
  background-color: #eaeaeaa9;
  box-shadow: 2px 2px 6px grey;
`;

const ButtonCustom = styled.button`
  width: 170px;
  line-height: 40px;
  border-radius: 6px;
  color: white;
  border: 0.3px solid #57ba87;
  font-size: 16px;
  font-weight: bold;
  box-shadow: 2px 2px 6px grey;
  margin-top: 10px;
  transition: 0.5s;
  background-image: linear-gradient(to right, #051937, #004468);
  :hover {
    color: #68d69d;
    transform: scale(1.1);
  }
`;

const WrapTable = styled.div`
  display: flex;
  flex: 5;
  flex-flow: column;
  min-height: 700px;
  padding-top: 8px;
`;
