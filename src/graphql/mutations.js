import { gql } from '@apollo/client';

export const AUTHORIZE = gql`
  mutation Authorize($credentials: AuthorizeInput) {
    authorize(credentials: $credentials) {
      accessToken
    }
  }
`;

export const CREATE_REVIEW = gql`
  mutation CreateReview($review: CreateReviewInput) {
    createReview(review: $review) {
      repositoryId
    }
  }
`;