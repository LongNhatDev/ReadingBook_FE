import React from "react";
import styled from "styled-components";
import Slider from "./components/slider";
import Footer from "../components/footer";
import Page from "../components/page";
import UserNav from "../components/usernav";

const Home = () => {
  return (
    <Page>
      <UserNav/>
      <Slider />
      <Content></Content>
      <Footer />
    </Page>
  );
};

export default Home;

const Content = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  height: 800px;
`;

