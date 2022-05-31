import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import BackgroundCSS from "../components/background";
import DivlogIn from "../components/divlogin";
import Input from "../../components/input";
import InputWrapper from "../components/inputwrapper";
import InvalidMessage from "../components/invalidmessage";
import Logo from "../components/logo";
import SignUpWrapper from "../components/signupwrapper";
import Button from "../../components/button";
import { BaseURL } from "../../AxiosInstance";
import {
  showErrorToaster,
  showSuccessToaster,
} from "../../../components/Toaster";

const ConfirmOTP = () => {
  const location = useLocation();

  const [errorOTP, setErrorOTP] = useState(false);

  const [OTP, setOTP] = useState("");

  let navigate = useNavigate();

  const handleConfirm = async () => {
    try {
      if (OTP === "") {
        setErrorOTP(true);
      }
      const requestInfor = {
        email: location.state.email,
        resetPasswordCode: OTP,
      };
      const respone = await BaseURL.post(
        "/api/auth/verify_reset_password_code",
        requestInfor
      );


      if (respone !== null || respone !== undefined) {
        showSuccessToaster("Sucessfully!");
        let path = "/auth/resetpassword";
        navigate(path, {
          state: { email: location.state.email, token: respone.data.token},
        });
      } else {
        showErrorToaster("Server not respone !");
      }
    } catch (error) {
      showErrorToaster("Wrong OTP. Please try again!");
    }
  };



  return (
    <BackgroundCSS>
      <DivlogIn>
        <Logo>
          <p>Reading Book</p>
          <span>FREE BOOKS AND FREE YOUR MIND</span>
        </Logo>
        <FormOTP>
          <h1>One Time Password</h1>
          <Content>
            <InputWrapper>
              <Input
                type="text"
                placeholder="Enter OTP"
                className={errorOTP ? "invalid" : ""}
                onChange={(event) => {
                  setErrorOTP(false);
                  setOTP(event.target.value);
                }}
                onBlur={() => {
                  setErrorOTP(OTP === "");
                }}
              />
              {errorOTP && (
                <div>
                  <InvalidMessage>Please fill your OTP code</InvalidMessage>
                </div>
              )}
            </InputWrapper>
            <Button onClick={handleConfirm}>CONFIRM</Button>
          </Content>
        </FormOTP>
      </DivlogIn>
    </BackgroundCSS>
  );
};

export default ConfirmOTP;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`;
const FormOTP = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;

  & h1 {
    color: #68d69d;
    padding-bottom: 15px;
    font-weight: bold;
  }
`;
