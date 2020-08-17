import React, {Fragment} from "react";
import {Switch,Route} from "react-router-dom";
import HomePage from '../../modules/HomePage'
import DetailOverview from '../../modules/DetailOverview'
import { ModalPage } from "../../modules/Modal";

const Routes = () => {
  return (
    <Fragment>
      <Switch>
        <Route path="/" component={HomePage} exact />>
        <Route path="/overview/:id" component={DetailOverview} exact />>
        <Route path="/modal" component={ModalPage} exact />>
      </Switch>
    </Fragment>
  )
}

export default Routes;
