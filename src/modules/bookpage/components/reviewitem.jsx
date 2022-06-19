import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import { authentication } from "../../../authProvider";
import ConfirmBox from "../../../components/ConfirmBox";
import {
  showErrorToaster,
  showSuccessToaster,
} from "../../../components/Toaster";
import { BaseURL } from "../../AxiosInstance";
import ReviewStar from "./reviewstar";

const ReviewItem = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const dateReview = new Date(props.review.createdAt);
  const month = dateReview.toLocaleString("en-US", { month: "long" });
  const day = dateReview.toLocaleString("en-US", { day: "2-digit" });
  const year = dateReview.getFullYear();
  const dateReviewTransform = month + " " + day + ", " + year;
  const context = useContext(authentication);
  const token = context.accessToken;

  const handleDeleteComment = async () => {
    try {
      await BaseURL.delete(
        `api/books/${props.bookId}/reviews/${props.review._id}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      props.onUpdate();
      showSuccessToaster("Delete Succesfully");
      setIsOpen(false);
    } catch (err) {
      showErrorToaster("Delete Fail");
    }
  };

  return (
    <Item>
      <UserAvatar src={props.review.user.avatar} alt="avatar of a user" />
      <ReviewStatus>
        <DateReview>{dateReviewTransform}</DateReview>
        <Name>{props.review.user.fullName}</Name>
        <DeleteButton
          onClick={() => {
            setIsOpen(true);
          }}
        >
          Delete
        </DeleteButton>
      </ReviewStatus>
      <ReviewDetail>
        <ReviewStar amount={props.review.starNumber} />
        <ReviewComment>{props.review.comment}</ReviewComment>
      </ReviewDetail>
      <ConfirmBox
        isOpen={isOpen}
        header="DELETE COMMENT"
        message="Do you want to delete this comment ?"
        onCancel={() => {
          setIsOpen(false);
        }}
        onConfirm={handleDeleteComment}
      />
    </Item>
  );
};

export default ReviewItem;

const Item = styled.div`
  display: flex;
  width: 100%;
  &:not(:first-child) {
    border-top: 1px solid rgba(0, 0, 0, 0.2);
  }
  height: 10rem;
`;

const UserAvatar = styled.img`
  width: 7rem;
  height: 7rem;
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

const Name = styled.strong`
  font-size: 2rem;
`;

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
