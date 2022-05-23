import React from "react";
import styled from "styled-components";
import { AiFillEdit, AiTwotoneDelete } from "react-icons/ai";

const BtnBar = () => {
  return (
    <Bar>
      <span style={{ color: "yellow" }}>
        <AiFillEdit />
      </span>
      <span style={{ color: "red" }}>
        <AiTwotoneDelete />
      </span>
    </Bar>
  );
};

export default BtnBar;

const Bar = styled.div`
  & span {
    font-size: 2rem;
    padding: 0 1rem;
    cursor: pointer;
    display: inline-block;
  }

  & span:hover {
    transform: scale(1.3);
  }
`;
