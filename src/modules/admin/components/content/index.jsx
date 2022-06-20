import React from 'react'
import styled from 'styled-components'
const Content = ({ children, header }) => {
    const name = localStorage.getItem("name");
    const avatar = localStorage.getItem("ava");
    return (
        <Container>
            <Header>
                <TitleText>{header}</TitleText>
                <User>
                    <Username>{name}</Username>
                    <Image src={avatar} alt='avatar of admin' />
                </User>
            </Header>
            <Main>
                {children}
            </Main>
        </Container>
    )
}

export default Content

const Container = styled.main`
    flex: 1;
    background-color: #F7F8FC;
    padding: 2rem;
    display: flex;
    flex-direction: column;
`
const Header = styled.header`
    display: flex;
    justify-content: space-between;
    box-shadow: 0 0 2rem rgba(0, 0, 0, 0.15);
    padding: 1rem 1rem;
    border-radius: 8px;
    background-color: white;
`

const TitleText = styled.span`
    font-size: 24px;
    font-weight: bold;
    padding: 5px 0;
    display: inline-block;
`

const User = styled.div`
    display: flex;
    align-items: center;
    
`
const Username = styled.span`
    font-size: 14px;
    font-weight: 500;
    padding: 2px 0;
    border-left: 2px solid #DFE0EB;
    padding-left: 2rem;
    display: inline-block;
`

const Image = styled.img`
    width: 44px;
    height: 44px;
    object-fit: cover;
    border-radius: 100rem;
    border: 2px solid white;
    box-shadow: 0 0 0 2px #DFE0EB;
    margin-left: 1rem;
`

const Main = styled.main`
    margin-top: 1.5rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 1rem;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 0 2rem rgba(0, 0, 0, 0.15);
`





