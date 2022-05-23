import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Table from "./components/table";
import { BaseURL } from "../../AxiosInstance";

const YourBookList = () => {
  const [body, setBody] = useState([]);
  const headers = [
    "NO",
    "COVER",
    "NAME",
    "STATE",
    "CHAPTERS",
    "VIEWS",
    "OPERATION",
  ];
  useEffect(() => {
    const getBook = async () => {
      const res = await BaseURL.get("api/books/author", {
        method: "GET",
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjUxMzZjM2JkNjAwMzFhMTM1ZjAyMSIsImlhdCI6MTY1MDkxNTM4MywiZXhwIjoxNjUzNTA3MzgzfQ.sc8Ob9eTfk_onCrZim57m1I1V0RIKbZjDPJNGALJn_U",
        },
      });
      const transformedBook = res.data.map((book) => ({
        cover: book.coverImageURL,
        id: book._id,
        name: book.bookName,
        state: "ONGOING",
        chapters: book.chapters.length,
        views: book.viewNumber,
      }));
      setBody(transformedBook);
    };
    getBook();
  }, []);
  return (
    <Container>
      <Table headers={headers} body={body} />
    </Container>
  );
};

export default YourBookList;

const Container = styled.div`
  width: 100%;
  padding: 5rem 10rem;
`;
