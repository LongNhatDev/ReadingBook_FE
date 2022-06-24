import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Table from "./components/table";
import { BaseURL } from "../../AxiosInstance";
import { authentication } from "../../../authProvider";

const YourBookList = () => {
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
      const authorization = {
        headers: {
          Authorization: token,
        },
      };
      const res = await BaseURL.get("api/books/author", authorization);
      const transformedBook = res.data.map((book) => ({
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
      <Table headers={headers} body={body} />
    </Container>
  );
};

export default YourBookList;

const Container = styled.div`
  width: 100%;
  min-height: 82.5rem;
  padding: 3% 5%;
  background-color: #ecebeb;
`;
