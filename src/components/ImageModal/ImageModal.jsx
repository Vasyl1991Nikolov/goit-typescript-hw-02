import React from 'react';
import Modal from 'react-modal';
import './ImageModal.css';

Modal.setAppElement('#root');

const ImageModal = ({ image, onClose }) => {
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
      <img src={image.urls.regular} alt={image.alt_description} />
    </Modal>
  );
};

export default ImageModal;
