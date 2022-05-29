import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Table from "./components/table";
import { BaseURL } from "../../AxiosInstance";

const YourBookList = () => {
  const token = localStorage.getItem("token");
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
      const res = await BaseURL.get("api/books/author", {
        method: "GET",
        headers: {
          Authorization: token,

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
  padding: 3% 5%;
`;
