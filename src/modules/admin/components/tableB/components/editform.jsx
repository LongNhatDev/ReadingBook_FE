import React, { useState } from 'react'
import styled from 'styled-components'
import Modal from "../../../../components/modal"
import Button from "../../../../components/button"

const EditForm = (props) => {
    const [email, setEmail] = useState(props.data.email);
    const [fullName, setFullName] = useState(props.data.fullName);
    const addUserHandler = (event) => {
        event.preventDefault();
        const newUser = {
            _id: props.data._id,
            email: email,
            fullName: fullName,
            role: ["staff"]
        }
        props.onEdit(newUser);
        props.onClose();
    }
    return (
        <Modal onHideIndex={props.onClose}>
            <Form onSubmit={addUserHandler}>
                <Title>Edit</Title>
                <InputContainer>
                    <Label id='email'>Email</Label>
                    <Input type="text" id='email' value={email} onChange={(event) => setEmail(event.target.value)} />
                </InputContainer>
                <InputContainer>
                    <Label id='fullname'>Fullname</Label>
                    <Input type="text" id='fullname' value={fullName} onChange={(event) => setFullName(event.target.value)} />
                </InputContainer>
                <InputContainer>
                    <Label id='password'>Password</Label>
                    <Input type="password" id='password' />
                </InputContainer>
                <ButtonContainer>
                    <Button>Update</Button>
                </ButtonContainer>
            </Form>
        </Modal >
    )
}

export default EditForm

const Form = styled.form`
    width: 30vw;
    height: 60vh;
    margin: 2rem;
    display: flex;
    flex-direction: column;
`
const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
`

const Input = styled.input`
    border: 1px solid #DFE0EB;
    border-radius: 8px;
    font-size: 1.6rem;
    padding: 1rem 1rem;
    background-color: #DFE0EB;
`

const Label = styled.label`
    margin: 5px 0;
`
const Title = styled.h2`
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 2rem;
`

const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: auto;
`