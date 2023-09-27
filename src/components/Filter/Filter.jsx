import React, { useState } from "react";
import FilterButton from "./FilterButton";
import { authorItem, yearItem, genreItem} from "./data";

function Filter() {
  const [activeFilter, setActiveFilter] = useState(null);

  const selectFilter = (filter) => {
    if (filter === activeFilter) {
      setActiveFilter(null);
      return;
    }
    setActiveFilter(filter);
  };

 
  return (
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      <FilterButton
        data={authorItem}
        title={"исполнителю"}
        isOpen={activeFilter === "author"}
        onClick={() => selectFilter("author")}
      />
      <FilterButton
        data={yearItem}
        title={"году выпуска"}
        isOpen={activeFilter === "year"}
        onClick={() => selectFilter("year")}
      />
      <FilterButton
        data={genreItem}
        title={"жанру"}
        isOpen={activeFilter === "genre"}
        onClick={() => selectFilter("genre")}
      />
    </div>
  );
}

export default Filter;

// Передать массив
