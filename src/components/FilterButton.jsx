import React, { useState } from "react";
import FilterList from "./FilterList";



function FilterButton({title, setActiveFilter, isOpen, onClick}) {
  
  return (
    <>
      <div className="filter__button button-author _btn-text" onClick={onClick}>
        {title} 
      </div>
      {isOpen && <FilterList/>}
    </>
  );
}

export default FilterButton;
