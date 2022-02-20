import React, { useState } from 'react';
import useRepositories from '../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';
import { ActivityIndicator } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

const RepositoryList = () => {
  const defaultVariables = {
    orderBy: 'CREATED_AT',
    orderDirection: 'DESC'
  };

  const [sorting, setSorting] = useState(defaultVariables);
  const [label, setLabel] = useState('Latest repositories');

  const { repositories, loading } = useRepositories(sorting);
  if (loading) {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator animating={true} size="large" />
      </View>
    );
  }
  return <RepositoryListContainer repositories={repositories} setSorting={setSorting} setLabel={setLabel} label={label} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});

export default RepositoryList;