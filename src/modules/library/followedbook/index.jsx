import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { authentication } from '../../../authProvider';
import { BaseURL } from '../../AxiosInstance'
import BookIntro from '../../category/components/bookintro';

const FollowedBook = () => {
    const [books, setBooks] = useState([]);
    const authCtx = useContext(authentication);

    const updateHandler = (id) => {
        const newBooks = books.filter((book) => {
            if (book._id === id) {
                return false;
            }
            return true;
        })
        setBooks(newBooks);
    }
    useEffect(() => {
        async function getFollowedBook() {
            try {
                const res = await BaseURL.get("/api/followed-books", {
                    headers: {
                        Authorization: authCtx.accessToken
                    }
                });
                const dataFilter = res.data.filter((item) => {
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
                const booksData = [];
                dataFilter.forEach((element) => {
                    booksData.push({
                        _id: element._id,
                        coverImageURL: element.coverImageURL,
                        bookName: element.bookName,
                        description: element.description,
                        bookrate: element.avrStarNumber.toFixed(2),
                        viewNumber: element.viewNumber,
                        author: element.author,
                        chapters: element.chapters,
                        price: element.price,
                        isFollowed: true
                    });
                });
                setBooks(booksData);
            } catch (err) {
                console.log(err);
            }
        }
        getFollowedBook();
    }, [authCtx.accessToken])
    return (
        <Main>
            {books.map((book) => (<BookIntro key={book._id} onUpdate={updateHandler} bookinfo={book} />))}
        </Main>
    )
}

export default FollowedBook

const Main = styled.main`
    width: 100vw;
    padding: 2rem;
    display: flex;
    flex-wrap: wrap;
`