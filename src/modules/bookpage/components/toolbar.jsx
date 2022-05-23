import React from "react";
import styled from "styled-components";
import ToolBarItem from "./toolbaritem";

const ToolBar = (props) => {
  return (
    <Bar>
      <ToolBarItem icon="index" onShowIndex={props.onShowIndex} />
    </Bar>
  );
};

export default ToolBar;

const Bar = styled.ul`
  list-style: none;
  width: 4rem;
  height: 30rem;
  color: black;
  position: fixed;
  border: 1px solid rgba(0, 0, 0, 0.2);
  bottom: 5rem;
  right: 0;
`;
