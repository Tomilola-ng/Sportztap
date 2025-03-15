import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { ReactNode } from "react";

const RouteSaver = ({ children }: { children: ReactNode }) => {
  const location = useLocation();

  useEffect(() => {
    localStorage.setItem("lastRoute", location.pathname);
  }, [location]);

  return children;
};

export default RouteSaver;
