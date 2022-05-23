import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import ToolBar from "./toolbar";
import ChaptersToolbar from "./chapterstoolbar";
import { useParams } from "react-router-dom";
import MainContext from "../../../store/main-context";
import axios from "axios";

const ReadingPage = () => {
  const [datas, setDatas] = useState("");
  const [isShowIndex, setIsShowIndex] = useState(false);
  const mainCtx = useContext(MainContext);

  const showIndexHandler = () => {
    setIsShowIndex(true);
  };

  const hideIndexHandler = () => {
    setIsShowIndex(false);
  };
  const bookParam = useParams();
  let linkToChapter = "";
  let chapterTitle = "";
  let chapter = [];
  let book = [];
  const bookIndex = mainCtx.books.findIndex(
    (item) => item._id === bookParam.bookId
  );
  if (bookIndex >= 0) {
    book = mainCtx.books[bookIndex];
    const chapterIndex = book.chapters.findIndex(
      (item) => item._id === bookParam.chapterId
    );
    if (chapterIndex >= 0) {
      chapter = book.chapters[chapterIndex];
      linkToChapter = chapter.contentLink;
      chapterTitle = chapter.title;
      console.log(linkToChapter);
    }
  }

  useEffect(() => {
    console.log("reading run again");
    async function getChapter() {
      if (linkToChapter.length > 0) {
        const res = await axios.get(linkToChapter);
        const data = res.data;
        console.log(data);
        setDatas(data);
      } else {
        console.log("empty");
      }
    }
    getChapter();
  }, [linkToChapter]);
  return (
    <React.Fragment>
      {datas.length > 0 && (
        <Wrapper>
          <Reading>
            <h2>{chapterTitle}</h2>
            <div dangerouslySetInnerHTML={{ __html: datas }} />
          </Reading>
          <ToolBar onShowIndex={showIndexHandler} />
          {isShowIndex && (
            <ChaptersToolbar
              chapters={book.chapters}
              bookId={book._id}
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

const Wrapper = styled.main`
  display: flex;
  flex-direction: row;
`;
