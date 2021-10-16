import React from 'react';
import { View, StyleSheet } from 'react-native';
import Logo from './Logo';
import theme from '../theme';
import Header from './Header';
import Statistics from './Statistics';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.backgroundColors.repositoryItem,
    padding: 10,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardHeader}>
        <Logo item={item} />
        <Header item={item}/>
      </View>
        <Statistics item={item} />
    </View >
  );
};

export default RepositoryItem;