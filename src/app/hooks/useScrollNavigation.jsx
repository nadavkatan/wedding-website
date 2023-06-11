import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const useScrollNavigation = (nextPage, previousPage) => {
  const navigate = useNavigate();
  const isNavigatingRef = useRef(false);
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const isAtBottom =
        window.innerHeight + window.pageYOffset >= document.body.offsetHeight;
      const isAtTop = window.pageYOffset === 0;

      if (!isAtBottom && !isAtTop) {
        clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current = setTimeout(() => {
          isNavigatingRef.current = false;
        }, 500); // Adjust the delay as needed
      }
    };

    const handleWheel = (event) => {
      const { deltaY } = event;

      if (deltaY > 0 && nextPage && !isNavigatingRef.current) {
        isNavigatingRef.current = true;
        clearTimeout(scrollTimeoutRef.current);
        navigate(nextPage);
      } else if (deltaY < 0 && previousPage && !isNavigatingRef.current) {
        isNavigatingRef.current = true;
        clearTimeout(scrollTimeoutRef.current);
        navigate(previousPage);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheel);
      clearTimeout(scrollTimeoutRef.current);
    };
  }, [navigate, nextPage, previousPage]);
};

export default useScrollNavigation;
