import React from "react";
import styled from "styled-components";
import CateBox from "./catebox";

const index = (props) => {
  return (
    <Side>
      <CateBox selected={props.selected} />
    </Side>
  );
};

export default index;

const Side = styled.div`
  width: 15rem;
  height: 100vh;
  margin-top: 2.5rem;
  flex-shrink: 0;
  border-right: 1px solid #f2f2f2;
  box-shadow: 0 -30px 0 0 rgba(0, 0, 0, 0.1), 0 100px 0 0 rgba(0, 0, 0, 0.1);
  background-color: rgba(0, 0, 0, 0.1);
`;
