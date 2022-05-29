import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BackgroundCSS from "../components/background";
import Button from "../../components/button";
import DivSignUp from "../components/divsignup";
import Input from "../../components/input";
import InputWrapper from "../components/inputwrapper";
import InvalidMessage from "../components/invalidmessage";
import SignUpWrapper from "../components/signupwrapper";
import {
  showErrorToaster,
  showSuccessToaster,
} from "../../../components/Toaster";
import { BaseURL } from "../../AxiosInstance";

const Login = () => {
  let navigate = useNavigate();

  const [error, setError] = useState({
    fullname: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  const [value, setValue] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSignUp = async () => {
    try {
      let path = "/";

      if (value.fullname === "") {
        setError({ ...error, fullname: true });
      }
      if (value.email === "") {
        setError({ ...error, email: true });
      }
      if (value.password === "") {
        setError({ ...error, password: true });
      }
      if (
        value.confirmPassword === "" ||
        value.confirmPassword !== value.password
      ) {
        setError({ ...error, confirmPassword: true });
      }
      const requestSignUpInfor = {
        email: value.email,
        password: value.password,
        fullName: value.fullname,
      };
      const responeOfRequest = await BaseURL.post(
        "/api/auth/sign_up",
        requestSignUpInfor
      );
      if (responeOfRequest !== null || responeOfRequest !== undefined) {
        showSuccessToaster("You have signed up successfully.");
        navigate(path);
      } else showErrorToaster("Server not responed");
    } catch (error) {
      showErrorToaster("This email is already in use by another account.");
    }
  };

  const handleSignIn = () => {
    let path = "/";
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
              className={error.fullname ? "invalid" : ""}
              onChange={(event) => {
                setError({ ...error, fullname: false });
                setValue({ ...value, fullname: event.target.value.trim() });
              }}
              onBlur={() => {
                setError({ ...error, fullname: value.fullname === "" });
              }}
            />
            {error.fullname && (
              <div>
                <InvalidMessage>Please fill your fullname</InvalidMessage>
              </div>
            )}
          </InputWrapper>
          <InputWrapper>
            <Input
              type="text"
              placeholder="Enter Email"
              className={error.email ? "invalid" : ""}
              onChange={(event) => {
                setError({ ...error, email: false });
                setValue({ ...value, email: event.target.value.trim() });
              }}
              onBlur={() => {
                setError({ ...error, email: value.email === "" });
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
              onChange={(event) => {
                setError({ ...error, password: false });
                setValue({ ...value, password: event.target.value.trim() });
              }}
              onBlur={() => {
                setError({ ...error, password: value.password === "" });
              }}
            />
            {error.password && (
              <div>
                <InvalidMessage>Please fill your password</InvalidMessage>
              </div>
            )}
          </InputWrapper>
          <InputWrapper>
            <Input
              type="password"
              placeholder="Confirm Password"
              className={error.confirmPassword ? "invalid" : ""}
              onChange={(event) => {
                setError({ ...error, confirmPassword: false });
                setValue({
                  ...value,
                  confirmPassword: event.target.value.trim(),
                });
              }}
              onBlur={() => {
                setError({
                  ...error,
                  confirmPassword:
                    value.confirmPassword === "" ||
                    value.confirmPassword !== value.password,
                });
              }}
            />
            {error.confirmPassword && (
              <div>
                <InvalidMessage>
                  The password confirmation does not match
                </InvalidMessage>
              </div>
            )}
          </InputWrapper>
          <Button onClick={handleSignUp}>Sign Up</Button>
          <SignUpWrapper>
            <Ptype>Already have an acount?</Ptype>
            <LinkSignIn onClick={handleSignIn}>Sign In</LinkSignIn>
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
const LinkSignIn = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-top: 12px;
  text-decoration: none;
  :hover {
    color: green;
  }
`;
const H1Css = styled.h1`
  color: white;
`;
const TitleSignUp = styled.div`
  background-image: linear-gradient(
    to right,
    #051937,
    #004468,
    #00748c,
    #00a69d,
    #68d69d
  );
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
