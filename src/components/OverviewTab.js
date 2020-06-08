import React from "react";
import { Tabs } from "antd";

const { TabPane } = Tabs;

function OverviewTab() {
  return (
    <div className="movies-card">
    <h3>Browse by Category</h3>
      <div className="card-container">
        <Tabs type="card">
          <TabPane tab="Overview" key="1">
            <h2>Synopsis</h2>
            <p>Content of Tab Pane 1</p>
            <h2>Movie Info</h2>
            <p>Content of Tab Pane 1</p>
          </TabPane>
          <TabPane tab="Characters" key="2">
            <p>Content of Tab Pane 2</p>
            <p>Content of Tab Pane 2</p>
            <p>Content of Tab Pane 2</p>
          </TabPane>
          <TabPane tab="Review" key="3">
            <p>Content of Tab Pane 3</p>
            <p>Content of Tab Pane 3</p>
            <p>Content of Tab Pane 3</p>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
  
}

export default OverviewTab;