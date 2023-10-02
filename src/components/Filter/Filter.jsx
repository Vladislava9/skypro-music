import React, { useState } from "react";
import FilterButton from "./FilterButton";
import { authorItem, yearItem, genreItem} from "./data";
import * as S from "./StyledFilter"


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
    <S.CenterBlockFilter>
      <S.FilterTitle>Искать по:</S.FilterTitle>
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
    </S.CenterBlockFilter>
  );
}

export default Filter;

// Передать массив
