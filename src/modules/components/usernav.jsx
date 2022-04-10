import {
  FaBraille,
  FaCogs,
  FaSortAmountUpAlt,
  FaUpload,
  FaUserAlt,
} from "react-icons/fa";
import { FcReading } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Dropdown from "../home/components/dropdown";
import SeachBox from "../home/components/searchbox";
import Item from "./item";
import LogoContent from "./logocontent";
import NavbarItems from "./navbaritems";

const UserNav = () => {
  const categoriesRow = [
    {
      id: "act",
      content: "Action",
      url: "category/action",
    },
    {
      id: "CM",
      content: "Comic",
    },
    {
      id: "WN",
      content: "Web novel",
    },
  ];
  const rankingRow = [
    {
      id: "DL",
      content: "Daily",
      url: "ranking/dailyranking",
    },
    {
      id: "WL",
      content: "Weekly",
      url: "ranking/weeklyranking",
    },
    {
      id: "ML",
      content: "Monthly",
      url: "ranking/monthlyranking",
    },
    {
      id: "YL",
      content: "Yearly",
      url: "ranking/yearlyranking",
    },
  ];

  let navigation = useNavigate();

  const HandleLogin = () => {
    const path = "auth/login";
    navigation(path);
  };
  const HandleUpload = () => {
    const path = "upload";
    navigation(path);
  };
  const HandleHome = () => {
    const path = "/";
    navigation(path);
  };

  return (
    <UserNavDiv>
      <LogoContent onClick={HandleHome}>
        <FcReading style={{ margin: "10px" }}></FcReading>
        <p style={{ color: "white" }}>READING BOOK</p>
      </LogoContent>
      <NavbarItems>
        <SeachBox />
        <Item>
          <FaBraille />
          <Dropdown label={"Category"} categories={categoriesRow} />
        </Item>
        <Item>
          <FaSortAmountUpAlt />
          <Dropdown label={"Ranking"} categories={rankingRow} />
        </Item>
        <Item onClick={HandleUpload}>
          <FaUpload />
          <H3Css>Upload</H3Css>
        </Item>
        <Item>
          <FaCogs />
        </Item>
        <Item>
          <FaUserAlt onClick={HandleLogin} />
        </Item>
      </NavbarItems>
    </UserNavDiv>
  );
};

export default UserNav;

const UserNavDiv = styled.header`
  height: 100px;
  font-size: 25px;
  display: flex;
  box-shadow: 2px 2px 6px grey;
  /* position: fixed; */
  background-image: linear-gradient(
    to right,
    #051937,
    #004468,
    #00748c,
    #00a69d,
    #68d69d
  );
  color: #051937;
`;
const H3Css = styled.h3`
  margin-left: 10px;
`;
