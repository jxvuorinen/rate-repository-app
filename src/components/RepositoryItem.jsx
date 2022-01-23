import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import Logo from './Logo';
import theme from '../theme';
import Header from './Header';
import Statistics from './Statistics';
import * as Linking from 'expo-linking';

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

const RepositoryItem = ({ item, showButton }) => {

  return (
    <View style={styles.container} testID='repositoryItem'>
      <View style={styles.cardHeader}>
        <Logo item={item} />
        <Header item={item} />
      </View>
      <Statistics item={item} />
      {showButton &&
        <Button
          title="Open in GitHub"
          onPress={() => Linking.openURL(item.url)}
        />
      }
    </View>
  );
};

export default RepositoryItem;