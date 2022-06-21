import { Alert } from "@blueprintjs/core";
import React from "react";
import styled from "styled-components";

const ConfirmBox = (props) => {
  return (
    <AlertCustom
      className="alert"
      isOpen={props.isOpen}
      cancelButtonText="NO"
      confirmButtonText="YES"
      onCancel={props.onCancel}
      onConfirm={props.onConfirm}
    >
      <AlertHeader>{props.header}</AlertHeader>
      <AlertMessage>{props.message}</AlertMessage>
    </AlertCustom>
  );
};

export default ConfirmBox;

const AlertCustom = styled(Alert)`
  width: 80rem;
  height: 20rem;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: #68d69d;
`;

const AlertHeader = styled.h4`
  font-size: 2.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  color: white;
  text-shadow: 2px 2px 6px #401d83;
  margin-bottom: 1.5rem;
  button {
    color: red;
  }
`;

const AlertMessage = styled.p`
  font-size: 2rem;
  display: flex;
  justify-content: center;
`;
