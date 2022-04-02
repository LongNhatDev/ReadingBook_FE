import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BackgroundCSS from "../components/background";
import Button from "../components/button";
import DivlogIn from "../components/divlogin";
import Form from "../components/form";
import Input from "../components/input";
import InputWrapper from "../components/inputwrapper";
import InvalidMessage from "../components/invalidmessage";
import Logo from "../components/logo";

const ResetPassword = () => {
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  let navigate = useNavigate();
  const handleClick = () => {
    let path = "/auth/login";
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
          <h1>Reset Password</h1>
          <InputWrapper>
            <Input
              type="text"
              placeholder="Enter Password"
              className={errorConfirmPassword ? "invalid" : ""}
              onChange={() => {
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
                <InvalidMessage>Please fill your new password</InvalidMessage>
              </div>
            )}
          </InputWrapper>
          <InputWrapper>
            <Input
              type="password"
              placeholder="Confirm Password"
              className={errorPassword ? "invalid" : ""}
              onChange={() => {
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
                <InvalidMessage>
                  Please confirm your new password
                </InvalidMessage>
              </div>
            )}
          </InputWrapper>
          <Button onClick={handleClick}>RESET</Button>
        </Form>
      </DivlogIn>
    </BackgroundCSS>
  );
};

export default ResetPassword;
