import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Popup } from './Popup';
import { GalleryContext } from './../utils/GalleryContext';
import { Link } from 'react-router-dom';

export const Gallery = ({ listOfPhotos }) => {
    const { selectedPhoto, setSelectedPhoto } = useContext(GalleryContext);

    return (
        <div id="gallery">
            {listOfPhotos.slice(0, 50).map(photo => {
                return (
                    <div
                        key={photo.id}
                        className='image-holder'
                        onClick={() => { setSelectedPhoto(photo.url) }}
                    >
                        <img src={photo.thumbnailUrl} alt={photo.title} />
                    </div>
                )
            })}

            {selectedPhoto !== "" && <Popup />}
            <Link to="/albums">View Albums</Link>
        </div>
    )
}

Gallery.propTypes = {
    listOfPhotos: PropTypes.arrayOf(PropTypes.object).isRequired,
}
