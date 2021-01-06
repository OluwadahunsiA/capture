export const pageAnimation = {
  hidden: { opacity: 0, y: 300 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeIn",
      staggerChildren: 0.25,
      when: "beforeChildren",
    },
  },
  exit: { opacity: 0, y: 300, transition: { duration: 0.75 } },
};

export const titleAnim = {
  hidden: { opacity: 0, y: 300, transition: { duration: 0.75 } },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75 },
  },
};

export const pictureAnim = {
  hidden: { opacity: 0, scale: 1.2 },
  show: { opacity: 1, scale: 1, transition: { duration: 1 } },
  transition: { duration: 1 },
};

export const fade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1 } },
};

export const wavy = {
  hidden: { pathLength: 0, pathOffset: 4 },
  show: { pathLength: 1, pathOffset: 0, transition: { duration: 5 } },
};

export const slider = {
  hidden: {
    x: "-130%",
    skew: "45deg",
  },
  show: {
    x: "150%",
    skew: "0deg",
    transition: { ease: "easeOut", duration: 1 },
  },
};

export const sliderContainer = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, ease: "easeOut" } },
};

export const lineAnim = {
  hidden: { opacity: 0, width: "0%" },
  show: { opacity: 1, width: "100%", transition: { duration: 1 } },
};

export const scrollReveal = {
  hidden: { opacity: 0, scale: 1.2, transition: { duration: 0.75 } },
  show: { opacity: 1, scale: 1, transition: { duration: 0.75 } },
};
