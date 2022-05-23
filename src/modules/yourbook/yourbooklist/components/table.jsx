import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BtnBar from "./btnbar";

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

  let navigator = useNavigate();
  const moveToBookManagePageHandler = () => {
    const path = `${props.row.id}`;
    navigator(path);
  };

  return (
    <tr>
      <td>{props.index + 1}</td>
      <td onClick={moveToBookManagePageHandler} key="bcover">
        <Image src={props.row.cover} alt="cover of a book" />
      </td>
      {toArray(props.row).map((value) => (
        <td key={props.row.Id + Math.random().toString()}>{value}</td>
      ))}
      <td key="icon">
        <BtnBar onDetail={moveToBookManagePageHandler} />
      </td>
    </tr>
  );
};

const Table = (props) => {
  return (
    <TableCss>
      <thead>
        <tr>
          {props.headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.body.map((row, index) => (
          <Tr index={index} key={row.id} row={row} />
        ))}
      </tbody>
    </TableCss>
  );
};

export default Table;

const TableCss = styled.table`
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
