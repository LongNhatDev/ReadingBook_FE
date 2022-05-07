import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const DropdownItem = (props) => {
  let navigation = useNavigate();
  const pageHandler = () => {
    navigation(props.url);
  };
  return <Item onClick={pageHandler}>{props.children}</Item>;
};

export default DropdownItem;

const Item = styled.li`
  width: 25%;
  height: 100%;
  max-height: 3rem;
  padding: 3rem 1.5rem;
  border-radius: 1rem;
  background-color: rgb(37 38 47);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s linear;
  &:first-child {
    position: relative;
  }
  &:first-child:before {
    content: "";
    position: absolute;
    top: 0;
    left: 3rem;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid rgb(37 38 47);
    transform: translateY(-100%);
    transition: border-color 0.2s linear;
  }
  &:hover:before {
    border-bottom-color: rgb(59 102 245);
  }
  &:hover {
    background-color: rgb(59 102 245);
  }
`;
