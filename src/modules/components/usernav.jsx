import {
  FaBook,
  FaBraille,
  FaCogs,
  FaPlus,
  FaSortAmountUpAlt,
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
  let navigation = useNavigate();

  const handleReturnHomePage = () => {
    const path = "/home";
    navigation(path);
  };
  const handleViewCategories = () => {
    const path = "/category/all";
    navigation(path);
  };
  const handleViewRanking = () => {
    const path = "/rank";
    navigation(path);
  };
  const handleCreate = () => {
    const path = "/create";
    navigation(path);
  };
<<<<<<< HEAD
  const HandleYourBook = () => {
=======
  const handleViewYourBook = () => {
>>>>>>> master-fe
    const path = "/yourbook";
    navigation(path);
  };

  const handleViewProfile = () => {
    const path = "/profile";
    navigation(path);
  };
  const handleSignIn = () => {
    const path = "/";
    navigation(path);
  };

  return (
    <UserNavDiv>
      <LogoContent onClick={handleReturnHomePage}>
        <FcReading style={{ margin: "10px" }}></FcReading>
        <p style={{ color: "white" }}>READING BOOK</p>
      </LogoContent>
      <NavbarItems>
        <SeachBox />
        <Item onClick={handleViewCategories}>
          <FaBraille />
          <Dropdown label={"Category"} />
        </Item>
        <Item>
          <FaSortAmountUpAlt />
          <H3Css onClick={handleViewRanking}>Ranking</H3Css>
        </Item>
        <Item onClick={handleCreate}>
          <FaPlus />
          <H3Css>Create</H3Css>
        </Item>
        <Item onClick={handleViewYourBook}>
          <FaBook />
          <H3Css>Your Book</H3Css>
        </Item>
        <Item>
          <FaCogs onClick={handleViewProfile} />
        </Item>
        <Item>
          <FaUserAlt onClick={handleSignIn} />
        </Item>
      </NavbarItems>
    </UserNavDiv>
  );
};

export default UserNav;

const UserNavDiv = styled.header`
  height: 100px;
  font-size: 20px;
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
