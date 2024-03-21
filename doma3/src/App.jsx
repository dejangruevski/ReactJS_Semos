import React from "react";
// npm i prop-types
import { Movies } from './components/Movies';

export function App() {
  const moviesCollection = [
    {
      name: "The Lord of the Rings: The Fellowship of the Ring",
      date: "2001",
      genre: "Action, Adventure",
      plot: "plot1",
      imdblink: "https://www.imdb.com/title/tt0120737/",
      imgURL: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",
      rating: 5
    },
    {
      name: "The Shawshank Redemption",
      date: "1994",
      genre: "Drama",
      plot: "plot2",
      imdblink: "https://www.imdb.com/title/tt0111161/",
      imgURL: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg",
      rating: 5
    },
    {
      name: "Interstellar",
      date: "2014",
      genre: "Adventure, Drama, Sci-Fi",
      plot: "plot3",
      imdblink: "https://www.imdb.com/title/tt0816692/",
      imgURL: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      rating: 4
    },
    {
      name: "The Dark Knight",
      date: "2008",
      genre: "Action, Crime, Drama",
      plot: "plot4",
      imdblink: "https://www.imdb.com/title/tt0468569/",
      imgURL: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg",
      rating: 3
    },
    {
      name: "The Matrix",
      date: "1999",
      genre: "Action, Sci-Fi",
      plot: "plot5",
      imdblink: "https://www.imdb.com/title/tt0133093/",
      imgURL: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      rating: 3
    },
  ];

  return (
    <div id="app">
      <Movies movies={moviesCollection} />
    </div>
  );
};


