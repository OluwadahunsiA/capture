import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import MovieState from "../components/movieState";
import Awards from "../components/Awards";

import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const MovieDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;

  const [info, setInfo] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const film = info.filter((movie) => movie.url === url);
    setMovie(film[0]);
  }, [url, movie, info]);

  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      {movie && (
        <div className="movie">
          <h1 className="movieTitle">{movie.title}</h1>
          <img src={movie.mainImg} alt="athlete" />
          <div className="awardComp">
            {movie.awards.map((award) => (
              <Awards
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </div>
          <img src={movie.secondaryImg} alt="athlete" />
        </div>
      )}
    </motion.div>
  );
};

export default MovieDetail;
