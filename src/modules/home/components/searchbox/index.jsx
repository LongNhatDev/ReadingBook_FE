import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const SeachBox = () => {
  return (
    <SearchBar>
      <Icon />
      <Input type="text" placeholder="What do you looking for ... ? " />
    </SearchBar>
  );
};

export default SeachBox;

const SearchBar = styled.div`
  width: 350px;
  height: 45px;
  background-color: #ffffff;
  border-radius: 100px;
  margin: 0px 8px 0px 0px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  border: none !important;
  font-size: 16px;
  flex: 5;
  outline: none;
  border-radius: 0 100px 100px 0;
`;

const Icon = styled(FaSearch)`
  color: rgba(0, 0, 0, 0.247);
  font-size: 20px;
  flex: 1;
`;
