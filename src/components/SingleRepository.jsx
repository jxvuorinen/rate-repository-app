import React from 'react';
import RepositoryItem from './RepositoryItem';
import useRepository from '../hooks/useRepository';
import { FlatList, View, StyleSheet } from 'react-native';
import theme from '../theme';
import Text from './Text';
import { ItemSeparator } from './RepositoryListContainer';
import format from 'date-fns/format';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.backgroundColors.repositoryItem,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  info: {
    marginLeft: 10,
    flexDirection: 'column'
  },
  text: {
    alignItems: 'flex-start',
  },
  ratings: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: theme.colors.primary,
    color: theme.colors.primary,
    borderWidth: 3,
    borderStyle: 'solid',
    textAlign: 'center',
    paddingTop: 15,
    marginBottom: 10,
  },
  date: {
    paddingTop: 3,
  }
});

const RepositoryInfo = ({ repository }) => {
  const showButton = true;
  return (
    <>
      <RepositoryItem item={repository} showButton={showButton} />
      <ItemSeparator />
    </>
  );
};

const formatDate = (date) => {
  return format(new Date(date), "dd.MM.yyyy");
};

const ReviewItem = ({ review }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.ratings}>{review.rating}</Text>
        <View style={styles.info}>
          <Text fontWeight="bold" fontSize="subheading" color="textPrimary">
            {review.user.username}</Text>
          <View style={styles.date}>
            <Text>{formatDate(review.createdAt)}</Text>
          </View>
        </View>

      </View>
      <View style={styles.text}>
        <Text>{review.text}</Text>
      </View>

    </View >
  );
};

const SingleRepository = ({ match }) => {
  const id = match.params.id;
  const { repository } = useRepository({ id });

  const reviews = repository
    ? repository.reviews.edges.map(edge => edge.node)
    : [];

  if (repository && reviews) {
    return (
      <FlatList
        data={reviews}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <ReviewItem review={item} />}
        keyExtractor={({ id }) => id}
        ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
      />
    );
  } else {
    return null;
  }
};

export default SingleRepository;