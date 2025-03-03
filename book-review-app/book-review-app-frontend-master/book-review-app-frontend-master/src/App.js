import React, { useState } from "react";
        import BookList from "./components/BookList";
        import AddBook from "./components/AddBook";

        function App() {
            const [books, setBooks] = useState([]);

            return (
                <div>
                    <h1>📚 Book Review App</h1>
                    <AddBook setBooks={setBooks} />
                    <BookList />
                </div>
            );
        }

        export default App;