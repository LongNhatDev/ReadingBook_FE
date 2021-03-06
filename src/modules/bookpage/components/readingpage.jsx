import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import ToolBar from "./toolbar";
import ChaptersToolbar from "./chapterstoolbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BaseURL } from "../../AxiosInstance";
import { authentication } from "../../../authProvider";

const ReadingPage = () => {
  const context = useContext(authentication);
  const token = context.accessToken;
  const [datas, setDatas] = useState({
    chapters: [],
    chapterTitle: "",
    chapterContent: "",
  });
  const [isShowIndex, setIsShowIndex] = useState(false);

  const showIndexHandler = () => {
    setIsShowIndex(true);
  };

  const hideIndexHandler = () => {
    setIsShowIndex(false);
  };
  const bookParam = useParams();

  useEffect(() => {
    let chapterTitle = "";
    let chapters = [];
    const getChapter = async () => {
      try {
        const authorization = {
          headers: {
            Authorization: token ? token : "",
          },
        };
        const res = await BaseURL.get(
          `api/books/book/${bookParam.bookId}`,
          authorization
        );
        chapters = res.data.chapters;
        let targetChapter = chapters.findIndex(
          (chapter) => chapter._id === bookParam.chapterId
        );
        console.log("terget chapter::", targetChapter);
        chapterTitle = chapters[targetChapter].title;
        const linkToChapter = chapters[targetChapter].contentLink;
        try {
          const res2 = await axios.get(linkToChapter);
          setDatas({
            chapters: chapters,
            chapterTitle: chapterTitle,
            chapterContent: res2.data,
          });
        } catch (err1) {
          console.log("error occur", err1);
        }
      } catch (err2) {
        console.log("error occur", err2);
      }
    };

    const increaseView = () => {
      BaseURL.put(`api/books/book/${bookParam.bookId}/viewNumber`);
    };
    increaseView();
    getChapter();
  }, [bookParam.chapterId, bookParam.bookId]);

  return (
    <React.Fragment>
      {datas.chapterTitle.length > 0 && (
        <Wrapper>
          <Reading>
            <Title>{datas.chapterTitle}</Title>
            <div dangerouslySetInnerHTML={{ __html: datas.chapterContent }} />
          </Reading>
          <ToolBar onShowIndex={showIndexHandler} />
          {isShowIndex && (
            <ChaptersToolbar
              chapters={datas.chapters}
              bookId={bookParam.bookId}
              onHideIndex={hideIndexHandler}
            />
          )}
        </Wrapper>
      )}
    </React.Fragment>
  );
};

export default ReadingPage;

const Reading = styled.div`
  width: 50%;
  margin: 0 auto;
  line-height: 4rem;
  font-size: 1.6rem;
`;

const Title = styled.h2`
  margin-bottom: 3rem;
  text-align: center;
  margin-top: 3rem;
`;

const Wrapper = styled.main`
  display: flex;
  flex-direction: row;
`;
