import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import MainContext from "../../../store/main-context";
import MainSide from "../components/mainside";
import Side from "../components/side";

const CateDetail = () => {
  const categoryType = useParams();
  const mainCtx = useContext(MainContext);

  let booksData = mainCtx.books.filter((book) => {
    return book.booktag === categoryType.catename;
  });

  if (categoryType.catename.toString() === "all") {
    booksData = [...mainCtx.books];
  }

  return (
    <MainSection>
      <Side selected={"/category/" + categoryType.catename} />
      <MainSide data={booksData} />
    </MainSection>
  );
};

export default CateDetail;

const MainSection = styled.section`
  padding-top: 0.5rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 100%;
`;
