import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { authentication } from "../../../authProvider";
import { showErrorToaster } from "../../../components/Toaster";
import { BaseURL } from "../../AxiosInstance";
import BookDetail from "../../components/bookdetail";
import ReviewBox from "../components/reviewbox";

const DetailPage = () => {
  const token = useContext(authentication);

  const [book, setBook] = useState({});
  const link = useParams("bookId");
  const bookId = link.bookId;
  const [isUpdated, setIsUpdated] = useState(false);
  const toggleUpdate = () => {
    setIsUpdated((prevStatus) => !prevStatus);
  };

  useEffect(() => {
    async function getABook() {
      try {
        const authorization = {
          headers: {
            Authorization: token.accessToken,
          },
        };
        const res = await BaseURL.get(
          `api/books/book/${bookId}`,
          authorization
        );
        if (res !== undefined || res !== null) {
          const data = res.data;
          setBook(data);
        } else {
          showErrorToaster("Serve not respone!");
        }
      } catch (err) {
        showErrorToaster("Error: ", err);
        console("some err ocurr in detailpage");
      }
    }
    getABook();
  }, [bookId, isUpdated]);

  return (
    <div
      style={{ padding: "20px 0", marginLeft: `${token.roles > 1 ? 12 : 0}%` }}
    >
      {book._id !== undefined && (
        <BookDetail onUpdate={toggleUpdate} book={book} />
      )}
      {book._id !== undefined && (
        <ReviewBox
          isUpdated={isUpdated}
          onUpdate={toggleUpdate}
          bookId={book._id}
        />
      )}
    </div>
  );
};

export default DetailPage;
