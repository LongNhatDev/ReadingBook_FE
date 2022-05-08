import React from "react";
import styled from "styled-components";
import Table from "./components/table";

const YourBookList = () => {
  const headers = [" ", "NAME", "STATE", "CHAPTERS", "VIEWS", "OPERATION"];
  const body = [
    {
      Id: "1",
      Name: "Skeleton Knight In Another World",
      State: "Ongoing",
      Chapters: 99,
      Views: 11111,
    },
    {
      Id: "2",
      Name: "Skeleton Knight In Another World",
      State: "Ongoing",
      Chapters: 99,
      Views: 11111,
    },
    {
      Id: "3",
      Name: "Skeleton Knight In Another World",
      State: "Ongoing",
      Chapters: 99,
      Views: 11111,
    },
    {
      Id: "4",
      Name: "Skeleton Knight In Another World",
      State: "Ongoing",
      Chapters: 99,
      Views: 11111,
    },
    {
      Id: "5",
      Name: "Skeleton Knight In Another World",
      State: "Ongoing",
      Chapters: 99,
      Views: 11111,
    },
    {
      Id: "6",
      Name: "Skeleton Knight In Another World",
      State: "Ongoing",
      Chapters: 99,
      Views: 11111,
    },
    {
      Id: "7",
      Name: "Skeleton Knight In Another World",
      State: "Ongoing",
      Chapters: 99,
      Views: 11111,
    },
    {
      Id: "8",
      Name: "Skeleton Knight In Another World",
      State: "Ongoing",
      Chapters: 99,
      Views: 11111,
    },
    {
      Id: "9",
      Name: "Skeleton Knight In Another World",
      State: "Ongoing",
      Chapters: 99,
      Views: 11111,
    },
    {
      Id: "10",
      Name: "Skeleton Knight In Another World",
      State: "Ongoing",
      Chapters: 99,
      Views: 11111,
    },
    {
      Id: "11",
      Name: "Skeleton Knight In Another World",
      State: "Ongoing",
      Chapters: 99,
      Views: 11111,
    },
    {
      Id: "12",
      Name: "Skeleton Knight In Another World",
      State: "Ongoing",
      Chapters: 99,
      Views: 11111,
    },
    {
      Id: "13",
      Name: "Skeleton Knight In Another World",
      State: "Ongoing",
      Chapters: 99,
      Views: 11111,
    },
    {
      Id: "14",
      Name: "Skeleton Knight In Another World",
      State: "Ongoing",
      Chapters: 99,
      Views: 11111,
    },
    {
      Id: "15",
      Name: "Skeleton Knight In Another World",
      State: "Ongoing",
      Chapters: 99,
      Views: 11111,
    },
  ];
  return (
    <Container>
      <Table headers={headers} body={body} />;
    </Container>
  );
};

export default YourBookList;

const Container = styled.div`
  width: 100%;
  padding: 5rem 10rem;
`;
