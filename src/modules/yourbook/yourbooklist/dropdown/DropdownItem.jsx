import React from "react";
import styled from "styled-components";

const DropdownItem = (props) => {
  return <Item>{props.label}</Item>;
};

export default DropdownItem;

const Item = styled.li`
  width: 100%;
  padding: 5px 0;
  font-size: 1.6rem;
  list-style: none;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
