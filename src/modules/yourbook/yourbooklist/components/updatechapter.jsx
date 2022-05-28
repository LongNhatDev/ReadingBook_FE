import React, { useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import styled from "styled-components";
import Button from "../../../components/button";
import { showSuccessToaster } from "../../../../components/Toaster";
import Modal from "../../../components/modal";
import axios from "axios";
import { BaseURL } from "../../../AxiosInstance";

const UpdateChapter = (props) => {
  const [datas, setDatas] = useState({});
  const [title, setTitle] = useState(props.chapter.title);
  useEffect(() => {
    async function getChapter() {
      try {
        const res = await axios.get(props.chapter.contentLink);
        const data = res.data;
        console.log(data);
        setDatas(data);
      } catch (err) {
        console.log("error occurs", err);
      }
    }
    getChapter();
  }, [props.chapter.contentLink]);
  async function submitHandler(event) {
    event.preventDefault();
    const sendData = {
      title: title,
      content: datas,
      audioLink: "",
    };
    try {
      await BaseURL.put(
        `api/chapters/${props.chapter._id}/book/${props.id}`,
        sendData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjUxMzZjM2JkNjAwMzFhMTM1ZjAyMSIsImlhdCI6MTY1MjY4Nzc2NiwiZXhwIjoxNjU1Mjc5NzY2fQ.Mn-j3D-KUVz1UDGQniyT6OhxAGDdJr-RheoOj9XZjQs",
          },
        }
      );
      showSuccessToaster("Update Successfully");
      props.onUpdate();
    } catch (err) {
      console.log("error occurs", err);
    }
  }

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const onChangeHandler = (event, editor) => {
    setDatas(editor.getData());
  };
  return (
    <Modal onHideIndex={props.onClose}>
      <Container>
        <Title>UPDATE CHAPTER</Title>
        <Form onSubmit={submitHandler}>
          <Input
            type="text"
            id="chaptertitle"
            placeholder="Enter the title here"
            // ref={titleRef}
            value={title}
            onChange={titleChangeHandler}
          />
          <CKEditor
            editor={ClassicEditor}
            data={datas}
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
          <UploadButton>Update</UploadButton>
        </Form>
      </Container>
    </Modal>
  );
};

export default UpdateChapter;

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
