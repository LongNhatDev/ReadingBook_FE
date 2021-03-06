import React, { useContext } from "react";
import styled from "styled-components";
import { FaStar, FaEye, FaBook, FaHourglassStart } from "react-icons/fa";
import { BaseURL } from "../../../AxiosInstance";
import { authentication } from "../../../../authProvider";

const StatusBox = (props) => {
  const authCtx = useContext(authentication);
  const changeStatusHandler = async (event) => {

    try {
      BaseURL.patch(`/api/books/book/${props.id}/status`, { status: event.target.value }, {
        headers: {
          Authorization: authCtx.accessToken,
          "Content-Type": "application/json"
        }
      })
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <Box>
      <Item>
        <Header>
          STATUS <FaHourglassStart />{" "}
        </Header>
        <select defaultValue={props.status} style={{ borderRadius: "8px" }} onChange={changeStatusHandler}>
          <option>
            Ongoing
          </option>
          <option>
            Paused
          </option>
          <option>
            Completed
          </option>
        </select>
      </Item>
      <Item>
        <Header>
          CHAPTERS <FaBook />
        </Header>
        <SpanCustom>{props.chapters}</SpanCustom>
      </Item>
      <Item>
        <Header>
          VIEWS <FaEye />
        </Header>
        <SpanCustom>{props.views}</SpanCustom>
      </Item>
      <Item>
        <Header>
          RATING <FaStar />
        </Header>
        <SpanCustom>{props.rating}</SpanCustom>
      </Item>
    </Box>
  );
};

export default StatusBox;

const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 2rem 0 1rem 0;
  margin-top: auto;
  border-top: 1px solid black;
`;

const Item = styled.div`
  letter-spacing: 1px;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 500;
  & span {
    letter-spacing: normal;
    color: black;
    font-weight: normal;
  }
  width: calc(25% - 1rem);
  padding: 0 0.5rem;
  text-align: center;
`;

const Header = styled.div`
  color: white;
  line-height: 3rem;
  background-color: #004468;
  margin-bottom: 5px;
`;

const SpanCustom = styled.span`
  font-size: 1.5rem;
`;
