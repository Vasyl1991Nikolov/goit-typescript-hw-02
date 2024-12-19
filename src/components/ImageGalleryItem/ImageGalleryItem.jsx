import React from 'react';
import './ImageGalleryItem.css';

const ImageGalleryItem = ({ image, onClick }) => {
  return (
    <div className="image-gallery-item" onClick={onClick}>
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
};

export default ImageGalleryItem;