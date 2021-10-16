import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10,
    paddingBottom: 5,
  },
  stats: {
    flexDirection: 'column',
    alignItems: 'center'
  }
});
const Statistics = ({ item }) => {

  const checkCount = (num) => {
    return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1)) + 'k' : Math.sign(num) * Math.abs(num);
  };

  let starCountFormatted = checkCount(item.stargazersCount);
  let forksCountFormatted = checkCount(item.forksCount);

  return (
    <View style={styles.container}>
      <View style={styles.stats}>
        <Text fontWeight="bold">{starCountFormatted}</Text>
        <Text color="textSecondary">Stars</Text>
      </View>
      <View style={styles.stats}>
        <Text fontWeight="bold">{forksCountFormatted}</Text>
        <Text color="textSecondary">Forks</Text>
      </View>
      <View style={styles.stats}>
        <Text fontWeight="bold">{item.reviewCount}</Text>
        <Text color="textSecondary">Reviews</Text>
      </View>
      <View style={styles.stats}>
        <Text fontWeight="bold">{item.ratingAverage}</Text>
        <Text color="textSecondary">Rating</Text>
      </View>
    </View>
  );
};

export default Statistics;