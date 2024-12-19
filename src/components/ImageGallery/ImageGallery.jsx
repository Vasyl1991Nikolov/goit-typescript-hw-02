import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import './ImageGallery.css';

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className="image-gallery">
      {images.map((image) => (
        <li key={image.id}>
          <ImageGalleryItem image={image} onClick={() => onImageClick(image)} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;

