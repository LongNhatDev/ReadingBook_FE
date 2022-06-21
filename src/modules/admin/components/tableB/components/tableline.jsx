import React, { useState } from 'react'
import styled from 'styled-components'
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai"
import EditForm from './editform'

const TableLine = (props) => {
    const [isShowEditForm, setIsShowEditForm] = useState(false);
    const showEditHandler = () => {
        setIsShowEditForm(true);
    }
    const closeEditHandler = () => {
        setIsShowEditForm(false);
    }

    return (
        <>
            <Tr>
                <Td>
                    {props.index}
                </Td>
                <Td>
                    <Image alt='Cover of a book' src={props.data.coverImageURL} />
                </Td>
                <Td>
                    {props.data.bookName}
                </Td>
                <Td>
                    {props.data.author.fullName}
                </Td>
                <Td>
                    <Operation>
                        <Icon style={{ color: "#22d312" }} onClick={showEditHandler}>
                            <AiOutlineEdit />
                        </Icon>
                        <Icon style={{ color: "#f70808" }} onClick={props.onDelete.bind(this, props.data._id)}>
                            <AiOutlineDelete />
                        </Icon>
                    </Operation>
                </Td>
            </Tr>
            {isShowEditForm && <EditForm data={props.data} onClose={closeEditHandler} onAdd={props.onAdd} onEdit={props.onEdit} />}
        </>)
}

export default TableLine

const Operation = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
`

const Icon = styled.span`
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

const Image = styled.img`
  width: 9rem;
  height: 12rem;
  object-fit: cover;
  border: 1px solid rgba(0, 0, 0, 0.5);
  box-shadow: 10px -5px 10px 0 rgba(0, 0, 0, 0.3);
`;