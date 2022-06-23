import React, { useState, useEffect } from "react";
import { BaseURL } from "../../AxiosInstance";
import styled from "styled-components";
import Content from "../components/content";
import AnalyticsChart from "../components/Chart/AnalyticsChart";

const BookAnalytics = () => {
  const now = new Date();
  const month = now.toLocaleString("default", { month: "short" });
  const [filter, setFilter] = useState(month);
  const dailyDataPoints = [
    {
      label: "Jan",
      value: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
      ],
    },
    {
      label: "Feb",
      value: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
      ],
    },
    {
      label: "Mar",
      value: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
      ],
    },
    {
      label: "Apr",
      value: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
      ],
    },
    {
      label: "May",
      value: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
      ],
    },
    {
      label: "Jun",
      value: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
      ],
    },
    {
      label: "Jul",
      value: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
      ],
    },
    {
      label: "Aug",
      value: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
      ],
    },
    {
      label: "Sep",
      value: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
      ],
    },
    {
      label: "Oct",
      value: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
      ],
    },
    {
      label: "Nov",
      value: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
      ],
    },
    {
      label: "Dec",
      value: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
      ],
    },
  ];
  const [allDate, setAllDate] = useState([]);

  const filterChangeHandler = (event) => {
    setFilter(event.target.value);
  };

  useEffect(() => {
    async function getAllBook() {
      try {
        const res = await BaseURL.get("api/books");
        const transformData = res.data.map((book) => {
          return new Date(book.createdAt);
        });
        setAllDate(transformData);
      } catch (err) {
        console.log(err);
      }
    }
    getAllBook();
  }, []);
  if (allDate.length > 0) {
    for (const date of allDate) {
      dailyDataPoints[date.getMonth()].value[date.getDate() - 1] += 1;
    }
  }
  const monthsDataPoint = dailyDataPoints.map((month) =>
    month.value.reduce((pre, cur) => pre + cur, 0)
  );

  const filterValue = dailyDataPoints.find((item) => item.label === filter);

  return (
    <Content header="BOOK ANALYTICS">
      <CardContainer>
        <Card>
          <span>Total:</span>
          <TotalUser>50</TotalUser>
        </Card>
        <Card>
          <span>New: </span>
          <NewUser>50</NewUser>
        </Card>
        <Card>
          <span>Delete:</span>
          <DeleteUser>50</DeleteUser>
        </Card>
      </CardContainer>
      <SelectChart value={filter} onChange={filterChangeHandler}>
        <option>All</option>
        <option>Jan</option>
        <option>Feb</option>
        <option>Mar</option>
        <option>Apr</option>
        <option>May</option>
        <option>Jun</option>
        <option>Jul</option>
        <option>Aug</option>
        <option>Sep</option>
        <option>Oct</option>
        <option>Nov</option>
        <option>Dec</option>
      </SelectChart>
      {filter !== "All" && (
        <AnalyticsChart label="Book" isLine={true} data={filterValue.value} />
      )}
      {filter === "All" && (
        <AnalyticsChart label="Book" data={monthsDataPoint} />
      )}
    </Content>
  );
};

export default BookAnalytics;

const TotalUser = styled.span`
  font-size: 3rem;
`;

const NewUser = styled.span`
  font-size: 3rem;
  color: #22d312;
`;
const DeleteUser = styled.span`
  font-size: 3rem;
  color: #f70808;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin: 0 auto;
`;
const Card = styled.div`
  padding: 1rem 0;
  width: 13rem;
  height: 6rem;
  border: 2px solid white;
  box-shadow: 0 0 0 2px #dfe0eb;
  border-radius: 2rem;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const SelectChart = styled.select`
  display: inline-block;
  width: 5rem;
  border-radius: 8px;
  position: absolute;
  top: 9rem;
  right: 2rem;
`;
