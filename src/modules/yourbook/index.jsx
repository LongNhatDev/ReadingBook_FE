import React, { useState } from "react";
import styled from "styled-components";
import Button from "../components/button";
import Input from "../components/input";
import Page from "../components/page";
import { useDropzone } from "react-dropzone";

const YourBook = () => {
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const images = files.map((file) => (
    <div key={file.name}>
      <div>
        <img
          src={file.preview}
          style={{ height: "243px", width: "278px", marginTop: "4px" }}
          alt="preview"
        />
      </div>
    </div>
  ));

  return (
    <Page>
      <Title>Create Your Book</Title>
      <InformationOfBook>
        <CoverImageWrapper>
          <CoverImage title="Image Cover" {...getRootProps()}>
            <input style={{}} {...getInputProps()} />
            <p style={{ position: "absolute", zIndex: "-1", fontSize: "22px" }}>
              + Add Image Cover
            </p>
            {images}
          </CoverImage>
        </CoverImageWrapper>
        <Infor>
          <InputCreate placeholder="Name of your book"></InputCreate>
          <InputCreate placeholder="Arthor"></InputCreate>
          <Select name="category" id="category">
            <option value="lightNovel">Light Novel</option>
            <option value="comic">Comic</option>
            <option value="webNovel">Web Novel</option>
          </Select>
          <InputCreate placeholder="Price (e.g: 0, 10, ...$)"></InputCreate>
        </Infor>
      </InformationOfBook>
      <WrapButton>
        <ButtonCancel>Cancel</ButtonCancel>
        <Button>Create</Button>
      </WrapButton>
    </Page>
  );
};

export default YourBook;

const InformationOfBook = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;
const CoverImageWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;
const Infor = styled.div`
  display: flex;
  flex: 1.2;
  flex-flow: column wrap;
  justify-content: flex-start;
  align-items: flex-start;
`;
const WrapButton = styled.div`
  margin-top: 40px;
  width: 30%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
`;
const ButtonCancel = styled(Button)`
  background-color: red;
`;
const Select = styled.select`
  border: 2px solid #dddddd;
  height: 50px;
  font-size: 20px;
  width: 60%;
  border-radius: 5px;
  margin: 10px 0 5px;
  padding-left: 5px;

  :hover {
    border: 2px solid blue;
  }
  &.invalid {
    border: 2px solid red !important;
    color: red;
  }
`;
const InputCreate = styled(Input)`
  width: 60%;
  height: 50px;
  font-size: 20px;
`;
const CoverImage = styled.div`
  position: relative;
  height: 245px;
  width: 280px;
  margin-right: 100px;
  border: 1px dashed black;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 6px #004468;
`;
const Title = styled.h1`
  text-shadow: 2px 2px 1px #00000033;
  margin: 30px 0;
  text-transform: uppercase;
  background-image: linear-gradient(
    to right,
    #051937,
    #004468,
    #00748c,
    #00a69d,
    #68d69d
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 2s linear infinite;
  display: inline-block;
  font-weight: bold;
  font-size: 60px;
  font-family: "Comic Sans MS", Courier, monospace;

  @keyframes textclip {
    to {
      background-position: 200% center;
    }
  }
`;
