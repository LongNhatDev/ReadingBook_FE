import React from "react";
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
import axios from "axios";

const Create = () => {
  let navigate = useNavigate();
  const path = "/home";
  const reg = new RegExp("^[0-9]+$");
  const token = localStorage.getItem("token");
  const [bookCategory, setBookCategory] = React.useState([]);
  const [error, setError] = React.useState({
    name: false,
    author: false,
    price: false,
    description: false,
  });
  const [value, setValue] = React.useState({
    name: "",
    categoryId: "",
    coverImage: "",
    description: "",
    price: "",
  });
  let fileName = "";
  let fileType = "";
  const [file, setfile] = React.useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: async (acceptedfile) => {
      setfile(
        acceptedfile.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  React.useEffect(() => {
    window.onbeforeunload = function () {
      return true;
    };

    return () => {
      window.onbeforeunload = null;
    };
  });

  React.useEffect(() => {
    async function getCategory() {
      const arrayOfBook = await BaseURL.get("/api/categories");
      setBookCategory(arrayOfBook.data);
    }
    getCategory();
  }, []);

  const images = file.map((file) => (
    <div key={file.name}>
      <div>
        <img
          src={file.preview}
          style={{ height: "243px", width: "182.25px", marginTop: "4px" }}
          alt="preview"
        />
      </div>
    </div>
  ));

  file.forEach((file) => {
    fileName = file.name;
    fileType = file.type;
  });

  const handleCreate = async () => {
    try {
      setError({
        ...error,
        name: value.name === "",
        author: value.author === "",
        description: value.description === "",
        price: value.price === "" || !reg.test(value.price),
      });
      if (value.categoryId === "") {
        value.categoryId = bookCategory[0]._id;
      }
      if (
        error.description ||
        error.name ||
        error.author ||
        error.price ||
        value.name === "" ||
        value.author === "" ||
        value.price === "" ||
        value.description === ""
      )
        showErrorToaster("Something Wrong, Check again !");

      const responeGetURL = await BaseURL.get(
        `/api/sign-s3?file-name=${fileName}&file-type=${fileType}&bucket-name=book-covers`
      );
      if (responeGetURL !== undefined || responeGetURL !== null) {
        const authorization = {
          headers: {
            Authorization: token,
          },
        };
        const config = {
          headers: {
            "Content-Type": fileType,
          },
        };
        await axios.put(responeGetURL.data.signedRequest, file[0], config);

        const inforRequest = {
          bookName: value.name,
          category: value.categoryId,
          description: value.description,
          price: value.price,
          coverImageURL: responeGetURL.data.url,
        };
        const respone = await BaseURL.post(
          "/api/books",
          inforRequest,
          authorization
        );
        if (respone !== null && respone !== undefined) {
          showSuccessToaster("Create book successfully!");
          navigate(path);
        }
      }
    } catch (error) {
      showErrorToaster("Error !");
    }
  };

  const handleCancel = () => {
    navigate(path);
  };

  return (
    <>
      <UserNav />
      <Page>
        <Title>Create Your Book</Title>

        <InformationOfBook>
          <CoverImageWrapper>
            <CoverImage title="Image Cover" {...getRootProps()}>
              <input style={{}} {...getInputProps()} />
              <p
                style={{
                  position: "absolute",
                  zIndex: "-1",
                  fontSize: "1.8rem",
                }}
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

            <Select
              name="category"
              id="category"
              onChange={(element) => {
                setValue({ ...value, categoryId: element.target.value });
              }}
            >
              {bookCategory.map((element) => (
                <option value={element._id}>{element.categoryName}</option>
              ))}
            </Select>
            <InputCreate
              placeholder="Description of your book"
              className={error.description ? "invalid" : ""}
              onChange={(event) => {
                setError({ ...error, description: false });
                setValue({ ...value, description: event.target.value.trim() });
              }}
              onBlur={() => {
                setError({ ...error, description: value.description === "" });
              }}
            />
            {error.description && (
              <div>
                <InvalidNoti>Please fill description of the book</InvalidNoti>
              </div>
            )}

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
  height: 248px;
  width: 184.25px;
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
