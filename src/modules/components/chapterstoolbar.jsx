import React from "react";
import ChapterItem from "./chapteritem";
import styled from "styled-components";
import Modal from "./modal";

const ChaptersToolbar = (props) => {
  return (
    <Modal onHideIndex={props.onHideIndex}>
      <Index>
        <CloseButton onClick={props.onHideIndex}>X</CloseButton>
        <Title>Table of content</Title>
        <List>
          <ChapterItem title="Chapter 1: Return of King" />
          <ChapterItem title="Chapter 1: Return of King" />
          <ChapterItem title="Chapter 1: Return of King" />
          <ChapterItem title="Chapter 1: Return of King" />
          <ChapterItem title="Chapter 1: Return of King" />
          <ChapterItem title="Chapter 1: Return of King" />
          <ChapterItem title="Chapter 1: Return of King" />
          <ChapterItem title="Chapter 1: Return of King" />
          <ChapterItem title="Chapter 1: Return of King" />
          <ChapterItem title="Chapter 1: Return of King" />
          <ChapterItem title="Chapter 1: Return of King" />
          <ChapterItem title="Chapter 1: Return of King" />
          <ChapterItem title="Chapter 1: Return of King" />
          <ChapterItem title="Chapter 1: Return of King" />
        </List>
      </Index>
    </Modal>
  );
};

export default ChaptersToolbar;

const Index = styled.div`
  width: 400px;
  height: 70vh;
  margin: 0 auto;
  border: 1px solid black;
  font-size: 1.6rem;
  padding: 1rem 1rem;
  position: relative;
`;

const List = styled.div`
  height: 80%;
  overflow-y: scroll;
`;

const Title = styled.h2`
  margin-bottom: 2rem;
  text-align: center;
  font-weight: bold;
`;

const CloseButton = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
  width: 2rem;
  height: 2rem;
  text-align: center;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;
