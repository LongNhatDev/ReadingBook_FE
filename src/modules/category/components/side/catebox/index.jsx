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
  width: 20rem;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  margin-top: 5rem;
  flex-wrap: wrap;
  align-items: center;
`;
const Links = styled(Link)`
  &.invalid {
    background-color: #3b66f5;
    color: white;
  }
  display: inline-block;
  width: calc(50% - 20px);
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
    background-color: #3b66f5;
  }
`;
