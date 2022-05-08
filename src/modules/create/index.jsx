import React, { useState } from "react";
import styled from "styled-components";
import Button from "../components/button";
import Input from "../components/input";
import Page from "../components/page";
import { useDropzone } from "react-dropzone";
import { useNavigate } from "react-router-dom";
import InvalidMessage from "../auth/components/invalidmessage";
import { showErrorToaster, showSuccessToaster } from "../../components/Toaster";
import UserNav from "../components/usernav";
import { BaseURL } from "../AxiosInstance";

const Create = () => {
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

  let navigate = useNavigate();
  const path = "/home";
  const reg = new RegExp("^[0-9]+$");

  const [error, setError] = useState({
    name: false,
    author: false,
    price: false,
  });
  const [value, setValue] = useState({ name: "", category: "", price: "" });

  const [bookCategory, setBookCategory] = React.useState([]);

  React.useEffect(() => {
    async function getCategory() {
      const arrayOfBook = await BaseURL.get("/api/categories");
      setBookCategory(arrayOfBook.data);
    }
    getCategory();
  }, []);

  const handleCreate = () => {
    setError({
      ...error,
      name: value.name === "",
      author: value.author === "",
      price: value.price === "" || !reg.test(value.price),
    });
    if (
      error.name ||
      error.author ||
      error.price ||
      value.name === "" ||
      value.author === "" ||
      value.price === ""
    ) {
      showErrorToaster("Something Wrong, Check again !");
    } else {
      showSuccessToaster("Create Successfully !");
      navigate(path);
    }
  };

  const handleCancel = () => {
    navigate(path);
  };

  React.useEffect(() => {
    window.onbeforeunload = function () {
      return true;
    };

    return () => {
      window.onbeforeunload = null;
    };
  });

  return (
    <>
      <UserNav></UserNav>
      <Page>
        <Title>Create Your Book</Title>
        <InformationOfBook>
          <CoverImageWrapper>
            <CoverImage title="Image Cover" {...getRootProps()}>
              <input style={{}} {...getInputProps()} />
              <p
                style={{ position: "absolute", zIndex: "-1", fontSize: "22px" }}
              >
                + Add Image Cover
              </p>
              {images}
            </CoverImage>
          </CoverImageWrapper>
          <Infor>
            <InputCreate
              placeholder="Name of your book"
              className={error.name ? "invalid" : ""}
              onChange={(event) => {
                setError({ ...error, name: false });
                setValue({ ...value, name: event.target.value.trim() });
              }}
              onBlur={() => {
                setError({ ...error, name: value.name === "" });
              }}
            />
            {error.name && (
              <div>
                <InvalidNoti>Please fill name of the book</InvalidNoti>
              </div>
            )}

            <Select name="category" id="category">
              {bookCategory.map((element) => (
                <option value={element._id}>{element.categoryName}</option>
              ))}
            </Select>

            <InputCreate
              placeholder="Price (e.g: 0, 10, ...$)"
              className={error.price ? "invalid" : ""}
              onChange={(event) => {
                setError({ ...error, price: false });
                setValue({ ...value, price: event.target.value.trim() });
              }}
              onBlur={() => {
                setError({
                  ...error,
                  price: value.price === "" || !reg.test(value.price),
                });
              }}
            />
            {error.price && (
              <div>
                <InvalidNoti>
                  Please fill price of the book (e.g: 0,1,2,..9)
                </InvalidNoti>
              </div>
            )}
          </Infor>
        </InformationOfBook>
        <WrapButton>
          <ButtonCancel onClick={handleCancel}>Cancel</ButtonCancel>
          <Button onClick={handleCreate}>Create</Button>
        </WrapButton>
      </Page>
    </>
  );
};

export default Create;

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
  & .invalid {
    border: 1px solid red;
  }
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
const InvalidNoti = styled(InvalidMessage)`
  margin-bottom: 10px;
`;
