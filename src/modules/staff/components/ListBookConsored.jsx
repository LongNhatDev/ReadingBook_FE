import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { BaseURL } from "../../AxiosInstance";
import { authentication } from "../../../authProvider";
import TableCensored from "./TableCensored";

const ListBookConsored = () => {
  const context = useContext(authentication);
  const token = context.accessToken;
  const [body, setBody] = useState([]);
  const headers = [
    "No.",
    "Cover Image",
    "Name of Book",
    "Status",
    "Chapters",
    "Views",
    "Actions",
  ];
  useEffect(() => {
    const getBook = async () => {
      // ok
      const res = await BaseURL.get(
        "api/books/accepted-books?pageSize=100&pageNumber=1&sort=desc&typeSort=acceptedDate",
        {
          method: "GET",
          headers: {
            Authorization: token,
          },
        }
      );
      const transformedBook = res.data.books.map((book) => ({
        cover: book.coverImageURL,
        id: book._id,
        name: book.bookName,
        state: book.status,
        chapters: book.chapters.length,
        views: book.viewNumber,
      }));
      setBody(transformedBook);
    };
    getBook();
  }, [token]);

  return (
    <Container>
      <TableCensored headers={headers} body={body} />
    </Container>
  );
};

export default ListBookConsored;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  min-height: 82.5rem;
  padding: 2% 3%;
  background-color: #ecebeb;
`;
