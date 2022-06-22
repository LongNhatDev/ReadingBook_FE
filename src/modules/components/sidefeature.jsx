import React, { useState } from "react";
import styled from "styled-components";
import {
  BsSuitHeart,
  BsStarFill,
  BsListUl,
  BsShare,
} from "react-icons/bs";
import { FaEye } from "react-icons/fa"
import ChaptersToolbar from "../bookpage/components/chapterstoolbar";
import Review from "./review";

const SideFeature = (props) => {
  const [isShowIndex, setIsShowIndex] = useState(false);
  const [isShowRating, setIsShowRating] = useState(false);

  const showRatingHandler = () => {
    setIsShowRating(true);
  };
  const hideRatingHandler = () => {
    setIsShowRating(false);
  };
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
          <Text>{props.book.followTotal} followers</Text>
        </Item>
        <Item onClick={showRatingHandler}>
          <Rating>
            <IconStar style={{ color: "yellow" }}>
              <BsStarFill />
            </IconStar>
          </Rating>
          <Text>
            {props.book.avrStarNumber !== undefined &&
              props.book.avrStarNumber.toFixed(2)}
          </Text>
        </Item>
        <Item onClick={showIndexHandler}>
          <span style={{ color: "black" }}>
            <BsListUl />
          </span>
          <Text>Index</Text>
        </Item>
        <Item>
          <span style={{ color: "green" }}>
            <FaEye />
          </span>
          <Text>{props.book.viewNumber} views</Text>
        </Item>
        <Item>
          <span style={{ color: "blue" }}>
            <BsShare />
          </span>
          <Text>Share</Text>
        </Item>
      </Row>
      {isShowRating && (
        <Review
          onUpdate={props.onUpdate}
          bookId={props.book._id}
          onHideIndex={hideRatingHandler}
        />
      )}
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
  position: relative;
  & span {
    display: block;
    font-size: 3rem;
    text-align: center;
  }
`;

const Rating = styled.div``;
const IconStar = styled.span`
  display: block;
  font-size: 3rem;
  text-align: center;
`;

const Text = styled.div`
  font-size: 1.6rem;
  text-align: center;
  font-weight: bold;
`;
