import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (variables) => {
  console.log('variables: ', variables);
  const { loading, data, ...rest } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: variables
  });

return { repositories: data?.repositories, loading, ...rest };
};

export default useRepositories;
