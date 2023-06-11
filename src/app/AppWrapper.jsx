import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import App from "../App";

export default function AppWrapper() {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const pages = ["/", "/info", "/location", "/schedule"];

  const navigate = useNavigate();

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos > prevScrollPos) {
        console.log("Scroll down");
        // Scrolling down, navigate to the next page
        navigate(pages[currentPageIndex + 1]);
        setCurrentPageIndex(currentPageIndex + 1);
      } else {
        console.log("Scroll up");
        // Scrolling up, navigate to the previous page
        navigate(pages[currentPageIndex - 1]);
        setCurrentPageIndex(currentPageIndex - 1);
      }

      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navigate]);

  useEffect(() => {
    console.log("test");
  }, []);

  return (
    <>
      <App />
    </>
  );
}
