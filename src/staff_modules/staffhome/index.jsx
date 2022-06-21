import React from "react";
import styled from "styled-components";
import StaffNav from "../components/staffnav";

const StaffHome = () => {
  return (
    <Container>
      <StaffNav />
    </Container>
  );
};

export default StaffHome;

const Container = styled.div`
  display: flex;
`;
