import React from 'react';
import Modal from 'react-modal';
import './ImageModal.css';

interface Image {
  urls: { regular?: string };
  alt_description: string | null;
}

interface ImageModalProps {
  image: Image | null; 
  onClose: () => void; 
}

Modal.setAppElement('#root');

const ImageModal: React.FC<ImageModalProps> = ({ image, onClose }) => {
  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      className="modal"
      overlayClassName="overlay"
    >
      <div onClick={handleClose} className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        {image?.urls?.regular ? (
          <img
            src={image.urls.regular}
            alt={image.alt_description || 'Image'}
          />
        ) : (
          <p>No image available</p> 
        )}
      </div>
    </Modal>
  );
};

export default ImageModal;
