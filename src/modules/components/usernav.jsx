import React from "react";
import { useContext } from "react";
import { FaBook, FaBraille, FaCogs, FaPlus, FaUserAlt } from "react-icons/fa";
import { FcReading } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { authentication } from "../../authProvider";
import ConfirmBox from "../../components/ConfirmBox";
import Dropdown from "../home/components/dropdown";
import SeachBox from "../home/components/searchbox";
import Item from "./item";
import LogoContent from "./logocontent";
import NavbarItems from "./navbaritems";
import { IoMdNotifications } from "react-icons/io"
import { IoLibrarySharp } from "react-icons/io5"
import { MdAdminPanelSettings } from "react-icons/md"
import { useState } from "react";
import Notification from "./notification";

const UserNav = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isShowNotifications, setIsShowNotifications] = useState(false);

  const toggleNotification = () => {
    setIsShowNotifications((prev) => !prev);
  }

  const context = useContext(authentication);

  let navigation = useNavigate();
  const ava = context.avatar;

  const handleReturnHomePage = () => {
    const path = "/home";
    navigation(path);
  };
  const handleViewCategories = (event) => {
    // const path = "/category/all";
    // navigation(path);
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
  const navigateToLibraryHandler = () => {
    const path = "/library";
    navigation(path);
  }
  const navigateToAdminPage = () => {
    const path = "/admin";
    navigation(path);
  }

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
        <Icon onClick={navigateToLibraryHandler}>
          <IoLibrarySharp />
        </Icon>
        <Icon onClick={toggleNotification}>
          <IoMdNotifications />
        </Icon>
        {context.role === "admin" && <Icon onClick={navigateToAdminPage}><MdAdminPanelSettings /></Icon>}
        <Item>
          {ava === undefined && <FaUserAlt onClick={handleSigIn} />}
          {ava !== undefined && (
            <Image src={ava} alt="avatar of user" onClick={() => {
              setIsOpen(true)
            }} />
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
      {isShowNotifications && <Notification />}
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
  position: relative;
`;
const H3Css = styled.h4`
  margin-left: 10px;
`;
// const DivCustom = styled.div`
//   min-height: 30px;
//   padding: 6px;
//   display: flex;
//   flex-flow: column wrap;
//   justify-content: center;
//   align-items: center;
//   border-radius: 10px;
//   :hover {
//     background-color: #00a69d;
//   }
// `;

const Icon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  width: 4rem;
  height: 4rem;
  color: white;
  background-color: rgba(0,0,0,0.4);
  &:hover {
    transform: scale(1.2);
  }
  border-radius: 100rem;
  border: 2px solid white;
  box-shadow: 0 0 2rem rgba(0,0,0,0.15);
  cursor: pointer;
`

const Image = styled.img`
    width: 44px;
    height: 44px;
    object-fit: cover;
    border-radius: 100rem;
    border: 2px solid white;
    box-shadow: 0 0 2rem rgba(0,0,0,0.15);
    margin-left: 1rem;
  `