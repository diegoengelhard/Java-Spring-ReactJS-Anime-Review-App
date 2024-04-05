import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import StarRating from '../components/StarRating';

const HomePage = () => {
    // TODO: useEffect to fetch data from the server

    return (
        <>
            <div className='center'>
                <h1 className="heading">Explore</h1>
                <p className="sub_heading">List of anime to watch</p>

                <ul className="anim_list">
                    <li className="anime_card">
                        <div className="anime_info">
                            <h4>Naruto</h4>
                            <StarRating rating={3} readOnly />
                            <p>Best anime ever!</p>
                        </div>

                        <div className="anime_link">
                            <Link to='/' target="_blank" className="link">
                                Watch
                            </Link>
                        </div>
                    </li>
                </ul>
            </div>

            {/* TODO: Map data */}
        </>
    )
}

export default HomePage