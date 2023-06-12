import React, { useState } from "react";
import Modal from "../Modal/Modal";
import "./styles/styles.css";

const PhotoGallery = ({ images, onOpenModal, onCloseModal }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openModal = (index) => {
    console.log("openModal");
    setSelectedImageIndex(index);
    setModalOpen(true);
    onOpenModal();
  };

  const closeModal = () => {
    setModalOpen(false);
    onCloseModal();
  };

  return (
    <div className="photo-gallery">
      {images.map((image, index) => (
        <div
          className="image-container"
          key={index}
          onClick={() => openModal(index)}
        >
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
      {modalOpen ? (
        <Modal
          isOpen={modalOpen}
          onClose={closeModal}
          images={images}
          selectedImageIndex={selectedImageIndex}
        />
      ) : null}
    </div>
  );
};

export default PhotoGallery;
