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
    const path = "/myprofile";
    navigation(path);
  };

  const handleSigIn = () => {
    const path = "/";
    navigation(path);
  };
  const handleConfirm = () => {
    window.localStorage.clear();
    const path = "/";
    navigation(path);
  };

  return (
    <UserNavDiv>
      <LogoContent onClick={handleReturnHomePage}>
        <FcReading style={{ marginRight: "10px" }}></FcReading>
        <p style={{ color: "white", marginTop: "10px" }}>READING BOOK</p>
      </LogoContent>
      <NavbarItems>
        <SeachBox />

        <Item onClick={handleViewCategories}>
          <FaBraille />
          <Dropdown label="Category" />
        </Item>
        <Item onClick={handleCreate}>
          <FaPlus />
          <H3Css>Create</H3Css>
        </Item>
        <Item onClick={handleViewYourBook}>
          <FaBook />
          <H3Css>Your Book</H3Css>
        </Item>
        <Item onClick={handleViewProfile}>
          <FaCogs />
          <H3Css>Profile</H3Css>
        </Item>
        <Item>
          {ava === undefined && <FaUserAlt onClick={handleSigIn} />}
          {ava !== undefined && (
            <DivCustom
              onClick={() => {
                setIsOpen(true);
              }}
            >
              <img
                src={ava}
                alt=""
                style={{
                  height: "30px",
                  borderRadius: "20px",
                }}
              />
              <p style={{ fontSize: "15px", marginTop: "10px" }}>
                {localStorage.getItem("name")}
              </p>
            </DivCustom>
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
const H3Css = styled.h4`
  margin-left: 10px;
`;
const DivCustom = styled.div`
  min-height: 30px;
  padding: 6px;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  :hover {
    background-color: #00a69d;
  }
`;
