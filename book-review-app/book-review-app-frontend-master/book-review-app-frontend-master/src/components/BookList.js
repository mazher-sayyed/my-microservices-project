import React, { useState, useEffect } from "react";
        import { fetchBooks, fetchReviews } from "../api";
        import Reviews from "./Reviews";

        const BookList = () => {
            const [books, setBooks] = useState([]);
            const [selectedBook, setSelectedBook] = useState(null);
            const [reviews, setReviews] = useState([]);

            useEffect(() => {
                fetchBooks().then(setBooks);
            }, []);

            const handleSelectBook = async (book) => {
                setSelectedBook(book);
                setReviews(await fetchReviews(book.id));
            };

            return (
                <div>
                    <h2>📚 Book List</h2>
                    <ul>
                        {books.map((book) => (
                            <li key={book.id} onClick={() => handleSelectBook(book)}>
                                <strong>{book.title}</strong> by {book.author}
                            </li>
                        ))}
                    </ul>

                    {selectedBook && (
                        <Reviews book={selectedBook} reviews={reviews} setReviews={setReviews} />
                    )}
                </div>
            );
        };

        export default BookList;