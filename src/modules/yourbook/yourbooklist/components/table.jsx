import React from "react";
import styled from "styled-components";
import BtnBar from "./btnbar";

const Tr = (props) => {
  const toArray = (item) => {
    const newArr = [];
    for (const x in item) {
      if (x !== "Id") {
        newArr.push(item[x]);
      }
    }
    return newArr;
  };

  return (
    <tr>
      <td key="bcover">
        <Image
          src="https://i0.wp.com/wp-corp.qoo-app.com/en/wp-content/uploads/sites/3/2021/04/21042004284294.jpeg?resize=506%2C640&ssl=1"
          alt="cover"
        />
      </td>
      {toArray(props.row).map((value) => (
        <td key={props.row.Id + Math.random().toString()}>{value}</td>
      ))}
      <td key="icon">
        <BtnBar />
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
        {props.body.map((row) => (
          <Tr key={"id" + row.Id} row={row} />
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
