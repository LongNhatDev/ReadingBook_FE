import React, { useContext } from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import styled from "styled-components";
import { authentication } from "../../../authProvider";
import ConfirmBox from "../../../components/ConfirmBox";
import {
  showErrorToaster,
  showSuccessToaster,
} from "../../../components/Toaster";
import { BaseURL } from "../../AxiosInstance";

const ButtonsCensored = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const context = useContext(authentication);
  const token = context.accessToken;

  const handleDelete = async () => {
    try {
      const authorization = {
        headers: {
          Authorization: token,
        },
      };
      // ok
      await BaseURL.delete(`api/books/book/${props.id}`, authorization);
      window.location.reload();
      showSuccessToaster("Delete successful!");
    } catch (err) {
      showErrorToaster("Delete fail");
    }
  };

  return (
    <Bar>
      <div>
        <AiTwotoneDelete
          style={{ color: "red", fontSize: "3rem" }}
          onClick={() => {
            setIsOpen(true);
          }}
        />
      </div>
      <ConfirmBox
        isOpen={isOpen}
        header="DELETE YOUR BOOK"
        message="Do you want to delete this book?"
        onCancel={() => {
          setIsOpen(false);
        }}
        onConfirm={handleDelete}
      />
    </Bar>
  );
};

export default ButtonsCensored;

const Bar = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  & > div:hover {
    transform: scale(1.3);
  }
  & > div:active {
    transform: scale(1);
  }
`;
