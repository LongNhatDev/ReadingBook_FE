import React from "react";
import { useRef } from "react";
import PasswordField from "../components/passwordField";
import Button from "../components/button";
import styled from "styled-components";
import { showErrorToaster, showSuccessToaster } from "../../components/Toaster";
import Modal from "../components/modal";

function ChangePassword(props) {
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      if (passwordRef.current.value !== confirmPasswordRef.current.value) {
        showErrorToaster("Something Wrong, Check again !");
      }
      showSuccessToaster("Update Successfully !");

      console.log(passwordRef);
      
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Modal onHideIndex={props.onClose}>
      <Container>
        <Text>Please Enter Your New Password:</Text>
        <WrapForm>
          <PassWapper>
            <PasswordField {...{ passwordRef }} />

            <PasswordField
              {...{
                passwordRef: confirmPasswordRef,
                id: "confirmPassword",
                label: "Confirm Password",
              }}
            />
          </PassWapper>

          <Button onClick={handleSubmit}>Save</Button>
        </WrapForm>
      </Container>
    </Modal>
  );
}

const Text = styled.h3`
  margin: 2rem 7.5rem 0rem;
`;
const Container = styled.div`
  width: 45rem;
  height: 50vh;
  padding: 2rem;
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
export default ChangePassword;
