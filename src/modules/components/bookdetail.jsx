import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import SideFeature from "./sidefeature";

const BookDetail = (props) => {
  let navigator = useNavigate();
  const moveToFirstChapterHandler = () => {
    const path = `/books/${props.book._id}/${props.book.chapters[0]._id}`;
    navigator(path);
  };
  return (
    <Container>
      <Cover src={props.book.coverImageURL} alt="book-cover" />
      <Content>
        <Title onClick={moveToFirstChapterHandler}>{props.book.bookName}</Title>
        <Category>#{props.book.category.categoryName}</Category>
        <Des>"{props.book.description}"</Des>
        <SideFeature
          isUpdated={props.isUpdated}
          onUpdate={props.onUpdate}
          book={props.book}
        />
      </Content>
    </Container>
  );
};

export default BookDetail;

const Container = styled.div`
  margin-top: 2rem;
  width: 100%;
  height: 40rem;
  padding: 0 16rem;
  /* background-color: #f5f6fc; */
  display: flex;
  flex-direction: row;
`;

const Cover = styled.img`
  width: 30rem;
  height: 40rem;
  object-fit: cover;
  box-shadow: 0 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const Content = styled.div`
  width: 70%;
  height: 100%;
  padding: 1rem 2rem;
  margin-left: 5rem;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  height: 7rem;
  text-transform: capitalize;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Category = styled.i`
  font-size: 2rem;
  padding: 5px 0;
  text-transform: uppercase;
  color: blue;
`;

// const Chapter = styled.div`
//   width: 20rem;
//   font-weight: bold;
//   font-size: 1.8rem;
// `;

// const Views = styled.div`
//   margin-left: 2rem;
//   font-weight: bold;
//   font-weight: 1.8rem;
// `;

// const Rate = styled.div`
//   margin-top: 2rem;
//   font-weight: bold;
//   & span {
//     font-size: 3rem;
//     transform: translateY(5%);
//     display: inline-block;
//     color: yellow;
//   }
// `;

// const Text = styled.p`
//   font-size: 3rem;
//   display: inline-block;
// `;

// const Price = styled.div`
//   font-size: 1.8rem;
//   font-weight: bold;
//   margin-top: 2rem;
// `;

// const Bottom = styled.div`
//   margin-top: 8rem;
//   display: flex;
//   gap: 2rem;
// `;

const Des = styled.i`
  font-size: 1.8rem;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
`;
