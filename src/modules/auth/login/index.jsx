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

  const [password, setpassword] = useState("");
  const [email, setEmail] = useState("");
  const handlerClick = () => {
    console.log("Click button");
  };
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
              onClick={(event) => {
                setErrorEmail(false);
                setEmail(event.target.value);
              }}
              onBlur={() => {
                setErrorEmail(email === "");
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
              onClick={(event) => {
                setErrorPassword(false);
                setpassword(event.target.value);
              }}
              onBlur={() => {
                setErrorPassword(password === "");
              }}
            />
            {errorPassword && (
              <div>
                <InvalidMessage>Please fill your password</InvalidMessage>
              </div>
            )}
          </InputWrapper>
          <LinkForgotPass to={"/auth/confirmOTP"}>
            Forgot password ?
          </LinkForgotPass>
          <Button onClick={password === "" || email === "" || handlerClick}>
            LOGIN
          </Button>
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
