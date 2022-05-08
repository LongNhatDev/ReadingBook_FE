import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ChaptersToolbar from "./chapterstoolbar";
import ToolBar from "./toolbar";

const ReadingPage = () => {
  const [datas, setDatas] = useState("");
  const [isShowIndex, setIsShowIndex] = useState(false);

  const showIndexHandler = () => {
    setIsShowIndex(true);
  };

  const hideIndexHandler = () => {
    setIsShowIndex(false);
  };

  console.log("In the Reading Page");
  async function getData() {
    const response = await fetch(
      "https://book-reader-27e5c-default-rtdb.asia-southeast1.firebasedatabase.app/chapters.json"
    );
    const data = await response.json();
    setDatas(data["-N0pk8URt8x0Cy7pMchj"].content);
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <Wrapper>
      <Reading>
        <h2>This is Otome Game Isekai</h2>
        <div dangerouslySetInnerHTML={{ __html: datas }} />
      </Reading>
      <ToolBar onShowIndex={showIndexHandler} />
      {isShowIndex && <ChaptersToolbar onHideIndex={hideIndexHandler} />}
    </Wrapper>
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
