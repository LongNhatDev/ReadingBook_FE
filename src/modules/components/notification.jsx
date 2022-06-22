import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { authentication } from '../../authProvider';
import { BaseURL } from '../AxiosInstance';
import NotiItem from './notiitem'

const Notification = () => {
    const [notifications, setNotifications] = useState([]);
    const authCtx = useContext(authentication);
    useEffect(() => {
        console.log("run again");
        async function getNotifications() {
            try {
                const res = await BaseURL.get("api/notifications", {
                    headers: {
                        Authorization: authCtx.accessToken,
                    },
                });
                setNotifications(res.data.reverse());
            } catch (err) {
                console.log("errors occurs", err);
            }
        }
        getNotifications();
    }, [authCtx.accessToken])

    return (
        <Container>
            {!notifications.length && <Text>There's no notification</Text>}
            {notifications.length > 0 && notifications.map((noti) => (<NotiItem key={noti._id} noti={noti} />))}
        </Container>

    )
}

export default Notification

const Container = styled.div`
    width: 36rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    right: 4rem;
    z-index: 99;
    background-color: white;
    box-shadow: 0 0 2rem rgba(0,0,0,0.15);
    border-radius: 8px;
    max-height: 70vh;
    overflow: auto;
    ::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgba(0,0,0,0.15);
  border-radius: 4px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
`

const Text = styled.span`
    margin: 0 auto;
`
