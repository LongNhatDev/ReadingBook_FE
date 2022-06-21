import React from 'react'
import styled from 'styled-components'
import { TiUser, TiBook } from "react-icons/ti"
import { FcReading } from 'react-icons/fc'
import { MdLogout } from "react-icons/md"
import { IoAnalyticsOutline } from "react-icons/io5"

const AdminNav = (props) => {
  return <Navbar>
    <Logo>
      <Icon style={{ fontSize: "2rem" }}>
        <FcReading />
      </Icon>
      <LogoText>READINGBOOK</LogoText>
    </Logo>
    <ListItem>
      <Item isActive={props.selected === 1 ? true : false} onClick={props.onSwitchPage.bind(this, 1)}>
        <Icon>
          <TiUser />
        </Icon>
        <Text>User</Text>
      </Item>
      <Item isActive={props.selected === 2 ? true : false} onClick={props.onSwitchPage.bind(this, 2)}>
        <Icon>
          <TiBook />
        </Icon>
        <Text>Books</Text>
      </Item >
      <Item isActive={props.selected === 3 ? true : false} onClick={props.onSwitchPage.bind(this, 3)}>
        <Icon>
          <IoAnalyticsOutline />
        </Icon>
        <Text>Book Analytics</Text>
      </Item>
      <Item isActive={props.selected === 4 ? true : false} onClick={props.onSwitchPage.bind(this, 4)}>
        <Icon>
          <IoAnalyticsOutline />
        </Icon>
        <Text>User Analytics</Text>
      </Item>
    </ListItem>
    <Item style={{ marginTop: "auto" }}>
      <Icon>
        <MdLogout />
      </Icon>
      <Text>Logout</Text>
    </Item>
  </Navbar>
}

export default AdminNav

const Navbar = styled.nav`
  width: 25.5rem;
  height: 100vh;
  background-color: #363740;
  padding-top: 3rem;
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
`

const ListItem = styled.ul`
  margin-top: 2rem;
`

const Item = styled.li`
  background-color: ${(props) => props.isActive ? "rgba(159, 162, 180, 0.08)" : "transparent"};
  border-left:${(props) => props.isActive ? "2px solid #DDE2FF" : "none"} ;
  display: flex;
  width: 100%;
  padding: 2rem 1.2rem;
  cursor: pointer;
  &:hover {
    background-color: rgba(159, 162, 180, 0.08);
    border-left: 2px solid #DDE2FF;
  }
`

const Icon = styled.span`
  color: #A4A6B3;
  font-size: 1.7rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2px 2rem;
  
  ${Item}:hover > & {
    color: #DDE2FF;
    opacity: 1;
  }
`

const Text = styled.span`
  font-size: 1.7rem;
  color: #A4A6B3;
  opacity: 1;
  height: 2rem;
  ${Item}:hover > & {
    color: #DDE2FF;
  }
`

const Logo = styled.div`
  display: flex;
`
const LogoText = styled.span`
  color: #DDE2FF;
  font-size: 1.8rem;
`