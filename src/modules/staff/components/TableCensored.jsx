import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { authentication } from "../../../authProvider";
import ButtonsCensored from "./ButtonCencored";

const Tr = (props) => {
  const toArray = (item) => {
    const newArr = [];
    for (const x in item) {
      if (x !== "id" && x !== "cover") {
        newArr.push(item[x]);
      }
    }
    return newArr;
  };

  let navigate = useNavigate();
  const [idOfBookWasChosen, setIdOfBookWasChosen] = React.useState(
    props.row.id
  );
  const moveToBookManagePageHandler = () => {
    // ok
    const path = `/books/${props.row.id}`;
    navigate(path);
  };

  return (
    <tr
      style={{
        boxShadow: "0 0.4rem 0.4rem rgba(0, 0, 0, 0.25)",
      }}
      onClick={() => {
        setIdOfBookWasChosen(props.row.id);
      }}
    >
      <td>
        <p
          style={{
            fontSize: "2.5rem",
            minWidth: "3rem",
            backgroundColor: "#00a69d",
            color: "white",
            height: "4rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "0.5rem",
          }}
        >
          {props.index + 1}
        </p>
      </td>
      <td onClick={moveToBookManagePageHandler} key="bcover">
        <Image src={props.row.cover} alt="cover of a book" />
      </td>
      {toArray(props.row).map((value) => (
        <td key={props.row.Id + Math.random().toString()}>{value}</td>
      ))}
      <td key="icon">
        <ButtonsCensored id={idOfBookWasChosen} />
      </td>
    </tr>
  );
};

const TableCensored = (props) => {
  const auth = useContext(authentication);
  return (
    <Box>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Books Censored</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h4>{auth.fullName}</h4>
          <ImageAva src={auth.avatar} alt="avatar of user" />
        </div>
      </div>
      <TableCss style={{ backgroundColor: "white" }}>
        <thead>
          <TitleRow>
            {props.headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </TitleRow>
        </thead>
        <tbody>
          {props.body.map((row, index) => (
            <Tr index={index} key={row.id} row={row} />
          ))}
        </tbody>
      </TableCss>
    </Box>
  );
};

export default TableCensored;

const Box = styled.div`
  display: flex;
  flex-flow: column;
  width: 82%;
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

const Image = styled.img`
  width: 9rem;
  height: 12rem;
  object-fit: cover;
  border: 1px solid rgba(0, 0, 0, 0.5);
  box-shadow: 10px -5px 10px 0 rgba(0, 0, 0, 0.3);
`;

const TitleRow = styled.tr`
  background-color: #363740;
  color: white;
  font-size: 2rem;
`;

const ImageAva = styled.img`
  width: 44px;
  height: 44px;
  object-fit: cover;
  border-radius: 100rem;
  border: 2px solid white;
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.15);
  margin-left: 1rem;
`;
