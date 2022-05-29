import React, { useState, useRef } from "react";
import styled from "styled-components";
import { BsStarFill } from "react-icons/bs";
import Modal from "./modal";
import Button from "../components/button";
import { BaseURL } from "../AxiosInstance";
import { showErrorToaster, showSuccessToaster } from "../../components/Toaster";

const Review = (props) => {
  const [color, setColor] = useState([
    "white",
    "white",
    "white",
    "white",
    "white",
  ]);

  const inputRef = useRef();

  const getStars = () => {
    let countStars = 0;
    for (let i = 0; i < color.length; i++) {
      if (color[i] === "yellow") {
        countStars++;
      }
    }
    return countStars;
  };

  const saveReviewHandler = async () => {
    const reviews = {
      comment: inputRef.current.value,
      starNumber: getStars(),
    };
    try {
      await BaseURL.post(`api/books/${props.bookId}/reviews`, reviews, {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjUxMzZjM2JkNjAwMzFhMTM1ZjAyMSIsImlhdCI6MTY1MjY4Nzc2NiwiZXhwIjoxNjU1Mjc5NzY2fQ.Mn-j3D-KUVz1UDGQniyT6OhxAGDdJr-RheoOj9XZjQs",
        },
      });
      props.onUpdate();
      showSuccessToaster("Save review successfuly");
    } catch (err) {
      console.log("error occurs", err);
      showErrorToaster("Error occurs");
    }
  };

  const oneStarHandler = () => {
    setColor(["yellow", "white", "white", "white", "white"]);
  };
  const twoStarHandler = () => {
    setColor(["yellow", "yellow", "white", "white", "white"]);
  };
  const threeStarHandler = () => {
    setColor(["yellow", "yellow", "yellow", "white", "white"]);
  };
  const fourStarHandler = () => {
    setColor(["yellow", "yellow", "yellow", "yellow", "white"]);
  };
  const fiveStarHandler = () => {
    setColor(["yellow", "yellow", "yellow", "yellow", "yellow"]);
  };
  return (
    <Modal onHideIndex={props.onHideIndex}>
      <Container>
        <Title>RATE THIS BOOK</Title>
        <StarContainer>
          <FiveStar onClick={fiveStarHandler} starColor={color[4]}>
            <BsStarFill />
          </FiveStar>
          <FourStar onClick={fourStarHandler} starColor={color[3]}>
            <BsStarFill />
          </FourStar>
          <ThreeStar onClick={threeStarHandler} starColor={color[2]}>
            <BsStarFill />
          </ThreeStar>
          <TwoStar onClick={twoStarHandler} starColor={color[1]}>
            <BsStarFill />
          </TwoStar>
          <OneStar onClick={oneStarHandler} starColor={color[0]}>
            <BsStarFill />
          </OneStar>
        </StarContainer>
        <Input ref={inputRef} maxLength="512" />
        <SaveButton onClick={saveReviewHandler}>Save</SaveButton>
      </Container>
    </Modal>
  );
};

export default Review;

const Container = styled.div`
  height: 40rem;
  width: 50vw;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  padding: 2rem 0;
`;

const StarContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 50%;
  & span {
    font-size: 4rem;
    width: 20%;
    padding: 0 6px;
  }
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
`;

const OneStar = styled.span`
  color: ${(props) => props.starColor};
  &:hover {
    color: yellow;
  }
  cursor: pointer;
`;

const TwoStar = styled.span`
  color: ${(props) => props.starColor};
  &:hover,
  &:hover ~ ${OneStar} {
    color: yellow;
  }
  cursor: pointer;
`;

const ThreeStar = styled.span`
  color: ${(props) => props.starColor};
  &:hover,
  &:hover ~ ${OneStar}, &:hover ~ ${TwoStar} {
    color: yellow;
  }
  cursor: pointer;
`;
const FourStar = styled.span`
  color: ${(props) => props.starColor};
  &:hover,
  &:hover ~ ${OneStar}, &:hover ~ ${TwoStar}, &:hover ~ ${ThreeStar} {
    color: yellow;
  }
  cursor: pointer;
`;
const FiveStar = styled.span`
  color: ${(props) => props.starColor};
  &:hover,
  &:hover
    ~ ${OneStar},
    &:hover
    ~ ${TwoStar},
    &:hover
    ~ ${ThreeStar},
    &:hover
    ~ ${FourStar} {
    color: yellow;
  }
  cursor: pointer;
`;

const Input = styled.textarea`
  font-size: 1.8rem;
  width: 80%;
  height: 15rem;
  border: 2px solid rgba(0, 0, 0, 0.2);
  overflow: hidden;
  resize: none;
  margin-top: auto;
  margin-bottom: 2rem;
  padding: 1rem;
  border-radius: 10px;
`;

const SaveButton = styled(Button)`
  margin-bottom: 2rem;
`;
