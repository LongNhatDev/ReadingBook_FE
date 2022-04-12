import React from "react";
import styled from "styled-components";
import BookIntro from "../bookintro";

const MainSide = (props) => {
  console.log((props.data.length / 2) * 14);
  return (
    <Main len={`${(props.data.length / 2) * 14}rem`}>
      {props.data.map((book) => (
        <BookIntro key={book.bookId} bookinfo={book} />
      ))}
    </Main>
  );
};

export default MainSide;

const Main = styled.div`
  display: flex;
  height: ${(props) => props.len};
  flex-wrap: wrap;
  flex: 1;
  padding-top: 2rem;
`;
