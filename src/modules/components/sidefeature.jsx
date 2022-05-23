import React, { useState } from "react";
import styled from "styled-components";
import {
  BsSuitHeart,
  BsStar,
  BsChatSquareText,
  BsListUl,
  BsShare,
} from "react-icons/bs";
import ChaptersToolbar from "../bookpage/components/chapterstoolbar";

const SideFeature = (props) => {
  const [isShowIndex, setIsShowIndex] = useState(false);
  const showIndexHandler = () => {
    setIsShowIndex(true);
  };
  const hideIndexHandler = () => {
    setIsShowIndex(false);
  };
  return (
    <React.Fragment>
      <Row>
        <Item>
          <span style={{ color: "red" }}>
            <BsSuitHeart />
          </span>
          <Text>1000 followers</Text>
        </Item>
        <Item>
          <span style={{ color: "yellow" }}>
            <BsStar />
          </span>
          <Text>4.91</Text>
        </Item>
        <Item onClick={showIndexHandler}>
          <span style={{ color: "black" }}>
            <BsListUl />
          </span>
          <Text>Index</Text>
        </Item>
        <Item>
          <span style={{ color: "green" }}>
            <BsChatSquareText />
          </span>
          <Text>Comments</Text>
        </Item>
        <Item>
          <span style={{ color: "blue" }}>
            <BsShare />
          </span>
          <Text>Share</Text>
        </Item>
      </Row>
      {isShowIndex && (
        <ChaptersToolbar
          onHideIndex={hideIndexHandler}
          chapters={props.book.chapters}
          bookId={props.book._id}
        />
      )}
    </React.Fragment>
  );
};

export default SideFeature;

const Row = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  margin-top: auto;
`;

const Item = styled.div`
  width: 12rem;
  cursor: pointer;
  border-radius: 4px;
  & span {
    display: block;
    font-size: 3rem;
    text-align: center;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
const Text = styled.div`
  font-size: 1.6rem;
  text-align: center;
  font-weight: bold;
`;
