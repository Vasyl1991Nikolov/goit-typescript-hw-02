import React from 'react';

interface ImageCardProps {
  src: string; 
  alt: string; 
  onClick: () => void; 
}

const ImageCard: React.FC<ImageCardProps> = ({ src, alt, onClick }) => {
  return (
    <div onClick={onClick}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default ImageCard;
