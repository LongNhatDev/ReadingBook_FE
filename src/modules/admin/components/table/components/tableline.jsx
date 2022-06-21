import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { AiOutlineEdit } from "react-icons/ai"
import EditForm from './editform'
import { BsLock, BsUnlock } from "react-icons/bs"
import { BaseURL } from '../../../../AxiosInstance'
import { showSuccessToaster } from '../../../../../components/Toaster'
import { authentication } from '../../../../../authProvider'

const TableLine = (props) => {
    const [isShowEditForm, setIsShowEditForm] = useState(false);
    const showEditHandler = () => {
        setIsShowEditForm(true);
    }
    const closeEditHandler = () => {
        setIsShowEditForm(false);
    }
    const authCtx = useContext(authentication);
    const token = authCtx.accessToken;
    const toggleLock = async () => {
        const newUser = { isLock: !props.data.isLock };
        props.onDelete(props.data._id);
        try {
            await BaseURL.patch(`api/users/${props.data._id}`, newUser, {
                headers: {
                    "Authorization": token,
                    "Content-Type": "application/json"
                }
            })
            if (props.data.isLock) {
                showSuccessToaster("Unlock Succesfully")
            } else {
                showSuccessToaster("Lock Succesfully");
            }
        } catch (err) {
            console.log(err);
        }
    }

    const lockIcon = !props.data.isLock ? <BsUnlock /> : <BsLock />

    return (
        <>
            <Tr>
                <Td>
                    {props.index}
                </Td>
                <Td>
                    {props.data.email}
                </Td>
                <Td>
                    {props.data.fullName}
                </Td>
                <Td>
                    {props.data.roles[0]}
                </Td>
                <Td>
                    <Operation>
                        <Icon style={{ color: "#22d312" }} onClick={showEditHandler}>
                            <AiOutlineEdit />
                        </Icon>
                        <Icon style={{ color: "#f70808" }} onClick={toggleLock}>
                            {lockIcon}
                        </Icon>
                    </Operation>
                </Td>
            </Tr>
            {isShowEditForm && <EditForm data={props.data} onClose={closeEditHandler} onEdit={props.onEdit} />}
        </>)
}

export default TableLine

const Operation = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
`

const Icon = styled.span`
    font-weight: bold;
    font-size: 1.6rem;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover {
        transform: scale(1.2);
    }
`

const Tr = styled.tr`
    border-bottom: 1px solid #dddddd;
    cursor: pointer;
`

const Td = styled.td`
    padding: 12px 15px;
    ${Tr}:hover > & {
        color: #009879;
        background-color: rgba(0, 0, 0, 0.15);
        font-weight: bold;
    }
    
`