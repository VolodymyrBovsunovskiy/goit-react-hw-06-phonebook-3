import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from './redux/filterSlice';
import { Label } from './Filter.styled';

function Filter() {
  const dispatch = useDispatch();
  const handleChangeFilter = e => {
    dispatch(setFilter(e.target.value.toLowerCase().trim()));
  };
  return (
    <>
      <Label htmlFor="filter">Find contacts by name:</Label>
      <input
        id="filter"
        type="text"
        name="filter"
        onChange={handleChangeFilter}
      />
    </>
  );
}

export default Filter;