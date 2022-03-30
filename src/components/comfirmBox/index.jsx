import * as React from "react";
import styled from "styled-components";
import StyledAlert from "./styles";

const ConfirmBox = (props) => {
  return (
    <StyledAlert
      isOpen={isOpen}
      cancelButtonText={cancelButtonCaption || t("no")}
      confirmButtonText={confirmButtonCaption || t("yes")}
      canOutsideClickCancel={true}
      canEscapeKeyCancel={true}
      onCancel={onCancel}
      onConfirm={onConfirm}
    >
      <AlertHeader>{header || t("confirmation")}</AlertHeader>
      <AlertMessage>{message}</AlertMessage>
    </StyledAlert>
  );
};

const StyledAlert = styled(Alert)`
  background-color: white;
  min-width: 40rem;
  min-height: 12rem;
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  .bp3-alert-body {
    width: 100%;
  }
  .bp3-alert-contents: {
    justify-content: flex-start;
  }
  && .bp3-alert-footer {
    width: 100%;
    flex-direction: row;
    justify-content: flex-end;
    button {
      border-radius: 0.3rem;
      min-width: 10rem;
      min-height: 3.2rem;
      padding: 0.5rem 0;
      font-family: "Roboto";
      box-shadow: none;
      background-image: none;
      outline: none;
    }
    button:last-child {
      border: 0.1rem solid lightGray;
      color: black;
    }
    button:first-child {
      background-color: primary;
      color: white;
    }
    button:hover:not(:disabled),
    button:active:not(:disabled) {
      filter: ${"brightness(1.015)"};
      box-shadow: 0 0.5rem 1rem 0.2rem rgba(0, 0, 0, 0.1);
      cursor: pointer;
    }
  }
`;

export default ConfirmBox;
