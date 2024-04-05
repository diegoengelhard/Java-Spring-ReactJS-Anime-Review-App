import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

import StarRating from '../components/StarRating';

const CreatePage = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        title: "",
        link: "",
        rating: 0,
        review: "",
    });

    const handleChange = (e) => {
        setForm((prev) => {
            return {
                ...prev,
                [e.target.id]: e.target.value,
            };
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // TODO: Logic to submit the form
    };

    return (
        <div className='center'>
            <div className="form_area">
                <h1 className="title">Review Anime</h1>
                <form onSubmit={handleSubmit} className="form">
                    <div className="form_group">
                        <label htmlFor="title" className="sub_title">
                            Anime Name
                        </label>
                        <input
                            type="text"
                            className="form_style"
                            id="title"
                            placeholder="Enter anime name"
                            value={form.title}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form_group">
                        <label htmlFor="link" className="sub_title">
                            Link
                        </label>
                        <input
                            type="url"
                            className="form_style"
                            id="link"
                            placeholder="Enter anime link"
                            value={form.link}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form_group">
                        <label htmlFor="review" className="sub_title">
                            Review
                        </label>
                        <input
                            type="text"
                            className="form_style"
                            id="review"
                            placeholder="Enter your review"
                            value={form.review}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form_group">
                        <label htmlFor="rating" className="sub_title">
                            Your Rating
                        </label>
                        <StarRating onRatingChange={(rating) => setForm({ ...form, rating })} />
                    </div>
                    <div>
                        <button className="btn">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreatePage