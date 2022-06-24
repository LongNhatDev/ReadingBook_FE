import React, { useContext } from "react";
import styled from "styled-components";
import { FaStar, FaEye } from "react-icons/fa";
import { RiUserFollowLine, RiUserUnfollowLine } from "react-icons/ri"
import { useNavigate } from "react-router-dom";
import { BaseURL } from "../../../AxiosInstance";
import { authentication } from "../../../../authProvider";
import { showErrorToaster, showSuccessToaster } from "../../../../components/Toaster"

const BookIntro = (props) => {
  let navigator = useNavigate();
  const moveToReadPageHandler = () => {
    const path = `/books/${props.bookinfo._id}`;
    navigator(path);
  };

  const authCtx = useContext(authentication);

  const followHandler = async () => {
    props.onUpdate(props.bookinfo._id);
    try {
      await BaseURL.post("api/follow", { bookId: props.bookinfo._id }, {
        headers: {
          Authorization: authCtx.accessToken
        }
      })
      showSuccessToaster("Follow Successfully");
    } catch (err) {
      showErrorToaster("Error occurs")
    }
  }

  const unfollowHandler = async () => {
    props.onUpdate(props.bookinfo._id);
    try {
      await BaseURL.delete(`api/unfollow/book/${props.bookinfo._id}`, {
        headers: {
          Authorization: authCtx.accessToken
        }
      })
      showSuccessToaster("Unfollow Successfully");
    } catch (err) {
      showErrorToaster("Error occurs")
    }
  }



  const follow = props.bookinfo.isFollowed ? <BookAdd onClick={unfollowHandler} style={{ color: "red" }}><IconTru /><span> Unfollow</span></BookAdd> : <BookAdd onClick={followHandler} style={{ color: "green" }}><IconCong /><span> Follow</span></BookAdd>

  return (
    <Book>
      <BookImage
        onClick={moveToReadPageHandler}
        src={props.bookinfo.coverImageURL}
        alt="Cover of a book"
      ></BookImage>
      <BookDetail>
        {!!props.bookinfo.category && <BookTag>#{props.bookinfo.booktag}</BookTag>}
        <BookName>{props.bookinfo.bookName}</BookName>
        <BookDes>{props.bookinfo.description}</BookDes>
        <BookBottom>
          <BookRate>
            <span style={{ color: "yellow" }}>
              <FaStar />
            </span>
            <span> {props.bookinfo.bookrate}</span>
          </BookRate>
          <BookChapter>
            <span style={{ fontSize: 14 + "px", color: "red" }}>
              <IconMat />
            </span>
            <span style={{ marginLeft: "2px" }}>{props.bookinfo.viewNumber} views</span>
          </BookChapter>
          {follow}
        </BookBottom>
      </BookDetail>
    </Book>
  );
};

export default BookIntro;

const Book = styled.div`
  width: calc(33% - 4rem);
  display: flex;
  flex-direction: row;
  box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.25);
  margin-left: 3.5rem;
  margin-bottom: 3rem;
  height: 12rem;
`;
const BookImage = styled.img`
  width: 9rem;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
  flex-shrink: 0;
  cursor: pointer;
  &:hover {
  }
`;
const BookDetail = styled.div`
  height: 100%;
  padding: 5px 2rem;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  line-height: 1.2;
  flex: 1;
`;
const BookTag = styled.div`
  color: blue;
  text-transform: uppercase;
  font-size: 1.4rem;
`;
const BookName = styled.h3`
  margin-top: 5px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  font-size: 1.6rem;
`;
const BookDes = styled.p`
  font-size: 1.2rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  color: #121217;
  margin-top: 5px;
`;
const BookBottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: auto;
  align-items: center;
`;
const BookRate = styled.div`
  width: 2.5rem;
  display: flex;
`;
const BookChapter = styled.div`
  margin-left: 4rem;
`;
const BookAdd = styled.div`
  color: blue;
  margin-left: auto;
  border-radius: 8px;
  padding: 0 3px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0,0,0,0.15);
  }
`;

const IconMat = styled(FaEye)`
  transform: translateY(2px);
  margin-right: 2px;
`;

const IconCong = styled(RiUserFollowLine)`
  transform: translateY(2px);
`;
const IconTru = styled(RiUserUnfollowLine)`
  transform: translateY(2px);
`;


