import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { categoryData } from "../../../../../categories-data";

const CateBox = (props) => {
  return (
    <Wrapper>
      {categoryData.map((category) => (
        <Links
          className={category.cateId === props.selected && "invalid"}
          key={category.cateId}
          to={category.cateLink}
        >
          {category.cateContent}
        </Links>
      ))}
    </Wrapper>
  );
};

export default CateBox;

const Wrapper = styled.div`
  width: 15rem;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;
const Links = styled(Link)`
  &.invalid {
    background-color: #00a69d;
    color: white;
  }
  display: inline-block;
  width: 10rem;
  margin: 10px;
  line-height: 2.4rem;
  padding-top: 5px;
  padding-bottom: 5px;
  text-decoration: none;
  color: #121217;
  font-size: 1.6rem;
  text-align: center;
  transition: all 0.2s linear;
  border-radius: 4px;
  &:hover {
    color: white;
    background-color: #00a69d;
  }
`;
