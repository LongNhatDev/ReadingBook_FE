import React, { useContext } from "react";
import styled from "styled-components";
import MainContext from "../../../../store/main-context";
import DropdownItem from "./dropdownitem";

const Dropdown = (props) => {
  const mainctx = useContext(MainContext);
  return (
    <Dropdowns>
      <DropdownSelect>
        <DropdownSelected>{props.label}</DropdownSelected>
      </DropdownSelect>
      <DropdownList>
        {mainctx.categories.map((category) => (
          <DropdownItem key={category.cateId} url={category.cateLink}>
            <DropdownText>{category.cateContent}</DropdownText>
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
  width: 50rem;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  display: none;
  flex-direction: row;
  flex-wrap: wrap;
  ${Dropdowns}:hover & {
    display: flex;
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

const DropdownText = styled.span`
  color: white;
  text-decoration: none;
  text-align: center;
`;
