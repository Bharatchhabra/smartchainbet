import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Secondtable from "../components/content/secondtable/Secondtable";
import CardTwo from "../components/content/cardtwo/CardTwo";
import Cardone from "../components/content/cardone/Cardone";
import {Listcontent} from "../components/content/listitem/Listcontent";
import FirstCard from "../components/content/fisrtpagecard/FirstCard";
import MyBetTab from "../components/content/mybettab/MyBetTab";

export const MainContent = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={FirstCard} />
        <Route exact path="/secondtable" component={Secondtable} />
        <Route exact path="/cardone" component={Cardone} />
        <Route exact path="/cardtwo" component={CardTwo} />
        <Route exact path="/listcontent" component={Listcontent} />
        <Route exact path="/MyBetTab" component={MyBetTab} />
      </Switch>     
    </div>
  );
};
