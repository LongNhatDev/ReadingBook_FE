import React from "react";
import styled from "styled-components";
import { BsStar, BsStarFill } from "react-icons/bs";

const ReviewStar = (props) => {
  const createStarArray = () => {
    let arr = [];
    for (let i = 0; i < 5; i++) {
      if (i < props.amount) {
        arr.push(1);
      } else {
        arr.push(0);
      }
    }
    return arr;
  };

  const starArr = createStarArray();
  return (
    <Container>
      {starArr.map((item, index) => {
        if (item === 1) {
          return (
            <span key={index} style={{ color: "yellow" }}>
              <BsStarFill />
            </span>
          );
        } else {
          return (
            <span key={index}>
              <BsStar style={{ color: "yellow" }} />
            </span>
          );
        }
      })}
    </Container>
  );
};

export default ReviewStar;

const Container = styled.div``;
