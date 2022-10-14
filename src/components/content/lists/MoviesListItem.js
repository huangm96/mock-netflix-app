import React from "react";
import { useDispatch } from "react-redux";
import { isBrowser } from "react-device-detect";

import "./MoviesListItem.css";
function MoviesListItem({ data, buttonName, buttonFunc }) {
  const dispatch = useDispatch();
  return (
    <div className="list-item-container">
      <div
        className={
          isBrowser ? "list-item-layer hover-effect" : "list-item-layer"
        }
      >
        <img className="list-item-img" src={data.img} alt={data.title} />
        <div className="list-item-info">
          <p className="list-item-title">{data.title}</p>
          <div
            className={`list-item-button ${buttonName}`}
            onClick={() => {
              dispatch(buttonFunc(data));
            }}
          >
            {buttonName}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviesListItem;
