import styled from "styled-components";

const Form = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;

  & h1 {
    color: #68D69D;
    padding-bottom: 15px;
    font-weight: bold;
  }

  & a {
    text-decoration: none;
    color: #444444;
    font-size: 16px;
    margin-top: 10px;
  }
`;

export default Form;
