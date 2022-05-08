import React from "react";
import styled from "styled-components";

const ChapterItem = (props) => {
  return <Item>{props.title}</Item>;
};

export default ChapterItem;

const Item = styled.div`
  width: 90%;
  height: 4rem;
  margin: 0 auto;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  overflow: hidden;
`;
