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
        console.log(res.data);
        setDetail(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getBookDetail();
  }, [param.bookId, isUpdate]);

  return (
    <React.Fragment>
      <UserNav />
      {detail._id !== undefined && (
        <Container>
          <Bookpart>
            <Cover src={detail.coverImageURL} alt="Cover of a book" />
            <Detail>
              <Title>{detail.bookName}</Title>
              <Category>Category: {detail.category.categoryName}</Category>
              <StatusBox
                chapters={detail.chapters.length}
                views={detail.viewNumber}
                rating={detail.avrStarNumber}
              />
            </Detail>
          </Bookpart>
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
    </React.Fragment>
  );
};

export default BookManager;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const Bookpart = styled.section`
  width: 100%;
  height: 28rem;
  display: flex;
  margin-top: 2rem;
`;

const Chapterpart = styled.section`
  width: 100%;
  height: 23rem;
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
`;

const Cover = styled.img`
  height: 100%;
  width: 21rem;
  flex-shrink: 0;
  box-shadow: 8px -8px 10px 0 rgba(0, 0, 0, 0.2);
`;

const Detail = styled.div`
  padding: 0 3rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  text-transform: capitalize;
`;
const Category = styled.i`
  font-size: 1.6rem;
  margin-top: 2rem;
`;

const CreateButton = styled(Button)`
  left: 50%;
  transform: translateX(-50%);
  margin-top: auto;
`;
