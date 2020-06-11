import React from "react";
import PeakyBlinders from "../../style/images/peaky.jpg";
import { Button } from "antd";

function MovieReview() {
  return (
    <div className="movie-review">
        <Button type="primary">Watch Trailer</Button>
        <Button>Add To Watchlist</Button>
    </div>
  );
}

export default MovieReview;