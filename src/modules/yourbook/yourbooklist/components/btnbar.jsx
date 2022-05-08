import React from "react";
import styled from "styled-components";
import { AiFillEdit, AiFillInfoCircle, AiTwotoneDelete } from "react-icons/ai";

const BtnBar = () => {
  return (
    <Bar>
      <span>
        <AiFillEdit />
      </span>
      <span>
        <AiFillInfoCircle />
      </span>
      <span>
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
  }

  & span:hover {
    color: blue;
  }
`;
