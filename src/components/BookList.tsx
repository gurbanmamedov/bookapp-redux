import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../redux/store';

const BookList: React.FC = () => {
    const books = useSelector((state: RootState) => state.books.books);

    return (
        <div>
            <h1>Book List</h1>
            <ul>
                {books.map((book: any) => (
                    <li key={book.id}>
                        <Link to={`/book/${book.id}`}>{book.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;