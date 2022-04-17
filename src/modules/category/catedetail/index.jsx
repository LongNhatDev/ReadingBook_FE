import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import MainSide from "../components/mainside";
import Side from "../components/side";
import { bookData } from "../../../book-data";

const CateDetail = () => {
  const categoryType = useParams();
  let books = bookData.filter((book) => {
    return book.booktag === categoryType.catename;
  });

  if (categoryType.catename.toString() === "all") {
    books = [...bookData];
  }

  return (
    <MainSection>
      <Side selected={categoryType.catename} />
      <MainSide data={books} />
    </MainSection>
  );
};

export default CateDetail;

const MainSection = styled.section`
  padding-top: 3rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 85vh;
`;
