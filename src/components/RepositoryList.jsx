import React, { useState } from 'react';
import useRepositories from '../hooks/useRepositories';
import { RepositoryListContainer } from './RepositoryListContainer';
import { ActivityIndicator } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import { withRouter } from "react-router";
import { useHistory } from 'react-router-native';
import { useDebounce } from 'use-debounce';

const RepositoryListContainerWithRouter = withRouter(RepositoryListContainer);

const RepositoryList = () => {
  const defaultVariables = {
    orderBy: 'CREATED_AT',
    orderDirection: 'DESC',
  };

  const [sorting, setSorting] = useState(defaultVariables);
  const [label, setLabel] = useState('Latest repositories');
  const [queryText, setQueryText] = useState('');
  const [searchQuery] = useDebounce(queryText, 1500);

  const { repositories, loading } = useRepositories(sorting, searchQuery);
  const history = useHistory();

  if (loading) {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator animating={true} size="large" />
      </View>
    );
  }

  return <RepositoryListContainerWithRouter
    repositories={repositories}
    setSorting={setSorting}
    setLabel={setLabel}
    label={label}
    setQueryText={setQueryText}
    queryText={queryText}
    history={history}
  />;
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