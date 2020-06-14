import React, { useState, useEffect } from "react";
import { Tabs, Col, Card, Row } from "antd";
import Axios from "axios";

const { TabPane } = Tabs;

function HomeTab() {
  const [movies, setMovies] = useState([]);
  Axios({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/photos",
  })
    .then((res) => {
      setMovies(res.data.slice(0, 30));
    })
    .catch((err) => {});

  // const movieList = useSelector(state => state.movieList)
  return (
    <div className="movies-card">
      <h3>Browse by Category</h3>
      <div className="card-container">
        <Tabs type="card">
          <TabPane tab="all" key="1" className="all-movie">
            {movies.map((movie) => (
              <div className="all-movie-list">
                <img alt="movie" src={movie.url} />
                <h5>{movie.title}</h5>
              </div>
            ))}
          </TabPane>
          <TabPane tab="anime" key="2">
            <p>Content of Tab Pane 2</p>
            <p>Content of Tab Pane 2</p>
            <p>Content of Tab Pane 2</p>
          </TabPane>
          <TabPane tab="action" key="3">
            <p>Content of Tab Pane 3</p>
            <p>Content of Tab Pane 3</p>
            <p>Content of Tab Pane 3</p>
          </TabPane>
          <TabPane tab="adventure" key="4">
            <p>Content of Tab Pane 4</p>
            <p>Content of Tab Pane 4</p>
            <p>Content of Tab Pane 4</p>
          </TabPane>
          <TabPane tab="science fiction" key="5">
            <p>Content of Tab Pane 5</p>
            <p>Content of Tab Pane 5</p>
            <p>Content of Tab Pane 5</p>
          </TabPane>
          <TabPane tab="comedy" key="6">
            <p>Content of Tab Pane 6</p>
            <p>Content of Tab Pane 6</p>
            <p>Content of Tab Pane 6</p>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}

export default HomeTab;
