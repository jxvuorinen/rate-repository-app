import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
query Repository($orderBy: AllRepositoriesOrderBy!, $orderDirection: OrderDirection!, $searchKeyword: String, $after: String, $first: Int) {
  repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword, after: $after, first: $first) {
    totalCount
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
      cursor
    }
    pageInfo {
      endCursor
      startCursor
      hasNextPage
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
  query Repository($id: ID!, $after: String, $first: Int) {
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
      reviews(after: $after, first: $first) {
        totalCount
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
          cursor
        }
        pageInfo {
          endCursor
          startCursor
          hasNextPage
        }
      },
      url
    }
  }
`;