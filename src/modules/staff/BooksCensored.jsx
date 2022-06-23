import React from "react";
import styled from "styled-components";
import ListBookConsored from "./components/ListBookConsored";
import StaffNav from "./components/staffnav";

const BooksCensored = () => {
  return (
    <Container>
      <StaffNav />
      <ListBookConsored />
    </Container>
  );
};

export default BooksCensored;

const Container = styled.div`
  display: flex;
`;
