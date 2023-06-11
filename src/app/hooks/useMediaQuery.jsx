import { useEffect, useState } from "react";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);

    const updateMatches = () => {
      setMatches(mediaQuery.matches);
    };

    updateMatches(); // Initial check

    // Add listener for changes in matches
    mediaQuery.addEventListener("change", updateMatches);

    // Clean up the listener when the component unmounts
    return () => {
      mediaQuery.removeEventListener("change", updateMatches);
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;
