import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import MainSide from "../components/mainside";
import Side from "../components/side";

const CateDetail = () => {
  const categoryType = useParams();
  console.log(categoryType.catename);
  return (
    <MainSection>
      {console.log("hello")}
      <Side selected={categoryType.catename} />
      <MainSide />
    </MainSection>
  );
};

export default CateDetail;

const MainSection = styled.section`
  margin: 0 18.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
