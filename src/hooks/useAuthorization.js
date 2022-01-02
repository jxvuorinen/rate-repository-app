import { useQuery } from '@apollo/client';

import { AUTHORIZED_USER } from '../graphql/queries';

const useAuthorization = () => {
  const { loading, data, ...rest } = useQuery(AUTHORIZED_USER, {
    fetchPolicy: 'cache-and-network',
  });

return { authorizedUser: data?.authorizedUser, loading, ...rest };
};

export default useAuthorization;