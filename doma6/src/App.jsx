import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Gallery } from "./components/Gallery";
import { Home } from "./components/Home";
import { Nav } from "./components/Nav";
import axios from "axios";
import { API_URL } from "./utils/constants";
import "./css/App.css";
import { GalleryContext, AlbumContext } from "./utils/GalleryContext";
import { Album } from "./components/Album"; 

export function App() {
  const [photos, setPhotos] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(""); 

  useEffect(() => {
    axios
      .get(`${API_URL}/photos`)
      .then((res) => setPhotos(res.data))
      .catch((err) => alert(err));

    axios
      .get(`${API_URL}/albums`)
      .then((res) => setAlbums(res.data))
      .catch((err) => alert(err));
  }, []);

  return (
    <div id="app">
      <Nav />
      <GalleryContext.Provider value={{ selectedPhoto, setSelectedPhoto, photos, setPhotos }}>
        <AlbumContext.Provider value={{ albums }}> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/gallery"
              element={<Gallery listOfPhotos={photos} />}
            />
            <Route path="/albums" element={<Album />} /> 
          </Routes>
        </AlbumContext.Provider>
      </GalleryContext.Provider>
    </div>
  );
}
