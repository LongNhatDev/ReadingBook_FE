import React from "react";
import styled from "styled-components";
import { TiBook, TiTime } from "react-icons/ti";
import { FcReading } from "react-icons/fc";
import { MdLogout } from "react-icons/md";
import { IoAnalyticsOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import ConfirmBox from "../../../components/ConfirmBox";

const StaffNav = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  let navigate = useNavigate();

  const handleConfirm = () => {
    window.localStorage.clear();
    const path = "/auth/signin";
    navigate(path);
  };

  const reloadPage = () => {
    window.location.reload();
  };

  const handleGetBooksCensored = () => {
    navigate("/staff/bookscensored");
  };

  const handleGetBooksPending = () => {
    navigate("/staff/bookspending");
  };

  return (
    <Navbar>
      <Logo>
        <Icon style={{ fontSize: "2rem" }}>
          <FcReading />
        </Icon>
        <LogoText onClick={reloadPage}>READINGBOOK</LogoText>
      </Logo>

      <ListItem>
        <Item onClick={handleGetBooksCensored}>
          <Icon>
            <TiBook />
          </Icon>
          <Text>Books Censored</Text>
        </Item>

        <Item onClick={handleGetBooksPending}>
          <Icon>
            <TiTime />
          </Icon>
          <Text>Books Pending</Text>
        </Item>
      </ListItem>

      <Item style={{ marginTop: "auto" }} onClick={() => setIsOpen(true)}>
        <Icon>
          <MdLogout />
        </Icon>
        <Text>Logout</Text>
      </Item>

      <ConfirmBoxCustom
        isOpen={isOpen}
        header="LOG OUT"
        message="Do you want to log out ?"
        onCancel={() => {
          setIsOpen(false);
        }}
        onConfirm={handleConfirm}
      />
    </Navbar>
  );
};

export default StaffNav;

const Navbar = styled.nav`
  width: 25.5rem;
  height: 100vh;
  background-color: #363740;
  padding-top: 3rem;
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
  position: fixed;
`;

const ListItem = styled.ul`
  margin-top: 2rem;
`;

const Item = styled.li`
  background-color: ${(props) =>
    props.isActive ? "rgba(159, 162, 180, 0.08)" : "transparent"};
  border-left: ${(props) => (props.isActive ? "2px solid #DDE2FF" : "none")};
  display: flex;
  width: 100%;
  padding: 2rem 1.2rem;
  cursor: pointer;
  &:hover {
    background-color: rgba(159, 162, 180, 0.08);
    border-left: 2px solid #dde2ff;
    cursor: pointer;
  }
`;

const Icon = styled.span`
  color: #a4a6b3;
  font-size: 1.7rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2px 2rem;

  ${Item}:hover > & {
    color: #dde2ff;
    opacity: 1;
  }
`;

const Text = styled.span`
  font-size: 1.7rem;
  color: #a4a6b3;
  opacity: 1;
  height: 2rem;
  ${Item}:hover > & {
    color: #dde2ff;
  }
`;

const Logo = styled.div`
  display: flex;
  :hover {
    cursor: pointer;
  }
`;

const LogoText = styled.span`
  color: #dde2ff;
  font-size: 1.8rem;
`;

const ConfirmBoxCustom = styled(ConfirmBox)`
  .alert {
    background-color: #363740;
  }
`;
