import styled from "styled-components";

const Item = styled.li`
  display: flex;
  align-items: center;
  font-weight: bold;
  cursor: pointer;
  transition-duration: 0.5s;
  :hover {
    text-decoration: underline;
  }
`;

export default Item;
