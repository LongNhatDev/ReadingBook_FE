import React, { useEffect, useState, useContext } from 'react'
import { BaseURL } from '../../AxiosInstance'
import Content from "../components/content"
import TableA from '../components/table'
import { IoPersonAdd } from "react-icons/io5"
import styled from 'styled-components'
import CreateForm from '../components/table/components/createform'
import { authentication } from '../../../authProvider'

const UserPage = () => {
    const [userData, setUserData] = useState([]);
    const [isShowAddForm, setIsShowAddForm] = useState(false);
    const showAddFormHandler = () => {
        setIsShowAddForm(true);
    }
    const hideAddFormHandler = () => {
        setIsShowAddForm(false);
    }
    const deleteUser = (id) => {
        const newData = userData.map((user) => {
            if (user._id === id) {
                return { ...user, isLock: !user.isLock }
            }
            return user;
        });
        setUserData(newData);
    }
    const addUser = (user) => {
        const newData = userData.concat([user])
        setUserData(newData);
    }

    const editUser = (user) => {
        const newData = userData.map((item) => {
            if (item._id === user._id) {
                return user;
            }
            return item
        })
        setUserData(newData)
    }

    const authCtx = useContext(authentication);
    const token = authCtx.accessToken;
    useEffect(() => {
        async function getAllUser() {
            try {
                const res = await BaseURL.get("http://localhost:3000/api/users", {
                    headers: {
                        Authorization: token
                    }
                });
                setUserData(res.data)
            } catch (err) {
                console.log(err);
            }
        }
        getAllUser();
    }, [token])

    const header = ["No", "Email", "Fullname", "Role", "Operation"]

    return (
        <>
            <Content header="USER MANAGEMENT">
                <IconContainer>
                    <Button onClick={showAddFormHandler}>
                        <span style={{ color: "#009879", fontWeight: "bold" }}>ADD</span>
                        <Icon style={{ color: "#009879" }}>
                            <IoPersonAdd />
                        </Icon>
                    </Button>
                </IconContainer>
                <TableA data={userData} header={header} onDelete={deleteUser} onEdit={editUser} />
            </Content>
            {isShowAddForm && <CreateForm onClose={hideAddFormHandler} onAdd={addUser} />}
        </>
    )
}

export default UserPage

const Icon = styled.span`
    font-size: 2.5rem;
    padding-left: 1rem;
    display: flex;
    align-items: center;
`

const IconContainer = styled.div`
    position: relative;
    height: 4rem;
`

const Button = styled.button`
    border: 2px solid white;
    display: inline-block;
    border-radius: 8px;
    box-shadow: 0 0 2rem rgba(0,0,0,0.15);
    cursor: pointer;
    &:hover {
        transform: scale(1.2);
    }
    position: absolute;
    right: 3rem;
    top: 0;
    display: flex;
    align-items: center;
    padding: 2px 1rem;
    background-color: white;
`