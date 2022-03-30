import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BackgroundCSS from "../components/background";
import Button from "../components/button";
import DivSignUp from "../components/divsignup";
import Form from "../components/form";
import Input from "../components/input";
import InputWrapper from "../components/inputwrapper";
import InvalidMessage from "../components/invalidmessage";
import SignUpWrapper from "../components/signupwrapper";

const Login = () => {
  const [errorFullname, setErrorFullName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(false);

  return (
    <BackgroundCSS>
      <DivSignUp>
        <TitleSignUp>
          <H1Css>Sign Up</H1Css>
        </TitleSignUp>
        <ContentSignUp>
          <InputWrapper>
            <Input
              type="text"
              placeholder="Enter FullName"
              className={errorFullname ? "invalid" : ""}
              onClick={() => {
                setErrorFullName(false);
              }}
              onBlur={(event) => {
                event.target.value.trim() === ""
                  ? setErrorFullName(true)
                  : setErrorFullName(false);
              }}
            />
            {errorFullname && (
              <div>
                <InvalidMessage>Please fill your fullname</InvalidMessage>
              </div>
            )}
          </InputWrapper>
          <InputWrapper>
            <Input
              type="text"
              placeholder="Enter Email"
              className={errorEmail ? "invalid" : ""}
              onClick={() => {
                setErrorEmail(false);
              }}
              onBlur={(event) => {
                event.target.value.trim() === ""
                  ? setErrorEmail(true)
                  : setErrorEmail(false);
              }}
            />
            {errorEmail && (
              <div>
                <InvalidMessage>Please fill your email</InvalidMessage>
              </div>
            )}
          </InputWrapper>
          <InputWrapper>
            <Input
              type="password"
              placeholder="Enter Password"
              className={errorPassword ? "invalid" : ""}
              onClick={() => {
                setErrorPassword(false);
              }}
              onBlur={(event) => {
                event.target.value.trim() === ""
                  ? setErrorPassword(true)
                  : setErrorPassword(false);
              }}
            />
            {errorPassword && (
              <div>
                <InvalidMessage>Please fill your password</InvalidMessage>
              </div>
            )}
          </InputWrapper>
          <InputWrapper>
            <Input
              type="password"
              placeholder="Confirm Password"
              className={errorConfirmPassword ? "invalid" : ""}
              onClick={() => {
                setErrorConfirmPassword(false);
              }}
              onBlur={(event) => {
                event.target.value.trim() === ""
                  ? setErrorConfirmPassword(true)
                  : setErrorConfirmPassword(false);
              }}
            />
            {errorConfirmPassword && (
              <div>
                <InvalidMessage>Please confirm your password</InvalidMessage>
              </div>
            )}
          </InputWrapper>
          <Button>CREATE ACCOUNT</Button>
          <SignUpWrapper>
            <Ptype>Already have an acount?</Ptype>
            <LinkSignUp to={"/auth/login"}>Log In</LinkSignUp>
          </SignUpWrapper>
        </ContentSignUp>
      </DivSignUp>
    </BackgroundCSS>
  );
};

export default Login;
const Ptype = styled.p`
  margin: 3px 5px 0 0;
`;

const LinkSignUp = styled(Link)`
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  :hover {
    color: green;
    text-decoration: underline;
  }
`;
const H1Css = styled.h1`
  color: white;
`;

const TitleSignUp = styled.div`
  background-color: #66d049;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const ContentSignUp = styled.div`
  width: 100%;
  flex: 3.5;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
`;
