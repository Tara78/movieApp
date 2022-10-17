import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
// import { BASE_URL } from "../utils/URLs";

const MovieDetails = () => {
  const [details, setDetails] = useState({});
  const navigate = useNavigate();
  const API_KEY = "79339436b04cca29ee82635056159807";
  const { id } = useParams();

  const returnToDefaultPage = () => {
    navigate("/");
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    )
      .then(res => res.json())
      .then(data => setDetails(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section
      className="detail-container"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${details.backdrop_path})`,
      }}
    >
      <button
        type="button"
        className="go-back-btn"
        onClick={returnToDefaultPage}
      >
        <span className="go-back-home">«</span>Go Back -
        movie details page
      </button>
      <div>
        <p>{details.overview}</p>
      </div>
    </section>
  );
};

export default MovieDetails;
