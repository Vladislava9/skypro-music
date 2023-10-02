import styled from "styled-components";

export const FilterBox = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`

export const FilterButtonWrapper = styled.div`
    font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #ffffff;
  border-radius: 60px;
  padding: 6px 20px;
  &:not(:last-child) {
  margin-right: 10px;
  }
  &:hover {
  border-color: #d9b6ff;
  color: #d9b6ff;
  cursor: pointer;
}
  &:active {
  border-color: #ad61ff;
  color: #ad61ff;
  cursor: pointer;
}
`
export const FilterList = styled.ul`
   max-height: 300px;
  padding: 10px 38px 10px 38px;
  border-radius: 12px;
  overflow-y: auto;
  background: #313131;
  color: #FFFFFF;
  font-family: "StratosSkyeng", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 50px;
  gap: 10px;
`
export const FilterListItem = styled.li`
color: #FFF;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: StratosSkyeng;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  padding: 8px 16px;
  &:hover {
  color: #B672FF;
  text-decoration: underline;
  }
  &::-webkit-scrollbar {
  width: 4px;
  height: 237px;
  right: 34px; 
  }/* Ширина полосы прокрутки */
  /* Стилизация ползунка скролла */
::-webkit-scrollbar-thumb {
  background-color: #888; /* Цвет ползунка */
  border-radius: 6px; /* Скругление углов ползунка */
}

/* Стилизация ползунка при наведении */
::-webkit-scrollbar-thumb:hover {
  background-color: #555; /* Цвет ползунка при наведении */
}
`