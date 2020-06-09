import React from "react";
import { Router } from "react-router-dom";
import HomePage from "../modules/HomePage";

function RoutesPage() {
  return (
    <div>
      <Router>
          <HomePage/>
      </Router>
    </div>
  );
}

export default RoutesPage;
