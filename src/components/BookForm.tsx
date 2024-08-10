import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, editBook } from '../redux/booksSlice';
import { useParams, useNavigate } from 'react-router-dom';
import { RootState } from '../redux/store';

const BookForm: React.FC = () => {
    const { id } = useParams<{ id?: string }>();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const book = useSelector((state: RootState) =>
        state.books.books.find((b) => b.id === id)
    );

    const [formData, setFormData] = useState({
        title: '',
        author: '',
        year: '',
        genre: '',
        description: '',
    });

    useEffect(() => {
        if (book) {
            setFormData({
                title: book.title,
                author: book.author,
                year: book.year.toString(),
                genre: book.genre,
                description: book.description,
            });
        }
    }, [book]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const bookData = { ...formData, id: id || Date.now().toString() };
        if (id) {
            dispatch(editBook(bookData));
        } else {
            dispatch(addBook(bookData));
        }
        navigate('/');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Title"
            />
            <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                placeholder="Author"
            />
            <input
                type="number"
                name="year"
                value={formData.year}
                onChange={handleChange}
                placeholder="Year"
            />
            <input
                type="text"
                name="genre"
                value={formData.genre}
                onChange={handleChange}
                placeholder="Genre"
            />
            <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Description"
            />
            <button type="submit">Save</button>
        </form>
    );
};

export default BookForm;