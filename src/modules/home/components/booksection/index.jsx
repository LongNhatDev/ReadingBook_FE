import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BookSection = () => {
  return (
    <BookSections>
      <SectionName>Completed Novel</SectionName>
      <ListBook>
        <BookInfo>
          <BookLink>
            to="/"
            <BookCover
              src="https://www.dtv-ebook.com/images/sach-moi-phat-hanh/2019/bup-be-di-duong-vong-tac-gia-yonezawa-honobu.jpg"
              alt="book-cover"
            ></BookCover>
          </BookLink>
          <BookName>Hyouka</BookName>
          <BookCategory>Mystery</BookCategory>
        </BookInfo>
        <BookInfo>
          <BookLink>
            to="/"
            <BookCover
              src="https://www.dtv-ebook.com/images/sach-moi-phat-hanh/2019/bup-be-di-duong-vong-tac-gia-yonezawa-honobu.jpg"
              alt="book-cover"
            ></BookCover>
          </BookLink>
          <BookName>Hyouka</BookName>
          <BookCategory>Mystery</BookCategory>
        </BookInfo>
        <BookInfo>
          <BookLink>
            to="/"
            <BookCover
              src="https://www.dtv-ebook.com/images/sach-moi-phat-hanh/2019/bup-be-di-duong-vong-tac-gia-yonezawa-honobu.jpg"
              alt="book-cover"
            ></BookCover>
          </BookLink>
          <BookName>Hyouka</BookName>
          <BookCategory>Mystery</BookCategory>
        </BookInfo>
        <BookInfo>
          <BookLink>
            to="/"
            <BookCover
              src="https://www.dtv-ebook.com/images/sach-moi-phat-hanh/2019/bup-be-di-duong-vong-tac-gia-yonezawa-honobu.jpg"
              alt="book-cover"
            ></BookCover>
          </BookLink>
          <BookName>Hyouka</BookName>
          <BookCategory>Mystery</BookCategory>
        </BookInfo>
        <BookInfo>
          <BookLink>
            to="/"
            <BookCover
              src="https://www.dtv-ebook.com/images/sach-moi-phat-hanh/2019/bup-be-di-duong-vong-tac-gia-yonezawa-honobu.jpg"
              alt="book-cover"
            ></BookCover>
          </BookLink>
          <BookName>Hyouka</BookName>
          <BookCategory>Mystery</BookCategory>
        </BookInfo>
        <BookInfo>
          <BookLink>
            to="/"
            <BookCover
              src="https://www.dtv-ebook.com/images/sach-moi-phat-hanh/2019/bup-be-di-duong-vong-tac-gia-yonezawa-honobu.jpg"
              alt="book-cover"
            ></BookCover>
          </BookLink>
          <BookName>Hyouka</BookName>
          <BookCategory>Mystery</BookCategory>
        </BookInfo>
        <BookInfo>
          <BookLink>
            to="/"
            <BookCover
              src="https://www.dtv-ebook.com/images/sach-moi-phat-hanh/2019/bup-be-di-duong-vong-tac-gia-yonezawa-honobu.jpg"
              alt="book-cover"
            ></BookCover>
          </BookLink>
          <BookName>Hyouka</BookName>
          <BookCategory>Mystery</BookCategory>
        </BookInfo>
        <BookInfo>
          <BookLink>
            to="/"
            <BookCover
              src="https://www.dtv-ebook.com/images/sach-moi-phat-hanh/2019/bup-be-di-duong-vong-tac-gia-yonezawa-honobu.jpg"
              alt="book-cover"
            ></BookCover>
          </BookLink>
          <BookName>Hyouka</BookName>
          <BookCategory>Mystery</BookCategory>
        </BookInfo>
      </ListBook>
    </BookSections>
  );
};

export default BookSection;

const BookSections = styled.section`
  width: 100%;
  position: relative;
  background-color: #f6f7fc;
  margin: 0;
  padding: 0;
`;

const SectionName = styled.div`
position: relative;
  max-width: 1150px;
  width: 100%;
  left: 97px;
  font-size: 24px;
  color: #121217;
  text-align: left;
  margin-bottom: 20px;
  padding-top: 10px;
  &::after {
    content: "";
    width: 1150px;
    height: 1px;
    background-color: #83848f;
    position: absolute;
    bottom: -3px;
    left: 0;`;

const ListBook = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const BookInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 110px;
  height: 215px;
  align-items: center;
  padding: 5px;
  margin: 0 20px;
`;

const BookLink = styled(Link)`
  display: inline-block;
`;

const BookCover = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
`;

const BookName = styled.h4`
  font-size: 16px;
  font-weight: 700;
  margin-top: 5px;
  margin-bottom: 3px;
  display: inline-block;
  color: #121217;
`;

const BookCategory = styled.span`
  color: #83848f;
  font-size: 13px;
`;
