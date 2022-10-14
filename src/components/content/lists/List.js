import React from "react";
import MoviesListItem from "./MoviesListItem";
import { useHorizontalScroll } from "../../../utils/useHorizontalScroll.js";
function List({ title, list, buttonName, buttonFunc }) {
  const scrollRef = useHorizontalScroll();
  return (
    <div className="list-container">
      <p className="list-title">{title}</p>
      <div className="list-content" ref={scrollRef}>
        {list.map((data) => (
          <MoviesListItem
            key={data.id}
            data={data}
            buttonName={buttonName}
            buttonFunc={buttonFunc}
          />
        ))}
      </div>
    </div>
  );
}

export default List;
