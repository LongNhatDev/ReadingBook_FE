import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BackgroundCSS from "../components/background";
import Button from "../../components/button";
import DivlogIn from "../components/divlogin";
import Form from "../components/form";
import Input from "../../components/input";
import InputWrapper from "../components/inputwrapper";
import InvalidMessage from "../components/invalidmessage";
import Logo from "../components/logo";
import SignUpWrapper from "../components/signupwrapper";
import {
  showErrorToaster,
  showSuccessToaster,
} from "../../../components/Toaster";
import { BaseURL } from "../../AxiosInstance";

const SignIn = () => {
  const [error, setError] = useState({ email: false, password: false });
  const [value, setValue] = useState({ email: "", password: "" });

  let navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      const inforRequestToSignIn = {
        email: value.email,
        password: value.password,
      };
      let status = await BaseURL.post(
        "/api/auth/sign_in",
        inforRequestToSignIn
      );

      if (status !== null || status !== undefined) {
        let path = "/home";
        navigate(path);
        showSuccessToaster("Sign In Successfully");
      } else showErrorToaster("Server not responed");
    } catch (error) {
      showErrorToaster("Wrong email or password. Please check!");
    }
  };

  const handleForgotPassword = () => {
    let path = "auth/confirmotp";
    navigate(path);
  };

  const handleSignUp = () => {
    let path = "auth/signup";
    navigate(path);
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
              className={error.email ? "invalid" : ""}
              onClick={() => {
                setError({ ...error, email: false });
              }}
              onBlur={(event) => {
                setError({ ...error, email: event.target.value.trim() === "" });
                setValue({ ...value, email: event.target.value.trim() });
              }}
            />
            {error.email && (
              <div>
                <InvalidMessage>Please fill your email</InvalidMessage>
              </div>
            )}
          </InputWrapper>
          <InputWrapper>
            <Input
              type="password"
              placeholder="Enter Password"
              className={error.password ? "invalid" : ""}
              onClick={() => {
                setError({ ...error, password: false });
              }}
              onBlur={(event) => {
                setError({
                  ...error,
                  password: event.target.value.trim() === "",
                });
                setValue({ ...value, password: event.target.value.trim() });
              }}
            />
            {error.password && (
              <div>
                <InvalidMessage>Please fill your password</InvalidMessage>
              </div>
            )}
          </InputWrapper>

          <ForgotPass onClick={handleForgotPassword}>
            Forgot Password?
          </ForgotPass>
          <Button onClick={handleSignIn}>Sign In</Button>
          <SignUpWrapper>
            <Ptype>Don't have an acount?</Ptype>
            <SignUpLink onClick={handleSignUp}>Sign Up</SignUpLink>
          </SignUpWrapper>
        </Form>
      </DivlogIn>
    </BackgroundCSS>
  );
};

export default SignIn;

const Ptype = styled.p`
  margin: 10px 5px 0 0;
`;

const ForgotPass = styled.p`
  :hover {
    color: green;
    cursor: pointer;
  }
`;

const SignUpLink = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-top: 16px;
  :hover {
    color: green;
    cursor: pointer;
  }
`;
