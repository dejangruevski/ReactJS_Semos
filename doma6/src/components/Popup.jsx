import React, { useContext } from 'react';
import { GalleryContext } from './../utils/GalleryContext';

export const Popup = () => {
    const { selectedPhoto, setSelectedPhoto, photos, setPhotos } = useContext(GalleryContext);

    const deletePhoto = () => {
        const updatedPhotos = photos.filter(photo => photo.url !== selectedPhoto);
        setPhotos(updatedPhotos);
        setSelectedPhoto("");
    };

    return (
        <div id="popup">
            <button className='close-popup' onClick={() => setSelectedPhoto("")}>&times;</button>
            <button className='delete-photo' onClick={deletePhoto}>Delete</button>
            <div className='popup-container'>
                <img src={selectedPhoto} alt={"Image"} />
            </div>
        </div>
    )
}
