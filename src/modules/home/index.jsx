import React from "react";
import styled from "styled-components";
import Slider from "./components/slider";
import Footer from "../components/footer";
import Page from "../components/page";
import UserNav from "../components/usernav";

const Home = () => {
  return (
    <>
      <UserNav />
      <Page>
        <Slider />
        <Content>
          <BoxRow>
            <BoxCol>
              <TitleH2>Weekly Book</TitleH2>
              <Image
                src="https://wallpaperaccess.com/full/2526660.jpg"
                alt=""
              />
            </BoxCol>
            <BoxCol>
              <TitleH2>Recent Activities</TitleH2>

            </BoxCol>
            <div></div>
          </BoxRow>
        </Content>
        <Footer />
      </Page>
    </>
  );
};

export default Home;

const Content = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  align-items: center;
  padding: 40px 0;
  width: 100%;
  min-height: 800px;
`;

const BoxCol = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  align-items: flex-start;
  border: 1px solid black;
`;

const BoxRow = styled.div`
  width: 80%;
  height: 400px;
  background-color: #ecebeb;
  box-shadow: 2px 2px 6px grey;
  margin-bottom: 40px;

  display: flex;
  flex-flow: row wrap;
`;

const Image = styled.img`
  width: 80%;
  height: 60%;
  box-shadow: 2px 2px 3px 1px black;
  border-radius: 5px;
`;

const TitleH2 = styled.h2`
  margin: 20px 0;
  line-height: 4rem;
  border-bottom: 0.5px solid grey;
  width: 80%;
`;
