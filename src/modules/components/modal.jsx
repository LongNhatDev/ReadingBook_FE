import React from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";

const Overlays = (props) => {
  return <BlackScreen onClick={props.onHideIndex} />;
};

const ModalOverlay = (props) => {
  return <Container>{props.children}</Container>;
};

const Modal = (props) => {
  const portalElement = document.getElementById("overlays");
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Overlays onHideIndex={props.onHideIndex} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Modal;

const BlackScreen = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 10;
  cursor: pointer;
`;

const Container = styled.div`
  z-index: 20;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
`;
