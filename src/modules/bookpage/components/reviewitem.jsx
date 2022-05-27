import React from "react";
import styled from "styled-components";
import { showSuccessToaster } from "../../../components/Toaster";
import { BaseURL } from "../../AxiosInstance";
import ReviewStar from "./reviewstar";

const ReviewItem = (props) => {
  const dateReview = new Date(props.review.createdAt);
  const month = dateReview.toLocaleString("en-US", { month: "long" });
  const day = dateReview.toLocaleString("en-US", { day: "2-digit" });
  const year = dateReview.getFullYear();
  const dateReviewTransform = month + " " + day + ", " + year;

  const deleteReviewHandler = async () => {
    try {
      await BaseURL.delete(
        `api/reviews/${props.review._id}/book/${props.bookId}`,
        {
          headers: {
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjUxMzZjM2JkNjAwMzFhMTM1ZjAyMSIsImlhdCI6MTY1MjY4Nzc2NiwiZXhwIjoxNjU1Mjc5NzY2fQ.Mn-j3D-KUVz1UDGQniyT6OhxAGDdJr-RheoOj9XZjQs",
          },
        }
      );
      props.onUpdate();
      showSuccessToaster("Delete Succesfully");
    } catch (err) {
      console.log("error occurs", err);
    }
  };

  return (
    <Item>
      <UserAvatar src={props.review.user.avatar} alt="avatar of a user" />
      <ReviewStatus>
        <DateReview>{dateReviewTransform}</DateReview>
        <Name>{props.review.user.fullName}</Name>
        <DeleteButton onClick={deleteReviewHandler}>Delete</DeleteButton>
      </ReviewStatus>
      <ReviewDetail>
        <ReviewStar amount={props.review.starNumber} />
        <ReviewComment>{props.review.comment}</ReviewComment>
      </ReviewDetail>
    </Item>
  );
};

export default ReviewItem;

const Item = styled.div`
  display: flex;
  width: 70rem;
  &:not(:first-child) {
    border-top: 1px solid rgba(0, 0, 0, 0.2);
  }
  height: 10rem;
`;

const UserAvatar = styled.img`
  width: 5rem;
  height: 5rem;
  overflow: hidden;
  object-fit: cover;
  border-radius: 100rem;
  flex-shrink: 0;
  align-self: center;
`;

const ReviewStatus = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
  width: 20rem;
  align-items: center;
  justify-content: center;
`;

const Name = styled.strong``;

const DeleteButton = styled.button`
  color: red;
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const ReviewDetail = styled.div`
  flex: 1;
  padding: 1rem 2rem;
`;

const ReviewComment = styled.p`
  font-size: 1.6rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
`;

const DateReview = styled.span``;
