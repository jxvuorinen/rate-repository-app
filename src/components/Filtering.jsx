import React from 'react';
import { Searchbar } from 'react-native-paper';

const Filtering = ({ queryText, setQueryText }) => {

  const changeText = (query) => {
    setQueryText(query);
  };

  return (
    <Searchbar
      placeholder="Search repositories with a keyword"
      onChangeText={changeText}
      value={queryText}
      style={{ margin: 10 }}
      icon='magnify'
    />
  );
};
export default Filtering;