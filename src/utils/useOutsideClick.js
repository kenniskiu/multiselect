import { useEffect } from "react";

const useOutsideClick = (refs, callback) => {
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (refs.every((ref) => ref.current && !ref.current.contains(e.target))) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [refs, callback]);
};

export default useOutsideClick;
