import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Dropdown = (props) => {
  return (
    <Dropdowns>
      <DropdownSelect>
        <DropdownSelected>{props.label}</DropdownSelected>
      </DropdownSelect>
      <DropdownList>
        {props.categories.map((category) => (
          <DropdownItem key={category.id}>
            <DropdownText to={`/${category.url}`}>
              {category.content}
            </DropdownText>
          </DropdownItem>
        ))}
      </DropdownList>
    </Dropdowns>
  );
};

export default Dropdown;

const Dropdowns = styled.div`
  width: 100%;
  max-width: 47.5rem;
  position: relative;
  font-size: 16px;
  font-weight: bold;
  border-radius: 4px;
  transition: all 0.3s ease;
  
`;

const DropdownSelect = styled.div`
  width: 100%;
  height: 100%;
  max-height: 3rem;
  padding: 3rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  border-radius: inherit;
`;

const DropdownSelected = styled.span`
  font-size: 25px;
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  display: none;
  ${Dropdowns}:hover & {
    display: block;
    z-index: 99;
  }

  &:before {
    content: "";
    height: 2.5rem;
    position: absolute;
    left: 0;
    right: 0;
    line-height: 1px;
    background-color: transparent;
    transform: translateY(-100%);
  }
`;

const DropdownItem = styled.li`
  width: 100%;
  height: 100%;
  max-height: 3rem;
  padding: 3rem 1.5rem;
  background-color: rgb(37 38 47);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s linear;
  &:first-child {
    border-radius: 4px 4px 0 0;
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
  &:last-child {
    border-radius: 0 0 4px 4px;
  }
  &:hover {
    background-color: rgb(59 102 245);
  }
`;

const DropdownText = styled(Link)`
  color: white;
  text-decoration: none;
  text-align: center;
`;
