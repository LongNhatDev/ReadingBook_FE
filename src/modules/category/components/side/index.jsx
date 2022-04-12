import React from "react";
import styled from "styled-components";
import CateBox from "./catebox";

const index = (props) => {
  return (
    <React.Fragment>
      <Side>
        <CateBox selected={props.selected} />
      </Side>
    </React.Fragment>
  );
};

export default index;

const Side = styled.div`
  width: 20rem;
  flex-shrink: 0;
`;
