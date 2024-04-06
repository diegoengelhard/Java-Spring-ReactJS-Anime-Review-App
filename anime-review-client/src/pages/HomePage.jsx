import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import StarRating from '../components/StarRating';

const HomePage = () => {
    // TODO: useEffect to fetch data from the server
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);

    // Fetch data from the server
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get("http://localhost:8080/api/reviews");
                setReviews(response.data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                console.log(error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className='center'>
                <h1 className="heading">Explore</h1>
                <p className="sub_heading">List of anime</p>

                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <div className="anime_list">
                        {reviews.map((review) => (
                            <ul key={review.id} className="anim_list">
                                <li className="anime_card">
                                    <div className="anime_info">
                                        <h4>{review.title}</h4>
                                        <StarRating rating={review.rating} readOnly />
                                        <p>{review.review}</p>
                                    </div>

                                    <div className="anime_link">
                                        <Link to={review.link} target="_blank" className="link">
                                            Watch
                                        </Link>
                                    </div>
                                </li>
                            </ul>
                        ))}
                    </div>
                )}
            </div>

            {reviews.length === 0 && (
                <p className="no_result">Oops, No anime review available</p>
            )}
        </>
    )
}

export default HomePage