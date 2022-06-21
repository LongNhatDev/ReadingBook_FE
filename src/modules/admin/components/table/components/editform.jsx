import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import Modal from "../../../../components/modal"
import Button from "../../../../components/button"
import { showErrorToaster, showSuccessToaster } from '../../../../../components/Toaster'
import { BaseURL } from "../../../../AxiosInstance"
import { authentication } from '../../../../../authProvider'

const EditForm = (props) => {
    const [email, setEmail] = useState(props.data.email);
    const [fullName, setFullName] = useState(props.data.fullName);
    const [password, setPassword] = useState("");
    const [role, setRole] = useState(props.data.roles[0]);

    const authCtx = useContext(authentication);
    const token = authCtx.accessToken;

    const addUserHandler = async (event) => {
        event.preventDefault();

        if (fullName.length < 5) {
            showErrorToaster("Fullname is not valid")
            return;
        }

        let roles = ["user"];
        if (role === "mod") {
            roles.unshift("mod");
        }
        if (role === "admin") {
            roles.unshift("admin", "mod");
        }

        const newUser = password ? { ...props.data, fullName: fullName, roles: roles, password: password } : { ...props.data, fullName: fullName, roles: roles }

        props.onEdit(newUser);
        try {
            const res = await BaseURL.patch(`api/users/${props.data._id}`, newUser, {
                headers: {
                    "Authorization": token,
                    "Content-Type": "application/json"
                }
            })
            showSuccessToaster("Edit Succesfully")
        } catch (err) {
            console.log(err);
        }
        props.onClose();
    }
    return (
        <Modal onHideIndex={props.onClose}>
            <Form onSubmit={addUserHandler}>
                <Title>Edit</Title>
                <InputContainer>
                    <Label id='email'>Email</Label>
                    <Input type="text" id='email' value={email} onChange={(event) => setEmail(event.target.value)} readOnly />
                </InputContainer>
                <InputContainer>
                    <Label id='fullname'>Fullname</Label>
                    <Input type="text" id='fullname' value={fullName} onChange={(event) => setFullName(event.target.value)} />
                </InputContainer>
                <InputContainer>
                    <Label id='role'>Role</Label>
                    <Select value={role} onChange={(event) => {
                        setRole(event.target.value)
                    }}>
                        <option>
                            user
                        </option>
                        <option>
                            mod
                        </option>
                        <option>
                            admin
                        </option>
                    </Select>
                </InputContainer>
                <InputContainer>
                    <Label id='password'>Password</Label>
                    <Input type="password" id='password' value={password} onChange={(event) => setPassword(event.target.value)} />
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
    height: 70vh;
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
    border: 1px solid #f0f1f5;
    border-radius: 8px;
    font-size: 1.6rem;
    padding: 1rem 1rem;
    background-color: #f0f1f5;
`

const Select = styled.select`
    border: 1px solid #f0f1f5;
    border-radius: 8px;
    font-size: 1.6rem;
    padding: 1rem 1rem;
    background-color: #f0f1f5;
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