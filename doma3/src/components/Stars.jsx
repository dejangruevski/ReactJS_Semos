import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const MovieRating = ({ rating }) => {
    const [currentRating, setCurrentRating] = useState(rating);

    const handleStarClick = (selectedRating) => {
        setCurrentRating(selectedRating);
    };

    return (
        <div>
            {[...Array(5)].map((_, i) => {
                const starValue = i + 1;
                return (
                    <span
                        key={i}
                        onClick={() => handleStarClick(starValue)}
                        style={{ cursor: 'pointer', color: starValue <= currentRating ? 'gold' : 'gray' }}
                    >
                        ★
                    </span>
                );
            })}
        </div>
    );
};

MovieRating.propTypes = {
    rating: PropTypes.number.isRequired,
};



