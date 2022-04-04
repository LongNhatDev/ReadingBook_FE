import React from "react";
import styled from "styled-components";

const BlackButton = styled.button`
  height: 2rem;
  margin: 3rem auto;
  background-color: transparent;
  border: 1px solid black;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    color: white;
    background-color: black;
  }
  padding-left: 20px;
  padding-right 20px;
  margin-left: 20px;
  font-weight: bold;
`;

export default BlackButton;
