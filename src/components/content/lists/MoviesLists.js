import React from "react";
import { useSelector } from "react-redux";
import List from "./List";
import {
  addToMyList,
  removeFromMyList,
} from "../../../utils/actions/moviesListAction.js";

import "./MoviesLists.css";
function MoviesLists() {
  const data = useSelector((state) => state);
  return (
    <div className="movies-lists-container">
      <List
        title="My List"
        list={data.myList}
        buttonName="remove"
        buttonFunc={removeFromMyList}
      />
      <List
        title="Recommendations"
        list={data.recommendations}
        buttonName="add"
        buttonFunc={addToMyList}
      />
    </div>
  );
}

export default MoviesLists;
