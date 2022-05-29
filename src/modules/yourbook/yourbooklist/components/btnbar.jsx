import React from "react";
import styled from "styled-components";
import { AiFillEdit, AiTwotoneDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const BtnBar = () => {
  let navigate = useNavigate();
  const [popup, setPopUp] = React.useState(false);
  return (
    <Bar>
      <div>
        <AiFillEdit
          style={{ color: "#00B524", fontSize: "3rem", marginRight: "2rem" }}
          on
          onClick={() => {
            console.log("EDIT");
            navigate("/create");
          }}
        />
      </div>

      <div>
        <AiTwotoneDelete
          style={{ color: "red", fontSize: "3rem" }}
          onClick={() => {
            console.log("DELETE");
          }}
        />
      </div>
    </Bar>
  );
};

export default BtnBar;

const Bar = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  & > div:hover {
    transform: scale(1.3);
  }
  & > div:active {
    transform: scale(1);
  }
`;
