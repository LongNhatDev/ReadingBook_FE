import React, { useRef, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import styled from "styled-components";
import Button from "../../components/button";
import { showSuccessToaster } from "../../../components/Toaster";
import Modal from "../../components/modal";
import { useContext } from "react";
import { authentication } from "../../../authProvider";

const UploadChapter = (props) => {
  const context = useContext(authentication);
  const token = context.accessToken;
  const [data, setData] = useState({});
  const titleRef = useRef();
  async function submitHandler(event) {
    event.preventDefault();
    const sendData = {
      title: titleRef.current.value,
      content: data,
      audioLink: "",
    };
    fetch(`http://localhost:3000/api/books/${props.id}/chapters`, {
      method: "POST",
      body: JSON.stringify(sendData),
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }).then((res) => {
      if (res.ok) {
        showSuccessToaster("Upload Successfully");
        props.onUpdate();
        props.onClose();
      }
      console.log(res.ok);
    });
  }

  const onChangeHandler = (event, editor) => {
    setData(editor.getData());
  };
  return (
    <Modal onHideIndex={props.onClose}>
      <Container>
        <Title>CREATE NEW CHAPTER</Title>
        <Form onSubmit={submitHandler}>
          <Input
            type="text"
            id="chaptertitle"
            placeholder="Enter the title here"
            ref={titleRef}
          />
          <CKEditor
            editor={ClassicEditor}
            onReady={(editor) => {
              console.log("Editor is ready to use!", editor);
              editor.editing.view.change((writer) => {
                writer.setStyle(
                  "height",
                  "60vh",
                  editor.editing.view.document.getRoot()
                );
              });
            }}
            onChange={onChangeHandler}
          />
          <UploadButton>Create</UploadButton>
        </Form>
      </Container>
    </Modal>
  );
};

export default UploadChapter;

const Container = styled.div`
  width: 100rem;
  height: 100vh;
  padding: 2rem;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  min-height: 80%;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  font-size: 2rem;
  font-weight: bold;
  height: 5rem;
  padding: 0 2rem;
  margin-bottom: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.3);
`;

const UploadButton = styled(Button)`
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
`;
