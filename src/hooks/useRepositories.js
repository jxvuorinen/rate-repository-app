import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (sorting, searchKeyword ) => {
  console.log('variables: ', sorting, 'searchKeyword: ', searchKeyword);
  const { loading, data, ...rest } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: {
      orderBy: sorting.orderBy,
      orderDirection: sorting.orderDirection,
      searchKeyword: searchKeyword
    }
  });

return { repositories: data?.repositories, loading, ...rest };
};

export default useRepositories;
