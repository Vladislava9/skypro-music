import React from "react";

function FilterButton({ title, isOpen, onClick, data }) {
  return (
    <>
      <div className="filter__button button-author _btn-text" onClick={onClick}>
        {title}
      </div>
      {isOpen && (
        <div className="filter-list">
          <ul className="filter-listitems">
            {data.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default FilterButton;
