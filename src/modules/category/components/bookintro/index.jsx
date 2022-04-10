import React from "react";
import styled from "styled-components";
import { FaStar, FaStickyNote, FaPlusCircle } from "react-icons/fa";

const BookIntro = (props) => {
  return (
    <Book>
      <BookImage src={props.bookinfo.bookimg} alt="gkvl1"></BookImage>
      <BookDetail>
        <BookTag>#{props.bookinfo.booktag}</BookTag>
        <BookName>{props.bookinfo.bookname}</BookName>
        <BookDes>{props.bookinfo.bookdes}</BookDes>
        <BookBottom>
          <BookRate>
            <FaStar />
            <span>{props.bookinfo.bookrate}</span>
          </BookRate>
          <BookChapter>
            <FaStickyNote />
            <span>{props.bookinfo.bookchapter} chapters</span>
          </BookChapter>
          <BookAdd>
            <FaPlusCircle />
            <span>ADD</span>
          </BookAdd>
        </BookBottom>
      </BookDetail>
    </Book>
  );
};

export default BookIntro;

const Book = styled.div`
  width: calc(50% - 4rem);
  display: flex;
  flex-direction: row;
  height: 12rem;
  box-shadow: 3px 5px 10px rgba(0, 0, 0, 0.2);
  margin: 1rem;
`;
const BookImage = styled.img`
  width: 9rem;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
  flex-shrink: 0;
  cursor: pointer;
  &:hover {
  }
`;
const BookDetail = styled.div`
  height: 100%;
  padding: 1rem 2rem;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  line-height: 1.2;
`;
const BookTag = styled.div`
  color: blue;
`;
const BookName = styled.h3`
  margin-top: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
`;
const BookDes = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  color: #121217;
  margin-top: 1rem;
`;
const BookBottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  margin-top: auto;
`;
const BookRate = styled.div``;
const BookChapter = styled.div``;
const BookAdd = styled.div`
  color: blue;
`;
