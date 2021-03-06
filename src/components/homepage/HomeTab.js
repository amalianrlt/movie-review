import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tabs, Card } from "antd";
import { getMovies, getMoviesId } from "../../store/actions/homeAction";
import { Link } from "react-router-dom";
import Meta from "antd/lib/card/Meta";

const { TabPane } = Tabs;

function HomeTab() {
  const dispatch = useDispatch();
  const moviesList = useSelector((state) => state.homeReducer.movies);
  const moviesId = useSelector((state) => state.homeReducer.moviesId);

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <div className="movies-card">
      <h3>Browse by Category</h3>
      <div className="card-container">
        <Tabs type="card">
          <TabPane tab="all" key="1" className="all-movie">
            {moviesList.map((movie) => 
             <Link key={movie.id} to={`/overview/${movie.id}`}>
              <Card
                className="movieList"
                hoverable
                style={{ width: 240 }}
                cover={<img alt="movie" src={movie.image_url} />}
                onClick={() => {dispatch(getMoviesId(movie.id));}}
                >
                <Meta title={movie.title} />
              </Card>
              </Link>
            )}
          </TabPane>
          <TabPane tab="anime" key="2">
            <p>{moviesId.title}</p>
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
