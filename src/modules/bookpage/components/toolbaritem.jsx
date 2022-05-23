import React from "react";
import styled from "styled-components";
import { IoListSharp } from "react-icons/io5";

const ToolBarItem = (props) => {
  return (
    <Item onClick={props.onShowIndex}>
      {props.icon === "index" && <IoListSharp />}
    </Item>
  );
};

export default ToolBarItem;

const Item = styled.li`
  width: 100%;
  height: 3rem;
  color: black;
  font-size: 2rem;
  text-align: center;
  padding: 3px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
