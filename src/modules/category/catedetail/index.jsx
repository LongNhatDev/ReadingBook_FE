import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
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

  useEffect(() => {
    async function getBooksData() {
      console.log("this is run again");
      const booksData = [];
      try {
        const response = await BaseURL.get("/api/books");
        const data = response.data;
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
            bookrate: element.avrStarNumber,
            viewNumber: element.viewNumber,
            author: element.author,
            category: element.category,
            chapters: element.chapters,
            price: element.price,
          });
        });
      } catch (err) {
        console.log("error occur", err);
      }

      setBooks(booksData);
    }
    getBooksData();
  }, [categoryType.catename]);

  let booksData = books.filter((book) => {
    return book.booktag === categoryType.catename;
  });

  if (categoryType.catename.toString() === "all") {
    booksData = [...books];
  }

  return (
    <MainSection>
      <Side selected={"/category/" + categoryType.catename} />
      <MainSide data={booksData} />
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
