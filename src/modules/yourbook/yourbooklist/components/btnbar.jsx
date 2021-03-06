import React, { useContext } from "react";
import styled from "styled-components";
import { AiFillEdit, AiTwotoneDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { BaseURL } from "../../../AxiosInstance";
import {
  showErrorToaster,
  showSuccessToaster,
} from "../../../../components/Toaster";
import ConfirmBox from "../../../../components/ConfirmBox";
import { authentication } from "../../../../authProvider";

const BtnBar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  let navigate = useNavigate();
  const context = useContext(authentication);
  const token = context.accessToken;

  const handleEdit = async () => {
    try {
      const authorization = {
        headers: {
          Authorization: token,
        },
      };
      const respone = await BaseURL.get(
        `api/books/book/${props.id}`,
        authorization
      );

      navigate("/create", {
        state: {
          bookId: props.id,
          bookName: respone.data.bookName,
          categoryId: respone.data.category._id,
          description: respone.data.description,
          coverImageURL: respone.data.coverImageURL,
          price: respone.data.price,
        },
      });
    } catch (error) {
      showErrorToaster("Error in Creating!");
    }
  };

  const handleDelete = async () => {
    try {
      const authorization = {
        headers: {
          Authorization: token,
        },
      };
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
        <AiFillEdit
          style={{ color: "#00B524", fontSize: "3rem", marginRight: "2rem" }}
          onClick={handleEdit}
        />
      </div>

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

export default BtnBar;

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
