import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BackgroundCSS from "../components/background";
import Button from "../components/button";
import DivlogIn from "../components/divlogin";
import Form from "../components/form";
import Input from "../components/input";
import InputWrapper from "../components/inputwrapper";
import InvalidMessage from "../components/invalidmessage";
import Logo from "../components/logo";
import SignUpWrapper from "../components/signupwrapper";

const Login = () => {
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  return (
    <BackgroundCSS>
      <DivlogIn>
        <Logo>
          <p>Reading Book</p>
          <span>FREE BOOKS AND FREE YOUR MIND</span>
        </Logo>
        <Form>
          <h1>Login</h1>
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
          <LinkForgotPass to={"/auth/signup"}>Forgot password ?</LinkForgotPass>
          <Button>LOGIN</Button>
          <SignUpWrapper>
            <Ptype>Don't have an acount?</Ptype>
            <LinkSignUp to={"/auth/signup"}>Sign Up</LinkSignUp>
          </SignUpWrapper>
        </Form>
      </DivlogIn>
    </BackgroundCSS>
  );
};

export default Login;
const Ptype = styled.p`
  margin: 10px 5px 0 0;
`;

const LinkSignUp = styled(Link)`
  font-size: 18px;
  font-weight: bold;
  :hover {
    color: green;
    text-decoration: underline;
  }
`;

const LinkForgotPass = styled(Link)`
  :hover {
    color: blue;
    text-decoration: underline;
  }
`;
