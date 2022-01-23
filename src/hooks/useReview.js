import { useMutation } from '@apollo/client';
import { CREATE_REVIEW } from '../graphql/mutations';

const useReview = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW);

  const sendReview = async ({ ownerName, repositoryName, rating, text }) => {
    const result = await mutate({ variables: { review: { ownerName, repositoryName, rating, text }}} );
    return result;
  };

  return [sendReview, result];
};

export default useReview;