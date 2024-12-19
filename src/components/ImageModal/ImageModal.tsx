import React from 'react';
import Modal from 'react-modal';
import './ImageModal.css';

interface Image {
  urls: { regular: string };
  alt_description: string | null;
}

interface ImageModalProps {
  image: Image | null; 
  onClose: () => void; 
}

Modal.setAppElement('#root');

const ImageModal: React.FC<ImageModalProps> = ({ image, onClose }) => {
  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      className="modal"
      overlayClassName="overlay"
    >
      <button className="close-button" onClick={onClose}>
        &times;
      </button>
      {image && (
        <img src={image.urls.regular} alt={image.alt_description || 'Image'} />
      )}
    </Modal>
  );
};

export default ImageModal;
