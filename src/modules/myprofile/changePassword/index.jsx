import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { authentication } from "../../../authProvider";
import {
  showErrorToaster,
  showSuccessToaster,
} from "../../../components/Toaster";
import InputWrapper from "../../auth/components/inputwrapper";
import InvalidMessage from "../../auth/components/invalidmessage";
import { BaseURL } from "../../AxiosInstance";
import Input from "../../components/input";
import UserNav from "../../components/usernav";

const ChangePassword = () => {
  const navigate = useNavigate();

  const context = useContext(authentication);

  const [value, setValue] = React.useState({
    oldPass: "",
    newPass: "",
    confirmNewPass: "",
  });

  const [error, setError] = React.useState({
    oldPass: false,
    newPass: false,
    confirmNewPass: false,
  });

  const handleMoveToEditProfilePage = () => {
    let path = "/myprofile/";
    navigate(path);
  };

  const handleMoveToChangePasswordPage = () => {
    let path = "/myprofile/changepassword";
    navigate(path);
  };

  const handleChangePassword = async () => {
    try {
      if (
        value.confirmNewPass === "" ||
        value.newPass === "" ||
        value.oldPass === "" ||
        error.oldPass ||
        error.confirmNewPass ||
        error.newPass
      ) {
        showErrorToaster("Please resolve error before clicking");
        return;
      } else {
        const queryChangePassword = `api/users/change-password`;
        const authorization = {
          headers: { Authorization: context.accessToken },
        };
        const body = {
          oldPassword: value.oldPass,
          newPassword: value.confirmNewPass,
        };
        await BaseURL.put(queryChangePassword, body, authorization);
        showSuccessToaster("Update successful");
        let path = "/myprofile/";
        navigate(path);
      }
    } catch (error) {
      console.log("ERROR: ", error);
      showErrorToaster("ERROR, check your old password");
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
            <PassWapper>
              <H1Custom>Change your password</H1Custom>
              <Wrap>
                <InputWrapperCustom style={{ flexFlow: "wrap" }}>
                  <Label>Old Password</Label>
                  <DivCustom>
                    <InputCustom
                      type="text"
                      placeholder="Enter Old Password"
                      onChange={(event) => {
                        setValue({ ...value, oldPass: event.target.value });
                      }}
                      onBlur={() => {
                        setError({ ...error, oldPass: value.oldPass === "" });
                      }}
                    />
                    <InvalidMessage>
                      {error.oldPass ? " Please enter your old password" : null}
                    </InvalidMessage>
                  </DivCustom>
                </InputWrapperCustom>

                <InputWrapperCustom style={{ flexFlow: "wrap" }}>
                  <Label>New Password</Label>
                  <DivCustom>
                    <InputCustom
                      type="text"
                      placeholder="Enter New Password"
                      onChange={(event) => {
                        setValue({ ...value, newPass: event.target.value });
                      }}
                      onBlur={() => {
                        setError({ ...error, newPass: value.newPass === "" });
                      }}
                    />
                    <InvalidMessage>
                      {error.newPass ? " Please enter your old password" : null}
                    </InvalidMessage>
                  </DivCustom>
                </InputWrapperCustom>

                <InputWrapperCustom style={{ flexFlow: "wrap" }}>
                  <Label>Confirm New Password</Label>
                  <DivCustom>
                    <InputCustom
                      type="text"
                      placeholder="Enter Confirm Password"
                      onChange={(event) => {
                        setValue({
                          ...value,
                          confirmNewPass: event.target.value,
                        });
                      }}
                      onBlur={() => {
                        setError({
                          ...error,
                          confirmNewPass:
                            value.confirmNewPass === "" ||
                            value.confirmNewPass !== value.newPass,
                        });
                      }}
                    />
                    <InvalidMessage>
                      {error.confirmNewPass
                        ? " Please enter your old password"
                        : null}
                    </InvalidMessage>
                  </DivCustom>
                </InputWrapperCustom>
              </Wrap>
              <WrapperButtons>
                <ButtonPage
                  style={{ backgroundColor: "red" }}
                  onClick={handleMoveToEditProfilePage}
                >
                  Cancel
                </ButtonPage>
                <ButtonPage
                  type="button"
                  style={{ backgroundColor: "#68d69d" }}
                  onClick={handleChangePassword}
                >
                  Update
                </ButtonPage>
              </WrapperButtons>
            </PassWapper>
          </WrapForm>
        </WrapTable>
      </Content>
    </Background>
  );
};

export default ChangePassword;

const Wrap = styled.div`
  width: 60%;
  padding-top: 20px;
  border: 1px solid grey;
  box-shadow: 1px 1px 6px grey;
`;
const Background = styled.div`
  width: 100%;
  min-height: 712px;
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

const WrapTable = styled.div`
  display: flex;
  flex: 5;
  flex-flow: column;
  min-height: 700px;
  padding-top: 8px;
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

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
`;

const WrapForm = styled.form`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

const PassWapper = styled.div`
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

const Label = styled.label`
  min-width: 200px;
  font-size: 16px;
  font-weight: bolder;
  margin-top: 1%;
`;

const DivCustom = styled.div`
  width: 50%;
  min-height: 85px;
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

const InputCustom = styled(Input)`
  width: 100%;
`;

const InputWrapperCustom = styled(InputWrapper)`
  align-items: flex-start;
`;
