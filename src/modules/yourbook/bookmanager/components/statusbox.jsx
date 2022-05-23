import React from "react";
import styled from "styled-components";

const StatusBox = (props) => {
  return (
    <Box>
      <Item>
        <Header>STATUS</Header>
        <span>Ongoing</span>
      </Item>
      <Item>
        <Header>CHAPTERS</Header>
        <span>{props.chapters}</span>
      </Item>
      <Item>
        <Header>VIEWS</Header>
        <span>{props.views}</span>
      </Item>
      <Item>
        <Header>RATING</Header>
        <span>{props.rating}</span>
      </Item>
    </Box>
  );
};

export default StatusBox;

const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 3rem 0;
  margin-top: auto;
`;

const Item = styled.div`
  letter-spacing: 1px;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 500;
  & span {
    letter-spacing: normal;
    color: black;
    font-weight: normal;
  }
  width: calc(25% - 1rem);
  padding: 0 0.5rem;
  text-align: center;
`;

const Header = styled.div``;
