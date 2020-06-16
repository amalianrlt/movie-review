import React from "react";
import { Button } from "antd";
import { useSelector } from "react-redux";

function MovieReview() {
  const moviesId = useSelector((state) => state.homeReducer.moviesId);

  return (
    <div className="movie-review">
      <div>
        <img
          className="card-movie-review"
          src={moviesId.image_url}
          alt="description"
        />
      </div>
      <div className="card-movie-component">
        <h1>{moviesId.title}</h1>
        {/* <p>`Rating ${moviesId.Reviews.rating}/5`</p> */}
        <h2>Synopsis</h2>
        <p>{moviesId.synopsis}</p>
        <Button type="primary">Watch Trailer</Button>
        <Button>Add To Watchlist</Button>
      </div>
    </div>
  );
}

export default MovieReview;
