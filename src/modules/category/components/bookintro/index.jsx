import React from "react";
import styled from "styled-components";
import { FaStar, FaEye, FaPlusCircle } from "react-icons/fa";

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
            <span style={{ color: "yellow" }}>
              <FaStar />
            </span>
            <span> {props.bookinfo.bookrate}</span>
          </BookRate>
          <BookChapter>
            <span style={{ fontSize: 12 + "px", color: "red" }}>
              <IconMat />
            </span>
            <span>{props.bookinfo.bookchapter} views</span>
          </BookChapter>
          <BookAdd>
            <IconCong />
            <span> Follow</span>
          </BookAdd>
        </BookBottom>
      </BookDetail>
    </Book>
  );
};

export default BookIntro;

const Book = styled.div`
  width: calc(33% - 4rem);
  display: flex;
  flex-direction: row;
  box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.25);
  margin-left: 3.5rem;
  margin-bottom: 3rem;
  height: 12rem;
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
  flex: 1;
`;
const BookTag = styled.div`
  color: blue;
  text-transform: uppercase;
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
  margin-top: auto;
  align-items: center;
`;
const BookRate = styled.div`
  width: 3.5rem;
`;
const BookChapter = styled.div`
  margin-left: 4rem;
`;
const BookAdd = styled.div`
  color: blue;
  margin-left: auto;
`;

const IconMat = styled(FaEye)`
  transform: translateY(2px);
  margin-right: 2px;
`;

const IconCong = styled(FaPlusCircle)`
  transform: translateY(1px);
`;
