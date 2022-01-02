import { useMutation } from '@apollo/client';
import { AUTHORIZE } from '../graphql/mutations';
import useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const [mutate, result] = useMutation(AUTHORIZE);
  const apolloClient = useApolloClient();

  const signIn = async ({ username, password }) => {
    // call the mutate function here with the right arguments
    const result = await mutate({ variables: { credentials: { username, password }}} );
    const { data } = result;
    await authStorage.setAccessToken(data.authorize.accessToken);
    apolloClient.resetStore();
    return result;
  };

  return [signIn, result];
};

export default useSignIn;