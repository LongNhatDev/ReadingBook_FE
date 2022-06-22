import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { authentication } from "../../../authProvider";
import { BaseURL } from "../../AxiosInstance";
import MainSide from "../components/mainside";
import Side from "../components/side";

const CateDetail = () => {
  const categoryType = useParams();
  const [books, setBooks] = useState([]);

  const createTag = (name) => {
    let returnValue = "";
    for (let i = 0; i < name.length; i++) {
      if (name.charAt(i) !== " ") {
        returnValue += name.charAt(i);
      }
    }
    return returnValue.toLowerCase();
  };

  const updateHandler = (id) => {
    const newBooks = books.map((book) => {
      if (book._id === id) {
        return { ...book, isFollowed: !book.isFollowed }
      }
      return book;
    })
    console.log(newBooks);
    setBooks(newBooks);
  }

  const authCtx = useContext(authentication);

  useEffect(() => {
    async function getBooksData() {
      console.log("this is run again");
      const booksData = [];
      try {
        const response = !!authCtx.accessToken ? await BaseURL.get("/api/books", {
          headers: {
            Authorization: authCtx.accessToken
          }
        }) : await BaseURL.get("/api/books");
        const data = !!authCtx.accessToken ? response.data.result : response.data;
        const dataFilter = data.filter((item) => {
          if (
            item._id !== null &&
            item.coverImageURL !== null &&
            item.category !== null &&
            item.bookName !== null &&
            item.description !== null
          ) {
            return true;
          }
          return false;
        });
        dataFilter.forEach((element) => {
          booksData.push({
            _id: element._id,
            coverImageURL: element.coverImageURL,
            booktag: createTag(element.category.categoryName),
            bookName: element.bookName,
            description: element.description,
            bookrate: element.avrStarNumber.toFixed(2),
            viewNumber: element.viewNumber,
            author: element.author,
            category: element.category,
            chapters: element.chapters,
            price: element.price,
            isFollowed: element.isFollowed
          });
        });
      } catch (err) {
        console.log("error occur", err);
      }

      setBooks(booksData);
    }
    getBooksData();
  }, [categoryType.catename, authCtx.accessToken]);

  let booksData = books.filter((book) => {
    return book.booktag === categoryType.catename;
  });

  if (categoryType.catename.toString() === "all") {
    booksData = [...books];
  }

  return (
    <MainSection>
      <Side selected={"/category/" + categoryType.catename} />
      <MainSide data={booksData} onUpdate={updateHandler} />
    </MainSection>
  );
};

export default CateDetail;

const MainSection = styled.section`
  padding-top: 0.5rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 100%;
`;
