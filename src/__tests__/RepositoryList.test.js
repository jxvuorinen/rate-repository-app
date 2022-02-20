import React from 'react';
import { render, within } from '@testing-library/react-native';
import { RepositoryListContainer } from '../components/RepositoryListContainer';
import { checkCount } from '../components/Statistics';

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {

      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };

      // Add your test code here
      const { getAllByTestId } = render(<RepositoryListContainer repositories={repositories} />);
      const repositoryItems = getAllByTestId('repositoryItem');
      const [firstRepositoryItem, secondRepositoryItem] = repositoryItems;

      //fullName
      const testRepository1FullName = within(firstRepositoryItem).getByTestId('fullName');
      expect(testRepository1FullName).toHaveTextContent(repositories.edges[0].node.fullName);

      const testRepository2FullName = within(secondRepositoryItem).getByTestId('fullName');
      expect(testRepository2FullName).toHaveTextContent(repositories.edges[1].node.fullName);

      //description
      const testRepository1Description = within(firstRepositoryItem).getByTestId('description');
      expect(testRepository1Description).toHaveTextContent(repositories.edges[0].node.description);

      const testRepository2Description = within(secondRepositoryItem).getByTestId('description');
      expect(testRepository2Description).toHaveTextContent(repositories.edges[1].node.description);

      //language
      const testRepository1Language = within(firstRepositoryItem).getByTestId('language');
      expect(testRepository1Language).toHaveTextContent(repositories.edges[0].node.language);

      const testRepository2Language = within(secondRepositoryItem).getByTestId('language');
      expect(testRepository2Language).toHaveTextContent(repositories.edges[1].node.language);

      //forks count
      const testRepository1Forks = within(firstRepositoryItem).getByTestId('forksCount');
      const checkedForks1 = checkCount(repositories.edges[0].node.forksCount);
      expect(testRepository1Forks).toHaveTextContent(checkedForks1);

      const testRepository2Forks = within(secondRepositoryItem).getByTestId('forksCount');
      const checkedForks2 = checkCount(repositories.edges[1].node.forksCount);
      expect(testRepository2Forks).toHaveTextContent(checkedForks2);

      //stargazers
      const testRepository1Stargazers = within(firstRepositoryItem).getByTestId('stargazers');
      const checkedStars1 = checkCount(repositories.edges[0].node.stargazersCount);
      expect(testRepository1Stargazers).toHaveTextContent(checkedStars1);

      const testRepository2Stargazers = within(secondRepositoryItem).getByTestId('stargazers');
      const checkedStars2 = checkCount(repositories.edges[1].node.stargazersCount);
      expect(testRepository2Stargazers).toHaveTextContent(checkedStars2);

      //rating
      const testRepository1Rating = within(firstRepositoryItem).getByTestId('rating');
      expect(testRepository1Rating).toHaveTextContent(repositories.edges[0].node.ratingAverage);

      const testRepository2Rating = within(secondRepositoryItem).getByTestId('rating');
      expect(testRepository2Rating).toHaveTextContent(repositories.edges[1].node.ratingAverage);

      //reviews
      const testRepository1Reviews = within(firstRepositoryItem).getByTestId('reviews');
      expect(testRepository1Reviews).toHaveTextContent(repositories.edges[0].node.reviewCount);

      const testRepository2Reviews = within(secondRepositoryItem).getByTestId('reviews');
      expect(testRepository2Reviews).toHaveTextContent(repositories.edges[1].node.reviewCount);

    });
  });
});