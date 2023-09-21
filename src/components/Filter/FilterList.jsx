import React from "react";

function FilterList({data}) {
  return (
    <div className="filter-list">
      <ul className="filter-listitems">
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default FilterList;
