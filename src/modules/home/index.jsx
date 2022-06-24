import React from "react";
import styled from "styled-components";
import Slider from "./components/slider";
import Footer from "../components/footer";
import Page from "../components/page";
import UserNav from "../components/usernav";
import { BsEyeFill, BsStarFill, BsSuitHeartFill } from "react-icons/bs";
import { BaseURL } from "../AxiosInstance";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [arrayStar, setArrayStar] = React.useState();
  const [arrayFollow, setArrayFollow] = React.useState();
  const [arrayView, setArrayView] = React.useState();
  const [completedBooks, setCompletedBooks] = React.useState();
  let navigate = useNavigate();

  React.useEffect(() => {
    async function getBookHasBestStar() {
      const responeStar = await BaseURL.get(
        "api/books?pageSize=20&pageNumber=1&sort=desc&typeSort=avrStarNumber"
      );

      let respone = responeStar.data.books.map((book) => ({
        bookName: book.bookName,
        description: book.description,
        id: book._id,
        coverImageURL: book.coverImageURL,
        avrStarNumber: book.avrStarNumber,
      }));
      setArrayStar([...respone]);
    }
    async function getBookHasBestFollow() {
      const responeFollow = await BaseURL.get(
        "api/books?pageSize=20&pageNumber=1&sort=desc&typeSort=followTotal"
      );

      let respone = responeFollow.data.books.map((book) => ({
        bookName: book.bookName,
        description: book.description,
        id: book._id,
        coverImageURL: book.coverImageURL,
        followTotal: book.followTotal,
      }));
      setArrayFollow([...respone]);
    }
    async function getBookHasBestView() {
      const responeView = await BaseURL.get(
        "api/books?pageSize=20&pageNumber=1&sort=desc&typeSort=viewNumber"
      );

      let respone = responeView.data.books.map((book) => ({
        bookName: book.bookName,
        description: book.description,
        id: book._id,
        coverImageURL: book.coverImageURL,
        viewNumber: book.viewNumber,
      }));
      setArrayView([...respone]);
    }
    async function getCompletedBooks() {
      const AllBooks = await BaseURL.get("api/books");
      const completedBooks = AllBooks.data.books
        .filter((book) => book.status.includes("Completed"))
        .map((item) => item);
      setCompletedBooks([...completedBooks]);
    }

    getBookHasBestStar();
    getBookHasBestFollow();
    getBookHasBestView();
    getCompletedBooks();
  }, []);

  const handleClick = (props) => {
    let path = `/books/${props}`;
    navigate(path);
  };

  return (
    <>
      <UserNav />
      <Page>
        <Slider />
        <Content>
          <BoxRow>
            <BoxCol>
              <TitleH2>
                <BsStarFill color="#ffd900" /> Top Star Book
              </TitleH2>
              <DivCustom
                style={{
                  width: "95%",
                  height: "26rem",
                  boxShadow: " 2px 2px 3px 1px black",
                  display: "flex",
                }}
                onClick={() => handleClick(arrayStar?.[0].id)}
              >
                <ImageTop src={arrayStar?.[0].coverImageURL} />
                <DivCustom
                  style={{
                    maxWidth: "50%",
                    height: "26rem",
                    display: "flex",
                    flexFlow: "column wrap",
                    padding: "15px 0 0 15px",
                  }}
                >
                  <h2 style={{ marginBottom: "10px" }}>
                    {arrayStar?.[0].bookName}
                  </h2>
                  <DivCustom
                    style={{
                      marginBottom: "10px",
                      width: "50px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <BsStarFill color="#ffd900" />
                    {arrayStar?.[0].avrStarNumber}
                  </DivCustom>

                  <p>{arrayStar?.[0].description}</p>
                </DivCustom>
              </DivCustom>
            </BoxCol>

            <BoxCol>
              <TitleH2>Another</TitleH2>
              <DivFisrt
                onClick={() => {
                  handleClick(arrayStar?.[1].id);
                }}
              >
                <DivLast>
                  <h2 style={{ marginBottom: "10px" }}>
                    {arrayStar?.[1].bookName}
                  </h2>
                  <DivCustom
                    style={{
                      marginBottom: "10px",
                      width: "50px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <BsStarFill color="#ffd900" />
                    {arrayStar?.[1].avrStarNumber}
                  </DivCustom>
                  <p>{arrayStar?.[1].description}</p>
                </DivLast>
                <Image src={arrayStar?.[1].coverImageURL} />
              </DivFisrt>

              <DivFisrt
                onClick={() => {
                  handleClick(arrayStar?.[2].id);
                }}
              >
                <DivLast>
                  <h2 style={{ marginBottom: "10px" }}>
                    {arrayStar?.[1].bookName}
                  </h2>
                  <DivCustom
                    style={{
                      marginBottom: "10px",
                      width: "50px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <BsStarFill color="#ffd900" />
                    {arrayStar?.[2].avrStarNumber}
                  </DivCustom>
                  <p>{arrayStar?.[2].description}</p>
                </DivLast>
                <Image src={arrayStar?.[2].coverImageURL} />
              </DivFisrt>
            </BoxCol>
          </BoxRow>

          <BoxRow>
            <BoxCol>
              <TitleH2>
                <BsSuitHeartFill color="red" /> Top Folow Book
              </TitleH2>
              <DivCustom
                style={{
                  width: "95%",
                  height: "26rem",
                  boxShadow: " 2px 2px 3px 1px black",
                  display: "flex",
                }}
                onClick={() => {
                  handleClick(arrayFollow?.[0].id);
                }}
              >
                <ImageTop src={arrayFollow?.[0].coverImageURL} />
                <DivCustom
                  style={{
                    maxWidth: "80%",
                    height: "26rem",
                    display: "flex",
                    flexFlow: "column wrap",
                    padding: "15px 0 0 15px",
                  }}
                >
                  <h2 style={{ marginBottom: "10px" }}>
                    {arrayFollow?.[0].bookName}
                  </h2>
                  <DivCustom
                    style={{
                      marginBottom: "10px",
                      width: "30px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <BsSuitHeartFill color="red" />
                    {arrayFollow?.[0].followTotal}
                  </DivCustom>

                  <p>{arrayFollow?.[0].description}</p>
                </DivCustom>
              </DivCustom>
            </BoxCol>

            <BoxCol>
              <TitleH2>Another</TitleH2>
              <DivFisrt
                onClick={() => {
                  handleClick(arrayFollow?.[1].id);
                }}
              >
                <DivLast>
                  <h2 style={{ marginBottom: "10px" }}>
                    {arrayFollow?.[1].bookName}
                  </h2>
                  <DivCustom
                    style={{
                      marginBottom: "10px",
                      width: "30px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <BsSuitHeartFill color="red" />
                    {arrayFollow?.[1].followTotal}
                  </DivCustom>
                  <p>{arrayFollow?.[1].description}</p>
                </DivLast>
                <Image src={arrayFollow?.[1].coverImageURL} />
              </DivFisrt>

              <DivFisrt
                onClick={() => {
                  handleClick(arrayFollow?.[2].id);
                }}
              >
                <DivLast>
                  <h2 style={{ marginBottom: "10px" }}>
                    {arrayFollow?.[2].bookName}
                  </h2>
                  <DivCustom
                    style={{
                      marginBottom: "10px",
                      width: "30px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <BsSuitHeartFill color="red" />
                    {arrayFollow?.[2].followTotal}
                  </DivCustom>
                  <p>{arrayFollow?.[2].description}</p>
                </DivLast>
                <Image src={arrayFollow?.[2].coverImageURL} />
              </DivFisrt>
            </BoxCol>
          </BoxRow>

          <BoxRow>
            <BoxCol>
              <TitleH2>
                <BsEyeFill color="green" /> Top View Book
              </TitleH2>
              <DivCustom
                style={{
                  width: "95%",
                  height: "26rem",
                  boxShadow: " 2px 2px 3px 1px black",
                  display: "flex",
                }}
                onClick={() => {
                  handleClick(arrayView?.[0].id);
                }}
              >
                <ImageTop src={arrayView?.[0].coverImageURL} />
                <DivCustom
                  style={{
                    maxWidth: "80%",
                    height: "26rem",
                    display: "flex",
                    flexFlow: "column wrap",
                    padding: "15px 0 0 15px",
                  }}
                >
                  <h2 style={{ marginBottom: "10px" }}>
                    {arrayView?.[0].bookName}
                  </h2>
                  <DivCustom
                    style={{
                      marginBottom: "10px",
                      width: "40px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <BsEyeFill color="green" />
                    {arrayView?.[0].viewNumber}
                  </DivCustom>

                  <p>{arrayView?.[0].description}</p>
                </DivCustom>
              </DivCustom>
            </BoxCol>

            <BoxCol>
              <TitleH2>Another</TitleH2>
              <DivFisrt onClick={() => handleClick(arrayView?.[1].id)}>
                <DivLast>
                  <h2 style={{ marginBottom: "10px" }}>
                    {arrayView?.[1].bookName}
                  </h2>
                  <DivCustom
                    style={{
                      marginBottom: "10px",
                      width: "40px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <BsEyeFill color="green" />
                    {arrayView?.[1].viewNumber}
                  </DivCustom>
                  <p>{arrayView?.[1].description}</p>
                </DivLast>
                <Image src={arrayView?.[1].coverImageURL} />
              </DivFisrt>

              <DivFisrt onClick={() => handleClick(arrayView?.[2].id)}>
                <DivLast>
                  <h2 style={{ marginBottom: "10px" }}>
                    {arrayView?.[2].bookName}
                  </h2>
                  <DivCustom
                    style={{
                      marginBottom: "10px",
                      width: "40px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <BsEyeFill color="green" />
                    {arrayView?.[2].viewNumber}
                  </DivCustom>
                  <p>{arrayView?.[2].description}</p>
                </DivLast>
                <Image src={arrayView?.[2].coverImageURL} />
              </DivFisrt>
            </BoxCol>
          </BoxRow>

          <CompleteBox>
            <h2 style={{ margin: "20px 0 20px 10%" }}>Completed Book</h2>
            <CompleteBoxItem>
              {completedBooks?.map((book) => (
                <Item onClick={() => handleClick(book._id)}>
                  <img
                    src={book.coverImageURL}
                    alt=""
                    style={{
                      width: "100%",
                      marginBottom: "10px",
                      height: "150px",
                    }}
                  />
                  <h3>{book.bookName}</h3>
                </Item>
              ))}
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
  margin: 0 10px;
`;

const BoxRow = styled.div`
  width: 80%;
  box-shadow: 4px 2px 6px grey;
  margin-bottom: 40px;
  display: flex;
  flex-flow: row wrap;
  border: 1px solid grey;
`;

const Image = styled.img`
  width: 100px;
  height: 100%;
  box-shadow: 0px 0px 3px 1px black;
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
  :hover {
    cursor: pointer;
  }
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

const ImageTop = styled.img`
  width: 200px;
  height: 100%;
  box-shadow: 0px 0px 3px 1px black;
`;

const DivCustom = styled.div`
  :hover {
    cursor: pointer;
  }
`;
