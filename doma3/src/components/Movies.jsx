import React from 'react';
import PropTypes from 'prop-types';
import { MovieRating } from './Stars';

export const Movies = ({ movies }) => {
    return (
        <div>
            <h1>List of Movies</h1>
            <hr />
            {movies.map(({ name, date, genre, plot, imdblink, imgURL, rating }, i) => (
                <div key={i} style={{ marginBottom: '20px' }}>
                    <h2>{name}</h2>
                    <p>Date: {date}</p>
                    <p>Genre: {genre}</p>
                    <p>Plot: {plot}</p>
                    <p><a href={imdblink} target="_blank" rel="">IMDB Link</a></p>
                    <img src={imgURL} alt={name} style={{ maxWidth: '150px' }} />
                    <MovieRating rating={rating} />
                    <hr />
                </div>
            ))}
        </div>
    );
};

Movies.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object),
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    plot: PropTypes.string.isRequired,
    imdblink: PropTypes.string.isRequired,
    imgURL: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
};


