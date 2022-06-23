import React, { useContext, useState } from "react";
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
  showInstructionToaster,
  showSuccessToaster,
} from "../../../components/Toaster";
import { BaseURL } from "../../AxiosInstance";
import { authentication } from "../../../authProvider";

const SignIn = () => {
  const [error, setError] = useState({ email: false, password: false });
  const [value, setValue] = useState({ email: "", password: "" });
  const auth = useContext(authentication);

  let navigate = useNavigate();

  const emailField = React.useRef(null);
  const passwordField = React.useRef(null);

  React.useEffect(() => {
    let interval = setInterval(() => {
      if (emailField.current) {
        setValue({
          ...value,
          email: emailField.current.value,
          password: passwordField.current.value,
        });
        clearInterval(interval);
      }
    }, 100);
  });

  const handleSignIn = async () => {
    try {
      const inforRequestToSignIn = {
        email: value.email,
        password: value.password,
      };
      let respone = await BaseURL.post(
        "/api/auth/sign_in",
        inforRequestToSignIn
      );

      if (respone !== null || respone !== undefined) {
        let path = "/home";

        respone.data.roles.forEach((item) => {
          if (item === "admin") {
            path = "/admin";
          }
          if (item === "mod") {
            path = "/staff/bookscensored";
          }
        });

        auth.setAuthInfo(
          respone.data.token,
          respone.data.avatar,
          respone.data.fullName
        );
        localStorage.setItem("accessToken", respone.data.token);
        localStorage.setItem("avatar", respone.data.avatar);
        localStorage.setItem("fullName", respone.data.fullName);
        navigate(path);
        showSuccessToaster("Sign In Successfully");
      } else showErrorToaster("Server not responed");
    } catch (error) {
      showErrorToaster("Wrong email or password. Please check!");
    }
  };

  const handleForgotPassword = async () => {
    try {
      const requestForgotPassword = {
        email: value.email,
      };
      const respone = await BaseURL.post(
        "/api/auth/forgot_password",
        requestForgotPassword
      );
      if (respone !== null || respone !== undefined) {
        showInstructionToaster("Please check your email to get OTP code !");
        let path = "auth/confirmotp";
        navigate(path, { state: { email: value.email } });
      } else showErrorToaster("Server not respone");
    } catch (error) {
      showErrorToaster("Error: something occurs when clicking!");
    }
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
              ref={emailField}
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
              ref={passwordField}
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
