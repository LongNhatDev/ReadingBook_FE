import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  let navigate = useNavigate();
  const handleClick = () => {
    let path = "/auth/login";
    password !== confirmPassword
      ? setErrorConfirmPassword(true)
      : navigate(path);
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
              type="password"
              placeholder="Enter Password"
              className={errorPassword ? "invalid" : ""}
              onChange={(event) => {
                setErrorPassword(false);
                setPassword(event.target.value);
              }}
              onBlur={(event) => {
                setErrorPassword(password === "");
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
              className={errorConfirmPassword ? "invalid" : ""}
              onChange={(event) => {
                setErrorConfirmPassword(false);
                setConfirmPassword(event.target.value);
              }}
              onBlur={() => {
                setErrorConfirmPassword(confirmPassword === "");
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
          <Button
            onClick={password === "" || confirmPassword === "" || handleClick}
          >
            RESET
          </Button>
        </Form>
      </DivlogIn>
    </BackgroundCSS>
  );
};

export default ResetPassword;
