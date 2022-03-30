import styled from "styled-components";

const Logo = styled.div`
  width: 50%;
  height: 100%;
  background-color: #66d049;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  

  & p {
    color: #66d049;
    background-color: white;
    font-size: 50px;
    padding: 0 10px;
  box-shadow:  2px 2px 6px grey;

  }

  & span {
    color: white;
    font-size: 20px;
    
  }
`;

export default Logo;
