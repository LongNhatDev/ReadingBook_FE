import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ChapterItem = (props) => {
  let navigator = useNavigate();
  const readingHandler = () => {
    const path = `/books/${props.bookId}/${props.chapter._id}`;
    navigator(path);
  };
  return (
    <Item onClick={readingHandler}>
      Chapter {props.index}: {props.chapter.title}
    </Item>
  );
};

export default ChapterItem;

const Item = styled.div`
  width: 90%;
  height: 4rem;
  line-height: 3rem;
  margin: 0 auto;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  overflow: hidden;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  word-break: break-word;
`;
