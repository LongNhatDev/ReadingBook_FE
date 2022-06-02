import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { BaseURL } from "../../../AxiosInstance";
import { showErrorToaster } from "../../../../components/Toaster";
import { useNavigate } from "react-router-dom";

const SeachBox = () => {
  const [value, setValue] = React.useState("");
  let navigate = useNavigate();
  const path = "/searchbook";

  const handleSearchBook = async () => {
    try {
      if (value === "") {
        showErrorToaster("Please fill book name before clicking search!");
        return;
      }
      const respone = await BaseURL.get(
        `/api/books?pageSize=20&pageNumber=1&keyword=${value}`
      );
      const arrayOfBooks = respone.data.books;
      navigate(path, { state: { array: arrayOfBooks } });
    } catch (error) {
      showErrorToaster("Error, please check!");
    }
  };
  return (
    <SearchBar>
      <Icon onClick={handleSearchBook} title="Search" />
      <Input
        type="text"
        placeholder="What's book do you looking for ... ? "
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
    </SearchBar>
  );
};

export default SeachBox;

const SearchBar = styled.div`
  width: 350px;
  height: 45px;
  background-color: #ffffff;
  border-radius: 100px;
  margin: 0px 8px 0px 0px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  border: none !important;
  font-size: 16px;
  flex: 5;
  outline: none;
  border-radius: 0 100px 100px 0;
`;

const Icon = styled(FaSearch)`
  color: rgba(0, 0, 0, 0.247);
  font-size: 20px;
  flex: 1;
  :hover {
    cursor: pointer;
    color: #00a69d;
  }
`;
