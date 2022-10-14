import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Video from "./video/Video.js";
import MoviesLists from "./lists/MoviesLists";
import { getMyList } from "../../utils/actions/moviesListAction.js";

function Content() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMyList());
  }, [dispatch]);

  return (
    <div className="content-container">
      <Video />
      <MoviesLists />
    </div>
  );
}

export default Content;
