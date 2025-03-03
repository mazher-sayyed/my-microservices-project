const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8000";

export const fetchBooks = async () => {
    const response = await fetch(`${API_URL}/books`);
    return response.json();
};

export const addBook = async (title, author) => {
    await fetch(`${API_URL}/books?title=${encodeURIComponent(title)}&author=${encodeURIComponent(author)}`, { method: "POST" });
};

export const fetchReviews = async (bookId) => {
    const response = await fetch(`${API_URL}/reviews/${bookId}`);
    return response.json();
};

export const addReview = async (bookId, review) => {
    await fetch(`${API_URL}/reviews?book_id=${bookId}&review=${encodeURIComponent(review)}`, { method: "POST" });
};
