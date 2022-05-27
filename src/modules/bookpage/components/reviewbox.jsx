import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BaseURL } from "../../AxiosInstance";
import ReviewItem from "./reviewitem";

const ReviewBox = (props) => {
  const [review, setReview] = useState([]);
  console.log("review book again");
  useEffect(() => {
    const getReview = async () => {
      try {
        const res = await BaseURL.get(`api/reviews/${props.bookId}`);
        setReview(res.data);
      } catch (err) {
        console.log("error occur", err);
      }
    };
    getReview();
  }, [props.bookId, props.isUpdated]);

  return (
    <Container>
      {review.map((item) => (
        <ReviewItem
          onUpdate={props.onUpdate}
          isUpdated={props.isUpdated}
          key={item._id}
          bookId={props.bookId}
          review={item}
        />
      ))}
    </Container>
  );
};

export default ReviewBox;

const Container = styled.div`
  width: 60%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 2rem 4rem;
  margin: 5rem auto;
  max-height: 40rem;
  overflow-y: scroll;
`;
