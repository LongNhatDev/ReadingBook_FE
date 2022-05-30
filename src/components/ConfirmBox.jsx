import { Alert } from "@blueprintjs/core";
import React from "react";
import styled from "styled-components";

const ConfirmBox = (props) => {
  return (
    <AlertCustom
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
`;

const AlertHeader = styled.h4`
  font-size: 2.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  color: #00a69d;
  margin-bottom: 1.5rem;
`;

const AlertMessage = styled.p`
  font-size: 2rem;
  display: flex;
  justify-content: center;
`;
