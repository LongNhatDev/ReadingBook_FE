import React from "react";
import styled from "styled-components";

const ReadingPage = () => {
  console.log("In the Reading Page");
  return (
    <Reading
      src="https://reading-books-management.s3.amazonaws.com/chapters/Chapter-1.html"
      title="ReadingPage"
    />
  );
};

export default ReadingPage;

const Reading = styled.iframe`
  display: block;
  width: 70%;
  height: 100vh;
  border: none;
  margin: 0 auto;
  padding: 0 5rem;
  box-shadow: 0 0 0 50rem rgba(0, 0, 0, 0.1);
`;
