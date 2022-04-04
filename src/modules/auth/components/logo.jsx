import styled from "styled-components";

const Logo = styled.div`
  width: 50%;
  height: 100%;
  background-image: linear-gradient(
    to right,
    #051937,
    #004468,
    #00748c,
    #00a69d,
    #68d69d
  );

  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;

  & p {
    color: #051937;
    background-color: white;
    font-size: 50px;
    /* font-weight: bold; */
    padding: 0 10px;
    box-shadow: 2px 2px 6px grey;
  }

  & span {
    margin-top: 5px;
    color: white;
    font-size: 20px;
    font-weight: bold;
  }
`;

export default Logo;
