import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { showErrorToaster } from "../../../components/Toaster";
import { BaseURL } from "../../AxiosInstance";
import BookDetail from "../../components/bookdetail";

const DetailPage = () => {
  const [book, setBook] = useState({});
  const link = useParams("bookId");
  const bookId = link.bookId;

  useEffect(() => {
    console.log("run in detailpage");
    async function getABook() {
      try {
        const res = await BaseURL.get(`api/books/book/${bookId}`);
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
  }, [bookId]);

  return (
    <React.Fragment>
      {book._id !== undefined && <BookDetail book={book} />}
    </React.Fragment>
  );
};

export default DetailPage;
