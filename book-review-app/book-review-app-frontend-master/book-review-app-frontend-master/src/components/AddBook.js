import React, { useState } from "react";
        import { addBook, fetchBooks } from "../api";

        const AddBook = ({ setBooks }) => {
            const [title, setTitle] = useState("");
            const [author, setAuthor] = useState("");

            const handleAddBook = async () => {
                if (!title || !author) return alert("Title and Author are required!");
                await addBook(title, author);
                setBooks(await fetchBooks());
                setTitle("");
                setAuthor("");
            };

            return (
                <div>
                    <h2>➕ Add a Book</h2>
                    <input type="text" placeholder="Book Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
                    <button onClick={handleAddBook}>Add Book</button>
                </div>
            );
        };

        export default AddBook;