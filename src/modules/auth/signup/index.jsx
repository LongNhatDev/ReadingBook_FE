import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import BackgroundCSS from "../components/background";
import Button from "../components/button";
import DivSignUp from "../components/divsignup";
import Input from "../components/input";
import InputWrapper from "../components/inputwrapper";
import InvalidMessage from "../components/invalidmessage";
import SignUpWrapper from "../components/signupwrapper";

const Login = () => {
  const [errorFullname, setErrorFullName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(false);

  let password = "";
  let confirmPassword = "";

  let navigate = useNavigate();
  const handleClick = () => {
    let path = "/auth/login";
    navigate(path);
  };

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
                if (event.target.value.trim() === "") {
                  setErrorPassword(true);
                } else {
                  setErrorPassword(false);
                  password = event.target.value.trim();
                }
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
                confirmPassword = event.target.value.trim();
                setErrorConfirmPassword(
                  confirmPassword === "" || confirmPassword !== password
                );
              }}
            />
            {errorConfirmPassword && (
              <div>
                <InvalidMessage>
                  The password confirmation does not match
                </InvalidMessage>
              </div>
            )}
          </InputWrapper>

          <Button onClick={handleClick}>CREATE ACCOUNT</Button>

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
  background-color: #68d69d;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  box-shadow: 2px 2px 6px grey;
`;
const ContentSignUp = styled.div`
  width: 100%;
  flex: 3.5;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
`;
