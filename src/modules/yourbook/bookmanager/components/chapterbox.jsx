import React from "react";
import styled from "styled-components";
import ChapterItem from "./chapteritem";

const ChapterBox = (props) => {
  return (
    <Box>
      {props.chapters.map((chapter, index) => (
        <ChapterItem
          bookId={props.bookId}
          key={chapter._id}
          chapter={chapter}
          index={index + 1}
          onUpdate={props.onUpdate}
        />
      ))}
    </Box>
  );
};

export default ChapterBox;

const Box = styled.ul`
  margin-top: 20px;
  list-style: none;
  padding: 0 20px;
  height: 18rem;
  overflow-y: scroll;
`;
