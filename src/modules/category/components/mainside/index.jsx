import React from "react";
import styled from "styled-components";
import BookIntro from "../bookintro";

const MainSide = (props) => {
  return (
    <Main len={`${Math.ceil(props.data.length / 3) * 15 + 3}rem`}>
      {props.data.map((book) => (
        <BookIntro key={book._id} bookinfo={book} />
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
