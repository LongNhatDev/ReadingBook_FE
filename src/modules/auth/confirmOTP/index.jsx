import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import BackgroundCSS from "../components/background";
import DivlogIn from "../components/divlogin";
import Input from "../../components/input"
import InputWrapper from "../components/inputwrapper";
import InvalidMessage from "../components/invalidmessage";
import Logo from "../components/logo";
import SignUpWrapper from "../components/signupwrapper";
import Button from "../../components/button";

const ConfirmOTP = () => {
  const [errorOTP, setErrorOTP] = useState(false);

  const [OTP, setOTP] = useState("");

  let navigate = useNavigate();
  const handleClick = () => {
    let path = "/auth/resetpassword";
    if (OTP === "") {
      setErrorOTP(true);
    } else {
      navigate(path);
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
            <Button onClick={handleClick}>CONFIRM</Button>
          </Content>
          <SignUpWrapper>
            <Ptype>Didn't receive OTP code?</Ptype>
            <LinkResend to={"/auth/confirmotp"}>Resend</LinkResend>
          </SignUpWrapper>
        </FormOTP>
      </DivlogIn>
    </BackgroundCSS>
  );
};

export default ConfirmOTP;

const Ptype = styled.p`
  margin: 10px 5px 0 0;
`;
const LinkResend = styled(Link)`
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  color: #444444;
  margin-top: 10px;
  :hover {
    color: #68d69d;
  }
`;
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
  justify-content: space-evenly;
  align-items: center;

  & h1 {
    color: #68d69d;
    padding-bottom: 15px;
    font-weight: bold;
  }
`;
