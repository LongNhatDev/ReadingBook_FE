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
        const res = await BaseURL.get(`api/books/${props.bookId}/reviews/`);
        setReview(res.data);
      } catch (err) {
        console.log("error occur", err);
      }
    };
    getReview();
  }, [props.bookId, props.isUpdated]);

  return (
    <Container>
      {review.length > 0 ? (
        review.map((item) => (
          <ReviewItem
            onUpdate={props.onUpdate}
            isUpdated={props.isUpdated}
            key={item._id}
            bookId={props.bookId}
            review={item}
          />
        ))
      ) : (
        <h2 style={{ textAlign: "center" }}>There's no review</h2>
      )}
    </Container>
  );
};

export default ReviewBox;

const Container = styled.div`
  width: 79%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 2rem 4rem;
  margin: 5rem auto;
  max-height: 40rem;
  overflow-y: scroll;

`;
