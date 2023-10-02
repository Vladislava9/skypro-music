import React from "react";
import * as S from "./StyledFilterButton"

function FilterButton({ title, isOpen, onClick, data }) {
  return (
    <S.FilterBox>
      <S.FilterButtonWrapper onClick={onClick}>
        {title}
      </S.FilterButtonWrapper>
      {isOpen && (
          <S.FilterList>
            {data.map((item, index) => (
              <S.FilterListItem key={index}>
                {item}
              </S.FilterListItem>
            ))}
          </S.FilterList>
      )}
    </S.FilterBox>
  );
}

export default FilterButton;
