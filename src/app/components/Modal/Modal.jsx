import React, { useEffect, useState } from "react";
import "./styles/styles.css";
import ArrowIcon from "../ArrowIcon/ArrowIcon";

const Modal = ({ isOpen, onClose, images, selectedImageIndex }) => {
  const [currentImageIndex, setCurrentImageIndex] =
    useState(selectedImageIndex);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setModalVisible(true);
    }
  }, [isOpen]);

  const handleTransitionEnd = () => {
    if (!isOpen) {
      setModalVisible(false);
    }
  };

  const handleSwipe = (event) => {
    console.log("handleSqipe");
    if (!event.touches || event.touches.length === 0) {
      return; // No touches detected, exit early
    }

    const touchStartX = event.touches[0].clientX;

    if (!event.changedTouches || event.changedTouches.length === 0) {
      return; // No changed touches detected, exit early
    }

    const touchEndX = event.changedTouches[0].clientX;

    if (touchStartX - touchEndX > 10) {
      console.log("swipe left");
      // Swipe left, go to next image
      if (currentImageIndex < images.length - 1) {
        setCurrentImageIndex(currentImageIndex + 1);
      }
    } else if (touchEndX - touchStartX > 10) {
      console.log("swipe right");
      // Swipe right, go to previous image
      if (currentImageIndex > 0) {
        setCurrentImageIndex(currentImageIndex - 1);
      }
    }
  };

  const handlePrev = () => {
    const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(prevIndex);
  };

  const handleNext = () => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
  };

  return (
    <div
      onTouchStart={handleSwipe}
      onTouchEnd={handleSwipe}
      className={`modal ${isOpen ? "open" : ""} ${
        modalVisible ? "visible" : ""
      }`}
      onTransitionEnd={handleTransitionEnd}
    >
      <button className="modal-close" onClick={onClose}>
        X
      </button>
      <div onClick={handlePrev} className="modal-prev">
        <ArrowIcon direction="left" />
      </div>
      <div className="modal-content">
        {currentImageIndex != null ? (
          <img
            src={images[currentImageIndex].src}
            alt={images[currentImageIndex].alt}
          />
        ) : null}
      </div>
      <div onClick={handleNext} className="modal-next">
        <ArrowIcon direction="right" />
      </div>
    </div>
  );
};

export default Modal;
