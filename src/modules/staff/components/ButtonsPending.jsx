import React, { useContext } from "react";
import { AiFillUpSquare, AiTwotoneDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { authentication } from "../../../authProvider";
import ConfirmBox from "../../../components/ConfirmBox";
import {
  showErrorToaster,
  showSuccessToaster,
} from "../../../components/Toaster";
import { BaseURL } from "../../AxiosInstance";

const ButtonsPending = (props) => {
  const navigate = useNavigate();

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

  const handleAccept = async () => {
    try {
      const authorization = {
        headers: {
          Authorization: token,
        },
      };
      const body = {
        isAccept: true,
      };
      // ok
      await BaseURL.patch(
        `api/books/book/${props.id}/accept-book`,
        body,
        authorization
      );
      window.location.reload();
      // navigate("/staff/bookscensored");
      showSuccessToaster("Accept book successful!");
    } catch (err) {
      showErrorToaster("Accept book fail");
    }
  };

  return (
    <Bar>
      <div>
        <AiFillUpSquare
          style={{ color: "green", fontSize: "2.5rem", marginRight: "1rem" }}
          onClick={handleAccept}
        />
      </div>
      <div>
        <AiTwotoneDelete
          style={{ color: "red", fontSize: "2.5rem" }}
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

export default ButtonsPending;

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
