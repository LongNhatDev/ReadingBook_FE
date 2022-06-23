import React from "react";
import styled from "styled-components";
import ListBookPending from "./components/ListBookPending";
import StaffNav from "./components/staffnav";

const BooksPending = () => {
  return (
    <Container>
      <StaffNav />
      <ListBookPending />
    </Container>
  );
};

export default BooksPending;

const Container = styled.div`
  display: flex;
`;
