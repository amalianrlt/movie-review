import React from "react";
import { Tabs } from "antd";
// import { useSelector } from 'react-redux'
import MovieReview from "./MovieReview";
import InputComment from "../comment/InputComment";

const { TabPane } = Tabs;


function OverviewTab() {
  // const moviesId = useSelector((state) => state.homeReducer.moviesId);

  return (
    <div className="overview-content">
      <MovieReview/>
      <div className="movies-card">
        <h3>Reviews</h3>
        <div className="card-container">
          <Tabs type="card">
            <TabPane tab="Reviews" key="1">
              <InputComment/>
            </TabPane>
            <TabPane tab="Tags" key="2">
              <h2>#fun</h2>
              <h2>#family</h2>
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default OverviewTab;
