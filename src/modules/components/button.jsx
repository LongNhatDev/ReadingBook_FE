import styled from "styled-components";

const Button = styled.button`
  width: 170px;
  line-height: 40px;
  background-color: #68d69d;
  border-radius: 6px;
  color: white;
  border: 0.3px solid #57ba87;
  font-size: 16px;
  font-weight: bold;
  box-shadow: 2px 2px 6px grey;
  margin-top: 10px;
  transition: 0.5s;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  z-index: 1;
  text-transform: uppercase;
  .cancel {
    background-color: red !important;
  }
  ::after,
  ::before {
    content: "";
    display: block;
    height: 100%;
    width: 100%;
    transform: skew(90deg) translate(-50%, -50%);
    position: absolute;
    inset: 50%;
    left: 25%;
    z-index: -1;
    transition: 0.5s ease-out;
    background-color: white;
  }
  ::before {
    top: -50%;
    left: -25%;
    transform: skew(90deg) rotate(180deg) translate(-50%, -50%);
  }
  :hover::before {
    transform: skew(45deg) rotate(180deg) translate(-50%, -50%);
  }
  :hover::after {
    transform: skew(45deg) translate(-50%, -50%);
  }
  :hover {
    color: #401d83;
  }
  :active {
    filter: brightness(0.7);
    transform: scale(0.98);
  }
`;

export default Button;
