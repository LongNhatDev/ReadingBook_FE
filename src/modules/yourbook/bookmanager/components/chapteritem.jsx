import React, { useState } from "react";
import styled from "styled-components";
import { AiFillEdit, AiTwotoneDelete } from "react-icons/ai";
import UpdateChapter from "../../yourbooklist/components/updatechapter";
import { useNavigate } from "react-router-dom";

const ChapterItem = (props) => {
  const [isShowUpdateChapter, setIsShowUpdateChapter] = useState(false);
  const showUpdateChapterHandler = () => {
    setIsShowUpdateChapter(true);
  };
  const hideUpdateChapterHandler = () => {
    setIsShowUpdateChapter(false);
  };
  let navigator = useNavigate();
  const moveToReadingPageHandler = () => {
    const path = `/books/${props.bookId}/${props.chapter._id}`;
    navigator(path);
  };

  return (
    <Container>
      <Title onClick={moveToReadingPageHandler}>
        Chapter {props.index}. {props.chapter.title}
      </Title>
      <IconWrapper>
        <span
          onClick={showUpdateChapterHandler}
          style={{ color: "#00B524", fontSize: "3rem", marginRight: "2rem" }}
        >
          <AiFillEdit />
        </span>
        <span style={{ color: "red", fontSize: "3rem" }}>
          <AiTwotoneDelete />
        </span>
      </IconWrapper>
      {isShowUpdateChapter && (
        <UpdateChapter
          onClose={hideUpdateChapterHandler}
          onUpdate={props.onUpdate}
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
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 5px 0;
  margin-top: 5px;
  cursor: pointer;
`;

const Title = styled.strong`
  font-size: 1.7rem;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  &:hover {
    text-decoration: underline;
  }
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

const SpanCustom = styled.span`
  font-size: 1.5rem;
`;
