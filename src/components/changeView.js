import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

import React from "react";

export const useChange = () => {
  const controls = useAnimation();
  const [element, view] = useInView();
  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }

  return [controls, element];
};
