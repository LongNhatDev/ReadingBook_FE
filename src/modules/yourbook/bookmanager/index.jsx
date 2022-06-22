import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { BaseURL } from "../../AxiosInstance";
import UserNav from "../../components/usernav";
import ChapterBox from "./components/chapterbox";
import StatusBox from "./components/statusbox";
import Button from "../../components/button";
import UploadChapter from "../uploadchapter";
const BookManager = () => {
  const [detail, setDetail] = useState({});
  const param = useParams();
  const [isShowUploadChapter, setIsShowUploadChapter] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);

  const showUploadChapterHandler = () => {
    setIsShowUploadChapter(true);
  };
  const hideUploadChapterHandler = () => {
    setIsShowUploadChapter(false);
  };
  const updateHandler = () => {
    setIsUpdate(!isUpdate);
  };

  useEffect(() => {
    console.log("run");
    const getBookDetail = async () => {
      try {
        const res = await BaseURL.get(`api/books/book/${param.bookId}`);
        setDetail(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getBookDetail();
  }, [param.bookId, isUpdate]);

  return (
    <div style={{ backgroundColor: "#ecebeb", paddingBottom: "3rem" }}>
      <UserNav />
      {detail._id !== undefined && (
        <Container>
          <Bookpart>
            <Cover src={detail.coverImageURL} alt="Cover of a book" />
            <Detail>
              <Title>{detail.bookName}</Title>
              <Paragraph>
                <span style={{ fontWeight: "bold" }}>- Category: </span>
                {detail.category.categoryName}
              </Paragraph>
              <Paragraph>
                <span style={{ fontWeight: "bold" }}>- Description: </span>
                {detail.description}
              </Paragraph>

              <StatusBox
                id={detail._id}
                status={detail.status}
                chapters={detail.chapters.length}
                views={detail.viewNumber}
                rating={detail.avrStarNumber}
              />
            </Detail>
          </Bookpart>
          <div
            style={{
              width: "100%",
              height: "3rem",
              backgroundColor: "#ecebeb",
            }}
          ></div>

          <Chapterpart>
            <ChapterBox
              onUpdate={updateHandler}
              bookId={detail._id}
              chapters={detail.chapters}
            />
            <CreateButton onClick={showUploadChapterHandler}>
              CREATE CHAPTER
            </CreateButton>
          </Chapterpart>
        </Container>
      )}
      {isShowUploadChapter && (
        <UploadChapter
          onClose={hideUploadChapterHandler}
          onUpdate={updateHandler}
          id={detail._id}
        />
      )}
    </div>
  );
};

export default BookManager;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  background-color: white;
`;

const Bookpart = styled.section`
  width: 100%;
  height: 28rem;
  display: flex;
  margin-top: 2rem;
  box-shadow: 2px 2px 6px grey;
  border-bottom: 1.2px solid #cecece;
  
`;

const Chapterpart = styled.section`
  width: 100%;
  height: 25rem;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 2px 6px grey;
`;

const Cover = styled.img`
  height: 100%;
  width: 21rem;
  flex-shrink: 0;
  border: 0.5px solid #c2c2c2;
  object-fit: cover;
  border-radius: 8px;
`;

const Detail = styled.div`
  padding: 0 3rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  text-transform: capitalize;
  margin-top: 10px;
  font-family: "Courier New", Courier, monospace;
  font-size: 45px;
`;
const Paragraph = styled.i`
  font-size: 1.6rem;
  margin-top: 2rem;
`;

const CreateButton = styled(Button)`
  left: 50%;
  transform: translateX(-50%);
  margin: 5px 0 15px 0;
`;
