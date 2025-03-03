import React, { useState } from "react";
        import { addReview, fetchReviews } from "../api";

        const Reviews = ({ book, reviews, setReviews }) => {
            const [newReview, setNewReview] = useState("");

            const handleAddReview = async () => {
                if (!newReview) return alert("Review cannot be empty!");
                await addReview(book.id, newReview);
                setReviews(await fetchReviews(book.id));
                setNewReview("");
            };

            return (
                <div>
                    <h3>📖 Reviews for {book.title}</h3>
                    <ul>
                        {reviews.map((review) => (
                            <li key={review.id}>{review.review}</li>
                        ))}
                    </ul>
                    <input type="text" placeholder="Write a review..." value={newReview} onChange={(e) => setNewReview(e.target.value)} />
                    <button onClick={handleAddReview}>Submit Review</button>
                </div>
            );
        };

        export default Reviews;