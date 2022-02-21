import React, { useState } from 'react';
import useRepositories from '../hooks/useRepositories';
import { RepositoryListContainer } from './RepositoryListContainer';
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

  const variables = {
    orderBy: sorting.orderBy,
    orderDirection: sorting.orderDirection,
    searchKeyword: searchQuery
  };

  const { repositories, fetchMore } = useRepositories({ 
    first: 6,
    ...variables
  });

  const history = useHistory();

  const onEndReach = () => {
    fetchMore();
  };

  return <RepositoryListContainerWithRouter
    repositories={repositories}
    setSorting={setSorting}
    setLabel={setLabel}
    label={label}
    setQueryText={setQueryText}
    queryText={queryText}
    history={history}
    onEndReach={onEndReach}
  />;
};

export default RepositoryList;