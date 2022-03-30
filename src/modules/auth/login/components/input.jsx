import styled from "styled-components";

const Input = styled.input`
  border: 2px solid #dddddd;
  line-height: 40px;
  width: 60%;
  border-radius: 5px;
  margin: 10px 0 5px;
  padding-left: 5px;

  :hover {
    border: 2px solid blue;
  }
  &.invalid {
    border: 2px solid red !important;
    color: red;
  }
`;

export default Input;
