import React, { useState } from "react";
import FilterButton from "./FilterButton";

function Filter() {
  const [activeFilter, setActiveFilter] = useState(null);

  const selectFilter = (filter) => {
     if (filter === activeFilter) {
      setActiveFilter(null);
      return;
     } 
     setActiveFilter(filter);
  }

  return (
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      <FilterButton  filterList={""} title={"исполнителю"} isOpen={activeFilter === "author"} onClick={() => selectFilter("author")}/>
      <FilterButton  filterList={""} title={"году выпуска"} isOpen={activeFilter === "year"} onClick={() => selectFilter("year")}/>
      <FilterButton  filterList={""} title={"жанру"} isOpen={activeFilter === "style"} onClick={() => selectFilter("style")}/>
    </div>
  );
}

export default Filter;

// Передать массив 