import React from "react";
import styled from "styled-components";
import DropdownItem from "./DropdownItem";

const Dropdown = () => {
  return (
    <Select>
      <Threedot>. . .</Threedot>
      <List>
        <DropdownItem label="Edit" />
        <DropdownItem label="Delete" />
        <DropdownItem label="Detail" />
      </List>
    </Select>
  );
};

export default Dropdown;

const Select = styled.div`
  text-align: center;
  width: 8rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
`;

const Threedot = styled.div`
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.3);
  width: 4rem;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const List = styled.ul`
  position: absolute;
  width: 100%;
  padding: 5px 0;
  box-shadow: 0 3px 10px 5px rgba(0, 0, 0, 0.1);
  margin: 5px auto;
  top: 100%;
  left: 0;
  background-color: white;
  display: none;

  &:before {
    content: "";
    height: 1rem;
    position: absolute;
    left: 0;
    right: 0;
    line-height: 1px;
    background-color: transparent;
    transform: translateY(-100%);
  }

  ${Select}:hover & {
    display: block;
    z-index: 99;
  }
`;
