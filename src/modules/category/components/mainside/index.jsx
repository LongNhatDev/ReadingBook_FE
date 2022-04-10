import React from "react";
import styled from "styled-components";
import BookIntro from "../bookintro";
import { bookData } from "../../../../book-data";

const MainSide = () => {
  return (
    <Main>
      {bookData.map((book) => (
        <BookIntro key={book.bookId} bookinfo={book} />
      ))}
    </Main>
  );
};

export default MainSide;

const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
