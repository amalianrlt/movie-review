import React from "react";
import { Button } from "antd";
import { useSelector } from "react-redux";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { getMoviesReview } from "../../store/actions/reviewAction";

function MovieReview() {
  const moviesId = useSelector((state) => state.homeReducer.moviesId);
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(getMoviesReview());
  // }, [dispatch]);

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
        <div>

         <FontAwesomeIcon icon={faPlayCircle} style={{color:"#1C91FF", paddingTop:'1rem'}} size="4x"/>

        <Button>Add To Watchlist</Button>
        </div>
      </div>
    </div>
  );
}

export default MovieReview;
