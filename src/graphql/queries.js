import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
query Repository($orderBy: AllRepositoriesOrderBy!, $orderDirection: OrderDirection!) {
  repositories(orderBy: $orderBy, orderDirection: $orderDirection) {
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


export const GET_REPOSITORY = gql`
  query Repository($id: ID!) {
    repository(id: $id) {
      id,
      fullName,
      description,
      forksCount,
      stargazersCount,
      reviewCount,
      ratingAverage,
      language,
      ownerName,
      ownerAvatarUrl,
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      },
    url
    }
  }
`;