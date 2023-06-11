import React from "react";
import { useRef, useState, useEffect } from "react";
import "@tomtom-international/web-sdk-maps/dist/maps.css";
import tt from "@tomtom-international/web-sdk-maps";
import "./styles/styles.css";
import { selinaImages } from "../../data/data";
import PhotoGallery from "../../components/PhotoGallery/Photogallery";
import useScrollNavigation from "../../hooks/useScrollNavigation";
import useMediaQuery from "../../hooks/useMediaQuery";
import Drawer from "../../components/Drawer/Drawer";
import locationBgRotated from "../../assets/images/location-bg-rotated.png";
import locationBg from "../../assets/images/location-bg.png";
import WeddingBg from "../../assets/images/wedding-bg.svg";

export default function Location() {
  const mapElement = useRef();
  const popupContainerRef = useRef();

  const isMobile = useMediaQuery("(max-width: 768px)");

  const [map, setMap] = useState({});
  const [popupOpen, setPopupOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const mapLatitude = 38.74542703459659;
  const mapLongitude = 23.333249980931956;

  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Set a timeout to enable the fade-in effect after a short delay
    const timeout = setTimeout(() => {
      setFadeIn(true);
    }, 20);

    const map = tt.map({
      key: "XsjkksueJIzGGVAKeOTxwLF49JqM50rC",
      container: mapElement.current,
      center: [mapLongitude, mapLatitude],
      zoom: 7,
      language: "en-US",
      zoomOnDoubleClick: false, // Disable zoom on double click
      scrollZoom: false, // Disable scroll zoom
    });
    setMap(map);

    const marker = new tt.Marker({ draggable: false })
      .setLngLat([mapLongitude, mapLatitude])
      .addTo(map);

    const popup = new tt.Popup({
      closeOnClick: false,
      closeButton: true,
      className: "custom-popup",
    })
      .setDOMContent(popupContainerRef.current)
      .setLngLat([mapLongitude, mapLatitude]);

    // Attach the popup to the marker on click
    marker.getElement().addEventListener("click", () => {
      console.log("test");
      setPopupOpen(true);
      popup.addTo(map);
    });

    map.addControl(new tt.NavigationControl(), "bottom-right");

    return () => {
      clearTimeout(timeout);
      map.remove();
    };
  }, []);

  return (
    <div
      className={`location-page-container fade-in ${fadeIn ? "active" : ""}`}
      style={{
        backgroundImage: isMobile
          ? `url(${locationBgRotated})`
          : `url(${locationBg})`,
      }}
    >
      {isMobile ? (
        <div onClick={() => setDrawerOpen(!drawerOpen)}>
          {" "}
          <Drawer />{" "}
        </div>
      ) : null}
      {/* <div
        style={{
          backgroundImage: isMobile
            ? `url(${locationBgRotated})`
            : `url(${locationBgRotated})`,
        }}
      > */}
      <header>
        <h1>Selina Kaminos Evia</h1>
      </header>
      <section className="info">
        <div className="selina-intro">
          <p>
            Welcome to Selina Kaminos Evia, the perfect destination for our
            wedding celebration. Located near the traditional fishing village of
            Limni in Evia, this beachfront resort offers a peaceful and natural
            setting that stole our hearts. We are delighted to share that the
            entire hotel has been rented exclusively for our special weekend. As
            a 4-star hotel, Kaminos Resort offers a comfortable and elegant
            atmosphere. To enhance your experience, all meals are included so
            you can enjoy the delicious flavors of Greece.
          </p>
        </div>
        <div
          className={`map-container ${modalOpen ? "hide-controlls" : ""}`}
          style={{ display: drawerOpen ? "none" : null }}
        >
          <div ref={mapElement} className="map"></div>
          <div ref={popupContainerRef} className="popup">
            <img src={selinaImages[12].src} alt={selinaImages[3].alt} />
            <h3>Selina Kaminos Evia</h3>
            <div>
              <a
                href="https://goo.gl/maps/vX1ocTGg28SbanR89"
                target="_blank"
                rel="noreferrer"
              >
                View on Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="photo-gallery">
        <PhotoGallery
          images={selinaImages}
          onOpenModal={() => setModalOpen(true)}
          onCloseModal={() => setModalOpen(false)}
        />
      </section>
    </div>
  );
}
