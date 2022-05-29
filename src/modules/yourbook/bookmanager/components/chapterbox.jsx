import React from "react";
import styled from "styled-components";
import ChapterItem from "./chapteritem";

const ChapterBox = (props) => {
  return (
    <Box>
      {props.chapters.length > 0 ? (
        props.chapters.map((chapter, index) => (
          <ChapterItem
            bookId={props.bookId}
            key={chapter._id}
            chapter={chapter}
            index={index + 1}
            onUpdate={props.onUpdate}
          />
        ))
      ) : (
        <Noti>There's no chapter</Noti>
      )}
    </Box>
  );
};

export default ChapterBox;

const Noti = styled.h2`
  width: fit-content;
  margin: 0 auto;
`;

const Box = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  padding: 0 5rem;
  height: 18rem;
  overflow-y: scroll;
`;

// const Item = styled.li`
//   margin: 0;
//   border-top: 1px solid rgba(0, 0, 0, 0.2);
//   padding: 5px 0;
//   display: -webkit-box;
//   -webkit-line-clamp: 1;
//   -webkit-box-orient: vertical;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   word-break: break-word;
//   cursor: pointer;
//   &:hover {
//     background-color: rgba(0, 0, 0, 0.1);
//   }
// `;
