import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BookDetail: React.FC = () => {
    const { id } = useParams();
    const book = useSelector((state: any) =>
        state.books.books.find((b: any) => b.id === id)
    );

    if (!book) return <div>Book not found</div>;

    return (
        <div>
            <h1>{book.title}</h1>
            <p>Author: {book.author}</p>
            <p>Year: {book.year}</p>
            <p>Genre: {book.genre}</p>
            <p>Description: {book.description}</p>
        </div>
    );
};

export default BookDetail;