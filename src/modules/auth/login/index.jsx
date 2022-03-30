import React, { useState } from "react";
import BackgroundCSS from "./components/background.jsx";
import Button from "./components/button.jsx";
import DivlogIn from "./components/divlogin";
import Form from "./components/form.jsx";
import Input from "./components/input.jsx";
import InputWrapper from "./components/inputwrapper.jsx";
import InvalidMessage from "./components/invalidmessage.jsx";
import Logo from "./components/logo.jsx";

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

          <a href=""> Forgot password ?</a>
          <Button>LOGIN</Button>
        </Form>
      </DivlogIn>
    </BackgroundCSS>
  );
};

export default Login;
