import React from "react";
import { FaBook, FaBraille, FaCogs, FaPlus, FaUserAlt } from "react-icons/fa";
import { FcReading } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ConfirmBox from "../../components/ConfirmBox";
import Dropdown from "../home/components/dropdown";
import SeachBox from "../home/components/searchbox";
import Item from "./item";
import LogoContent from "./logocontent";
import NavbarItems from "./navbaritems";

const UserNav = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  let navigation = useNavigate();
  const ava = localStorage.getItem("ava");

  const handleReturnHomePage = () => {
    const path = "/home";
    navigation(path);
  };
  const handleViewCategories = () => {
    const path = "/category/all";
    navigation(path);
  };
  const handleCreate = () => {
    const path = "/create";
    navigation(path);
  };
  const handleViewYourBook = () => {
    const path = "/yourbook";
    navigation(path);
  };
  const handleViewProfile = () => {
    const path = "/profile";
    navigation(path);
  };

  const handleSigIn = () => {
    const path = "/";
    navigation(path);
  };
  const handleConfirm = () => {
    localStorage.setItem("token", "");
    localStorage.setItem("ava", "");
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
          {ava === undefined && <FaUserAlt onClick={handleSigIn} />}
          {ava !== undefined && (
            <img
              src={ava}
              alt=""
              style={{ width: "30px", borderRadius: "20px" }}
              onClick={() => {
                setIsOpen(true);
              }}
            />
          )}
        </Item>
      </NavbarItems>
      <ConfirmBox
        isOpen={isOpen}
        header="LOG OUT"
        message="Do you want to log out ?"
        onCancel={() => {
          setIsOpen(false);
        }}
        onConfirm={handleConfirm}
      />
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
