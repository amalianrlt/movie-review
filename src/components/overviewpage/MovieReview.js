import React from "react";
import { Button } from "antd";
import { useSelector } from 'react-redux'

function MovieReview() {
  const moviesId = useSelector((state) => state.homeReducer.moviesId);

  return (
    <div className="movie-review">
         <img style={{width:"100%", height: "30%"}} src={moviesId.image_url} alt="description"/>
        <Button type="primary">Watch Trailer</Button>
        <Button>Add To Watchlist</Button>
    </div>
  );
}

export default MovieReview;
