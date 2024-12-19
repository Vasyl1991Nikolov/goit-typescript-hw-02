import React from 'react';
import './ImageGalleryItem.css';

interface Image {
  urls: { small: string; full: string };
  alt_description: string | null;
}

interface ImageGalleryItemProps {
  image: Image; 
  onClick: () => void; 
}

const ImageGalleryItem: React.FC<ImageGalleryItemProps> = ({ image, onClick }) => {
  return (
    <div className="image-gallery-item" onClick={onClick}>
      <img src={image.urls.small} alt={image.alt_description || 'Image'} />
    </div>
  );
};

export default ImageGalleryItem;
