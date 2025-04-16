import React from 'react';
import { Input } from './SearchBar.styles';

const SearchBar = ({ value, onChange, placeholder = 'Buscar...' }) => {
  return (
    <Input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default SearchBar;