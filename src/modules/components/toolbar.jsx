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
  height: 100vh;
  width: 4rem;
  background-color: black;
  position: fixed;
`;
