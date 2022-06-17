import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserNav from "../components/usernav";

const Tr = (props) => {
  let navigator = useNavigate();

  const moveToBookManagePageHandler = () => {
    const path = `books/${props.row._id}`;
    navigator(path);
  };

  return (
    <TrCustom>
      {/* STT */}
      <td>
        <PCustom>{props.index + 1}</PCustom>
      </td>
      {/* Book Cover */}
      <td onClick={moveToBookManagePageHandler} key="bcover">
        <Image src={props.row.coverImageURL} alt="cover of a book" />
      </td>

      {/* Infor of Book */}
      <td>{props.row.bookName}</td>
      <td>ONGONG</td>
      <td>{props.row.chapters.length}</td>
      <td>{props.row.viewNumber}</td>
    </TrCustom>
  );
};

const SearchBook = () => {
  const location = useLocation();
  const headers = [
    "No.",
    "Cover Image",
    "Name of Book",
    "Status",
    "Chapters",
    "Views",
  ];

  return (
    <>
      <UserNav />
      <Container>
        <TableCss style={{ backgroundColor: "white" }}>
          <thead>
            <TitleRow>
              {headers.map((header) => (
                <th key={header}>{header}</th>
              ))}
            </TitleRow>
          </thead>
          <tbody>
            {location.state.array.map((row, index) => (
              <Tr index={index} key={row._id} row={row} />
            ))}
          </tbody>
        </TableCss>
      </Container>
    </>
  );
};

export default SearchBook;

const Container = styled.div`
  width: 100%;
  min-height: 82.5rem;
  padding: 3% 5%;
  background-color: #ecebeb;
`;

const TableCss = styled.table`
  box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  border-radius: 0.7rem;
  width: 100%;
  font-size: 1.6rem;
  border-collapse: collapse;
  & td {
    border-top: 1px solid rgba(0, 0, 0, 0.2);
    text-align: center;
    padding: 1rem 2rem;
  }

  & th {
    padding: 1rem 2rem;
  }
  & tr {
    cursor: pointer;
  }

  & tbody tr:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const TitleRow = styled.tr`
  background-color: #00a69d;
  height: 6rem;
  color: white;
  font-size: 2rem;
`;

const Image = styled.img`
  width: 9rem;
  height: 12rem;
  object-fit: cover;
  border: 1px solid rgba(0, 0, 0, 0.5);
  box-shadow: 10px -5px 10px 0 rgba(0, 0, 0, 0.3);
`;

const PCustom = styled.p`
  font-size: 2.5rem;
  min-width: 3rem;
  background-color: #00a69d;
  color: white;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
`;

const TrCustom = styled.tr`
  box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
`;
