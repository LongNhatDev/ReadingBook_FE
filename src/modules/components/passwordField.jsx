import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { useState } from "react";
import styled from "styled-components";

const PasswordField = ({
  passwordRef,
  id = "password",
  label = "password",
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDown = (e) => {
    e.preventDefault();
  };
  return (
    <Wapper>
      <Input
        variant="standard"
        id={id}
        label={label}
        type={showPassword ? "text" : "password"}
        ref={passwordRef}
      />
      <Span>
        <Icon
          aria-label="Toggle Password visibility"
          onClick={handleClick}
          onMouseDown={handleMouseDown}
        >
          {showPassword ? <MdVisibility /> : <MdVisibilityOff />}
        </Icon>
      </Span>
    </Wapper>
  );
};

const Wapper = styled.div`
  margin-top: 15px;
  width: 50%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  margin: 10px 0 5px;
  padding-left: 5px;
  line-height: 30px;
  border: 2px solid #dddddd;
  font-size: 20px;
  border-radius: 5px;

  :hover {
    border: 2px solid blue;
  }
  & .invalid {
    border: 1px solid red;
  }
`;

const Span = styled.span`
  position: absolute;
  right: 15px;
  transform: translate(0, -50%);
  top: 50%;
  cursor: pointer;
`;
const Icon = styled.i`
  font-size: 20px;
  color: #7a797e;
`;
export default PasswordField;
