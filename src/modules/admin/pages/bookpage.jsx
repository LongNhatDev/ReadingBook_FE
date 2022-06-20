import React, { useEffect, useState } from 'react'
import { BaseURL } from '../../AxiosInstance'
import Content from "../components/content"
import TableB from '../components/tableB';

const BookPage = () => {
    const [bookData, setBookData] = useState([]);
    const deleteBook = (id) => {
        console.log(id);
        const newData = bookData.filter((book) => book._id !== id);
        setBookData(newData);
    }
    const addBook = (book) => {
        const newData = bookData.concat([book])
        setBookData(newData);
    }

    const editBook = (book) => {
        const newData = bookData.map((item) => {
            if (item._id === book._id) {
                return book;
            }
            return item
        })
        setBookData(newData)
    }

    useEffect(() => {
        async function getAllBook() {
            try {
                const res = await BaseURL.get("http://localhost:3000/api/books");
                console.log(res.data);
                const transformData = res.data.filter((book) => {
                    if (!book.author || !book.category) {
                        return false;
                    }
                    return true;
                })
                setBookData(transformData)
            } catch (err) {
                console.log(err);
            }
        }
        getAllBook();
    }, [])

    const header = ["No", "Cover", "Name", "Author", "Operation"]

    return (
        <>
            <Content header="BOOK MANAGEMENT">
                {bookData.length > 0 && <TableB data={bookData} header={header} onDelete={deleteBook} onAdd={addBook} onEdit={editBook} />}
            </Content>
        </>
    )
}

export default BookPage