import React, { useState } from 'react'
import styled from 'styled-components'
import Modal from "../../../../components/modal"
import Button from "../../../../components/button"
import { showErrorToaster, showSuccessToaster } from '../../../../../components/Toaster'
import { BaseURL } from "../../../../AxiosInstance"

const CreateForm = (props) => {
    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("user");

    const token = localStorage.getItem("token");

    const addUserHandler = async (event) => {
        event.preventDefault();
        if (email.length < 5 || !email.includes("@")) {
            showErrorToaster("Email is not valid")
            return;
        }
        if (password.length < 5) {
            showErrorToaster("Password is not valid")
            return;
        }

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

        const newUser = {
            fullName: fullName,
            email: email,
            password: password,
            roles: roles,
        }

        console.log(newUser);

        try {
            const res = await BaseURL.post("api/users/", newUser, {
                headers: {
                    "Authorization": token,
                    "Content-Type": "application/json"
                }
            })
            props.onAdd(res.data)
            showSuccessToaster("Create Successfully");
        } catch (err) {
            console.log(err);
        }
        props.onClose();
    }
    return (
        <Modal onHideIndex={props.onClose}>
            <Form onSubmit={addUserHandler}>
                <Title>Add new user</Title>
                <InputContainer>
                    <Label id='email'>Email</Label>
                    <Input type="text" id='email' value={email} onChange={(event) => setEmail(event.target.value)} />
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
                    <Button>Create</Button>
                </ButtonContainer>
            </Form>
        </Modal >
    )
}

export default CreateForm

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