import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const NotiItem = ({ noti }) => {
    const navigation = useNavigate();
    const navigateToDetail = () => {
        const path = `/books/${noti.book._id}`;
        navigation(path);
    }
    const date = new Date(noti.createdAt);
    const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const week = day * 7;

    const now = new Date().getTime();
    const then = date.getTime();

    const TIME_FROM_CREATE_NOTI = now - then;
    let time = "";
    if (Math.floor(TIME_FROM_CREATE_NOTI / minute < 60)) {
        time = Math.floor(TIME_FROM_CREATE_NOTI / minute).toString() + " minutes ago"
    };
    if (Math.floor(TIME_FROM_CREATE_NOTI / hour) > 1 && Math.floor(TIME_FROM_CREATE_NOTI / hour < 24)) {
        time = Math.floor(TIME_FROM_CREATE_NOTI / hour).toString() + " hours ago"
    };
    if (Math.floor(TIME_FROM_CREATE_NOTI / day) > 1 && Math.floor(TIME_FROM_CREATE_NOTI / day < 7)) {
        time = Math.floor(TIME_FROM_CREATE_NOTI / day).toString() + " days ago"
    };
    if (Math.floor(TIME_FROM_CREATE_NOTI / week) > 1) {
        time = Math.floor(TIME_FROM_CREATE_NOTI / week).toString() + " weeks ago"
    };


    return (
        <Item onClick={navigateToDetail}>
            <Image src='https://dwtr67e3ikfml.cloudfront.net/bookCovers/ac048dd770193139f871e067d4b885c5c47f23af' alt="Cover of a book" />
            <NotiDetail>
                <Content>{noti.message}</Content>
                <Time>{time}</Time>
            </NotiDetail>
        </Item>
    )
}

export default NotiItem

const Item = styled.div`
    width: 100%;
    padding: 5px;
    z-index: 99;
    display: flex;
    align-items: center;
    cursor: pointer;
    border-radius: 8px;
    &:hover {
        background-color: rgba(0,0,0,0.15);
    }
`

const Image = styled.img`
    width: 5rem;
    height: 5rem;
    object-fit: cover;
    overflow: hidden;
    border-radius: 100rem;
    border: 2px solid white;
    flex-shrink: 0;
    box-shadow: 0 0 0 2px rgba(0,0,0,0.15);
`

const NotiDetail = styled.div`
    flex: 1;
    margin-left: 2rem;
    display: flex;
    flex-direction: column;
`

const Content = styled.span`
    padding: 5px 0;
    font-size: 1.7rem;
`

const Time = styled.span`
    color: blue;
    font-size: 1.6rem;
`