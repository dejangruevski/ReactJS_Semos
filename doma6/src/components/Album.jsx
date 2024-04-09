import React, { useContext } from 'react';
import { AlbumContext } from './../utils/GalleryContext';

export const Album = () => {
    const { albums } = useContext(AlbumContext);

    return (
        <div>
            <h2>Albums</h2>
            <ul>
                {albums.map(album => (
                    <li key={album.id}>{album.title}</li>
                ))}
            </ul>
        </div>
    )
}
