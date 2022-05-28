import React, { useState } from "react";
import styled from "styled-components";
import { AiFillEdit, AiTwotoneDelete } from "react-icons/ai";
import UpdateChapter from "../../yourbooklist/components/updatechapter";

const ChapterItem = (props) => {
  const [isShowUpdateChapter, setIsShowUpdateChapter] = useState(false);
  const showUpdateChapterHandler = () => {
    setIsShowUpdateChapter(true);
  };
  const hideUpdateChapterHandler = () => {
    setIsShowUpdateChapter(false);
  };

  return (
    <Container>
      <Title>
        Chapter {props.index}. {props.chapter.title}
      </Title>
      <IconWrapper>
        <span onClick={showUpdateChapterHandler} style={{ color: "yellow" }}>
          <AiFillEdit />
        </span>
        <span style={{ color: "red" }}>
          <AiTwotoneDelete />
        </span>
      </IconWrapper>
      {isShowUpdateChapter && (
        <UpdateChapter
          onClose={hideUpdateChapterHandler}
          // onUpdate={updateHandler}
          chapter={props.chapter}
          id={props.bookId}
        />
      )}
    </Container>
  );
};

export default ChapterItem;

const Container = styled.li`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 5px 0;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const Title = styled.strong`
  font-size: 1.7rem;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
`;

const IconWrapper = styled.div`
  display: flex;
  gap: 5px;
  & span {
    font-size: 1.7rem;
    &:hover {
      transform: scale(1.5);
    }
  }
`;
