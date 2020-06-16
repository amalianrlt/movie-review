import React from "react";
import { Tabs } from "antd";
// import { useSelector } from 'react-redux'
import MovieReview from "./MovieReview";
import InputComment from "../comment/InputComment";
import CommentSection from "../comment/CommentSection";

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
              <CommentSection/>
              <p>Content of Tab Pane 2</p>
              <p>Content of Tab Pane 2</p>
            </TabPane>
            <TabPane tab="Tags" key="2">
              <InputComment/>
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default OverviewTab;
