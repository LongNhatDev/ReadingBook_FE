import React from "react";
import styled from "styled-components";
import StaffNav from "./components/staffnav";

const CreateCategory = () => {
  return (
    <Container>
      <StaffNav />
    </Container>
  );
};

export default CreateCategory;

const Container = styled.div`
  display: flex;
`;
