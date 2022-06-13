import React from "react";
import { useState } from "react";
import Button from "../../components/button";
import InvalidMessage from "../../auth/components/invalidmessage";
import Input from "../../components/input";
import InputWrapper from "../../auth/components/inputwrapper";
import styled from "styled-components";
import {
  showErrorToaster,
  showSuccessToaster,
} from "../../../components/Toaster";
import Modal from "../../components/modal";
import { BaseURL } from "../../AxiosInstance";
import { useNavigate } from "react-router-dom";
const token = localStorage.getItem("token");

const ChangePassword = (props) => {
  let navigate = useNavigate();
  const [currentPassword, setCurrentPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [er, setEr] = useState({
    currentPassword: false,
    password: false,
    confirmPassword: false,
  });

  const { onClose } = props;
  const handleSubmit = async (e) => {
    e.preventDefault();
    setEr({
      ...er,
      currentPassword: currentPassword === "",
      password: password === "",
      confirmPassword: confirmPassword === "",
    });
    const sendData = {
      newPassword: password,
      oldPassword: currentPassword,
    };
    console.log(currentPassword);
    console.log(password);
    try {
      if (currentPassword === "") {
        setEr({ ...er, currentPassword: true });
      }
      if (password === "") {
        setEr({ ...er, password: true });
      }
      if (confirmPassword === "") {
        setEr({ ...er, confirmPassword: true });
      }
      if (password !== confirmPassword) {
        showErrorToaster("Something Wrong, Check again !");
      } else {
        await BaseURL.put("api/users/change-password", sendData, {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        });
        showSuccessToaster("Update Successfully !");
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
      showErrorToaster("Error!");
    }
  };

  return (
    <Modal onHideIndex={props.onClose}>
      <Container>
        <Text>Please Enter Your New Password:</Text>
        <WrapForm>
          <PassWapper>
            <InputWrapper style={{ flexFlow: "wrap" }}>
              <label htmlFor="" style={{ margin: "auto", fontWeight: "600" }}>
                Old Password
              </label>
              <Input
                type="text"
                placeholder="Enter Old Password"
                className={er.currentPassword ? "invalid" : ""}
                onChange={(e) => {
                  setCurrentPassword(e.target.value);
                  setEr({ ...er, currentPassword: false });
                }}
                onBlur={() => {
                  setEr({ ...er, currentPassword: currentPassword === "" });
                }}
              />
              {er.currentPassword && (
                <div>
                  <InvalidNoti
                    style={{
                      marginLeft: "26%",
                      marginRight: "-26%",
                      marginBottom: "0px",
                    }}
                  >
                    Please fill current password
                  </InvalidNoti>
                </div>
              )}
            </InputWrapper>
            <InputWrapper style={{ flexFlow: "wrap" }}>
              <label htmlFor="" style={{ margin: "auto", fontWeight: "600" }}>
                New Password
              </label>
              <Input
                type="text"
                placeholder="Enter New Password"
                className={er.password ? "invalid" : ""}
                onChange={(e) => {
                  setEr({ ...er, password: false });
                  setPassword(e.target.value);
                }}
                onBlur={() => {
                  setEr({ ...er, password: password === "" });
                }}
              />{" "}
              {er.password && (
                <div>
                  <InvalidNoti
                    style={{
                      marginLeft: "24%",
                      marginRight: "-24%",
                      marginBottom: "0px",
                    }}
                  >
                    Please fill new password
                  </InvalidNoti>
                </div>
              )}
            </InputWrapper>
            <InputWrapper style={{ flexFlow: "wrap" }}>
              <label htmlFor="" style={{ margin: "auto", fontWeight: "600" }}>
                Confirm Password
              </label>
              <Input
                type="text"
                placeholder="Enter Confirm Password"
                className={er.confirmPassword ? "invalid" : ""}
                onChange={(e) => {
                  setEr({ ...er, confirmPassword: false });
                  setConfirmPassword(e.target.value);
                }}
                onBlur={() => {
                  setEr({ ...er, confirmPassword: confirmPassword === "" });
                }}
              />{" "}
              {er.confirmPassword && (
                <div>
                  <InvalidNoti
                    style={{
                      marginLeft: "27%",
                      marginRight: "-27%",
                      marginBottom: "0px",
                    }}
                  >
                    Please fill confirm password
                  </InvalidNoti>
                </div>
              )}
            </InputWrapper>
          </PassWapper>
          <WrapButton>
            <ButtonCancel onClick={onClose}>Cancel</ButtonCancel>
            <Button onClick={handleSubmit}>Save</Button>
          </WrapButton>
        </WrapForm>
      </Container>
    </Modal>
  );
};
const ButtonCancel = styled(Button)`
  background-color: red;
`;
const Text = styled.h3`
  text-align: center;
  margin-top: 10px;
`;
const Container = styled.div`
  width: 65rem;
  height: 66vh;
  padding: 7rem;
`;

const WrapForm = styled.form`
  margin-top: 6vh;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

const PassWapper = styled.div`
  width: 100%;
  display: flex;

  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`;

const WrapButton = styled.div`
  margin: 20px 0 40px 0;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
`;

const InvalidNoti = styled(InvalidMessage)`
  margin-bottom: 10px;
`;
export default ChangePassword;
