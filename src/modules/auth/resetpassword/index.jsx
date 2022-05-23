import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BackgroundCSS from "../components/background";
import Button from "../../components/button";
import DivlogIn from "../components/divlogin";
import Form from "../components/form";
import Input from "../../components/input";
import InputWrapper from "../components/inputwrapper";
import InvalidMessage from "../components/invalidmessage";
import Logo from "../components/logo";
import { BaseURL } from "../../AxiosInstance";
import {
  showErrorToaster,
  showSuccessToaster,
} from "../../../components/Toaster";

const ResetPassword = () => {
  const [value, setValue] = useState({ password: "", confirmPassword: "" });
  const [error, setError] = useState({
    password: false,
    confirmPassword: false,
  });

  const location = useLocation();

  let navigate = useNavigate();
  const handleReset = async () => {
    try {
      let path = "/";
      if (value.password === "") {
        setError({ ...error, password: true });
      }
      if (
        value.password !== value.confirmPassword ||
        value.confirmPassword === ""
      ) {
        setError({ ...error, confirmPassword: true });
      }

      const inforRequest = {
        email: location.state.email,
        password: value.confirmPassword,
      };
      const authorization = {
        headers: { Authorization: location.state.token },
      };
      const respone = await BaseURL.patch(
        "/api/auth/reset_password",
        inforRequest,
        authorization
      );
      if (respone !== null || respone !== undefined) {
        showSuccessToaster("Sucessfully!");
        navigate(path);
      } else {
        showErrorToaster("Server not respone !");
      }
    } catch (error) {
      showErrorToaster("Something Wrong. Please try again!");
    }
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
              className={error.password ? "invalid" : ""}
              onChange={(event) => {
                setError({ ...error, password: false });
                setValue({ ...value, password: event.target.value });
              }}
              onBlur={() => {
                setError({ ...error, password: value.password === "" });
              }}
            />
            {error.password && (
              <div>
                <InvalidMessage>Please fill your new password</InvalidMessage>
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
                setValue({ ...value, confirmPassword: event.target.value });
              }}
              onBlur={() => {
                setError({
                  ...error,
                  confirmPassword:
                    value.password === "" ||
                    value.password !== value.confirmPassword,
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
          <Button onClick={handleReset}>RESET</Button>
        </Form>
      </DivlogIn>
    </BackgroundCSS>
  );
};

export default ResetPassword;
