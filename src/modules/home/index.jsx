import React from "react";
import styled from "styled-components";
import Slider from "./components/slider";
import Footer from "../components/footer";
import Page from "../components/page";
import UserNav from "../components/usernav";
import { BsEyeFill, BsStarFill, BsSuitHeartFill } from "react-icons/bs";
import { BaseURL } from "../AxiosInstance";

const Home = () => {
  React.useEffect(() => {
    async function getBookHasBestStar() {
      const responeStar = await BaseURL.get(
        "api/books?pageSize=20&pageNumber=1&sort=desc&typeSort=avrStarNumber"
      );

      let array = responeStar.data.map((book) => ({
        bookName: book.bookName,
        description: book.description,
        id: book.id,
        coverImageURL: book.coverImageURL,
      }));
    }

    getBookHasBestStar();
  }, []);

  return (
    <>
      <UserNav />
      <Page>
        <Slider />
        <Content>
          <BoxRow>
            <BoxCol>
              <TitleH2>
                <BsStarFill color="#ffd900" /> Star Book
              </TitleH2>
              <div
                style={{
                  width: "80%",
                  height: "26rem",
                  boxShadow: " 2px 2px 3px 1px black",
                  borderRadius: "5px",
                }}
              >
                <Image src="https://thegioidienanh.vn/stores/news_dataimages/huonggiang/052018/05/10/3827_ThYn_YYng_YYt_ViYt_2.jpg" />
              </div>
            </BoxCol>

            <BoxCol>
              <TitleH2>Another</TitleH2>
              <DivFisrt>
                <DivLast>
                  <h2 style={{ marginBottom: "10px" }}>Cương thi dị truyện</h2>
                  <p>Đây là phần mô tả ngắn gọn nha mọi ngừi</p>
                </DivLast>
                <Image
                  src="https://thegioidienanh.vn/stores/news_dataimages/huonggiang/052018/05/10/3827_ThYn_YYng_YYt_ViYt_2.jpg"
                  style={{ height: "10rem", width: "auto" }}
                />
              </DivFisrt>
              <DivFisrt>
                <DivLast>
                  <h2 style={{ marginBottom: "10px" }}>Cương thi dị truyện</h2>
                  <p>Đây là phần mô tả ngắn gọn nha mọi ngừi</p>
                </DivLast>
                <Image
                  src="https://thegioidienanh.vn/stores/news_dataimages/huonggiang/052018/05/10/3827_ThYn_YYng_YYt_ViYt_2.jpg"
                  style={{ height: "10rem", width: "auto" }}
                />
              </DivFisrt>
            </BoxCol>
          </BoxRow>

          <BoxRow>
            <BoxCol>
              <TitleH2>
                <BsSuitHeartFill color="red" /> Follow Book
              </TitleH2>
              <div
                style={{
                  width: "80%",
                  height: "26rem",
                  boxShadow: " 2px 2px 3px 1px black",
                  borderRadius: "5px",
                }}
              >
                <Image src="https://thegioidienanh.vn/stores/news_dataimages/huonggiang/052018/05/10/3827_ThYn_YYng_YYt_ViYt_2.jpg" />
              </div>
            </BoxCol>
            <BoxCol>
              <TitleH2>Another</TitleH2>
              <DivFisrt>
                <DivLast>
                  <h2 style={{ marginBottom: "10px" }}>Cương thi dị truyện</h2>
                  <p>Đây là phần mô tả ngắn gọn nha mọi ngừi</p>
                </DivLast>
                <Image
                  src="https://thegioidienanh.vn/stores/news_dataimages/huonggiang/052018/05/10/3827_ThYn_YYng_YYt_ViYt_2.jpg"
                  style={{ height: "10rem", width: "auto" }}
                />
              </DivFisrt>
              <DivFisrt>
                <DivLast>
                  <h2 style={{ marginBottom: "10px" }}>Cương thi dị truyện</h2>
                  <p>Đây là phần mô tả ngắn gọn nha mọi ngừi</p>
                </DivLast>
                <Image
                  src="https://thegioidienanh.vn/stores/news_dataimages/huonggiang/052018/05/10/3827_ThYn_YYng_YYt_ViYt_2.jpg"
                  style={{ height: "10rem", width: "auto" }}
                />
              </DivFisrt>
            </BoxCol>
          </BoxRow>

          <BoxRow>
            <BoxCol>
              <TitleH2>
                <BsEyeFill color="#10fc10" /> View Book
              </TitleH2>
              <div
                style={{
                  width: "80%",
                  height: "26rem",
                  boxShadow: " 2px 2px 3px 1px black",
                  borderRadius: "5px",
                }}
              >
                <Image src="https://thegioidienanh.vn/stores/news_dataimages/huonggiang/052018/05/10/3827_ThYn_YYng_YYt_ViYt_2.jpg" />
              </div>
            </BoxCol>

            <BoxCol>
              <TitleH2>Another</TitleH2>
              <DivFisrt>
                <DivLast>
                  <h2 style={{ marginBottom: "10px" }}>Cương thi dị truyện</h2>
                  <p>Đây là phần mô tả ngắn gọn nha mọi ngừi</p>
                </DivLast>
                <Image
                  src="https://thegioidienanh.vn/stores/news_dataimages/huonggiang/052018/05/10/3827_ThYn_YYng_YYt_ViYt_2.jpg"
                  style={{ height: "10rem", width: "auto" }}
                />
              </DivFisrt>
              <DivFisrt>
                <DivLast>
                  <h2 style={{ marginBottom: "10px" }}>Cương thi dị truyện</h2>
                  <p>Đây là phần mô tả ngắn gọn nha mọi ngừi</p>
                </DivLast>
                <Image
                  src="https://thegioidienanh.vn/stores/news_dataimages/huonggiang/052018/05/10/3827_ThYn_YYng_YYt_ViYt_2.jpg"
                  style={{ height: "10rem", width: "auto" }}
                />
              </DivFisrt>
            </BoxCol>
          </BoxRow>

          <CompleteBox>
            <h2 style={{ margin: "20px 0 20px 10%" }}>Completed Book</h2>
            <CompleteBoxItem>
              <Item>
                <img
                  src="https://i.pinimg.com/736x/55/9b/b0/559bb0b11a687a3a2c91801337e8163e.jpg"
                  style={{ width: "100%", marginBottom: "10px" }}
                  alt="spiderman"
                />
                <h3>Spider Man</h3>
                <p>This is the description of the book </p>
              </Item>
              <Item>
                <img
                  src="https://i.pinimg.com/736x/55/9b/b0/559bb0b11a687a3a2c91801337e8163e.jpg"
                  style={{ width: "100%", marginBottom: "10px" }}
                  alt="spiderman"
                />
                <h3>Spider Man</h3>
                <p>This is the description of the book </p>
              </Item>
              <Item>
                <img
                  src="https://i.pinimg.com/736x/55/9b/b0/559bb0b11a687a3a2c91801337e8163e.jpg"
                  style={{ width: "100%", marginBottom: "10px" }}
                  alt="spiderman"
                />
                <h3>Spider Man</h3>
                <p>This is the description of the book </p>
              </Item>
              <Item>
                <img
                  src="https://i.pinimg.com/736x/55/9b/b0/559bb0b11a687a3a2c91801337e8163e.jpg"
                  style={{ width: "100%", marginBottom: "10px" }}
                  alt="spiderman"
                />
                <h3>Spider Man</h3>
                <p>This is the description of the book </p>
              </Item>
              <Item>
                <img
                  src="https://i.pinimg.com/736x/55/9b/b0/559bb0b11a687a3a2c91801337e8163e.jpg"
                  style={{ width: "100%", marginBottom: "10px" }}
                  alt="spiderman"
                />
                <h3>Spider Man</h3>
                <p>This is the description of the book </p>
              </Item>
              <Item>
                <img
                  src="https://i.pinimg.com/736x/55/9b/b0/559bb0b11a687a3a2c91801337e8163e.jpg"
                  style={{ width: "100%", marginBottom: "10px" }}
                  alt="spiderman"
                />
                <h3>Spider Man</h3>
                <p>This is the description of the book </p>
              </Item>
              <Item>
                <img
                  src="https://i.pinimg.com/736x/55/9b/b0/559bb0b11a687a3a2c91801337e8163e.jpg"
                  style={{ width: "100%", marginBottom: "10px" }}
                  alt="spiderman"
                />
                <h3>Spider Man</h3>
                <p>This is the description of the book </p>
              </Item>
            </CompleteBoxItem>
          </CompleteBox>
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
  margin: 0 20px;
`;

const BoxRow = styled.div`
  width: 80%;
  height: 400px;
  /* background-color: #ecebeb; */
  box-shadow: 2px 2px 6px grey;
  margin-bottom: 40px;

  display: flex;
  flex-flow: row wrap;
`;

const Image = styled.img`
  width: auto;
  height: 100%;
  border-radius: 5px;
`;

const TitleH2 = styled.h2`
  margin: 20px 0;
  line-height: 4rem;
  border-bottom: 0.5px solid grey;
  width: 80%;
`;

const DivFisrt = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid grey;
`;

const DivLast = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-right: 1rem;
`;

const CompleteBox = styled.div`
  width: 100%;
  background-color: #ecebeb;
  padding: 20px 0;
`;

const CompleteBoxItem = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Item = styled.div`
  display: flex;
  width: 10%;
  flex-flow: column wrap;
  justify-content: center;
  align-items: flex-start;
  margin: 0 0.8%;
`;
