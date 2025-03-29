import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollTop } from "../utils/scroll";

const ScrollToTop = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    scrollTop();
  }, [pathname, search]);
  return null;
};

export default ScrollToTop;
