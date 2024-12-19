import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import './ImageGallery.css';

interface Image {
  id: string;
  urls: { small: string; full: string };
  alt_description: string | null;
  user: { name: string };
}

interface ImageGalleryProps {
  images: Image[]; 
  onImageClick: (image: Image) => void; 
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onImageClick }) => {
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
