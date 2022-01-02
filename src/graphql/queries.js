import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
query {
  repositories {
    edges {
      node {
        id,
        fullName,
        description,
        forksCount,
        stargazersCount,
        reviewCount,
        ratingAverage,
        language,
        ownerName,
        ownerAvatarUrl
      }
    }
  }
}
`;

export const AUTHORIZED_USER = gql`
query {
  authorizedUser {
    id
    username
  }
}
`;