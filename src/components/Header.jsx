import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';
import Language from './Language';

const styles = StyleSheet.create({
  header: {
    paddingLeft: 10,
    flexDirection: 'column',
    flexWrap: 'wrap',
    flex: 1,
  },
  repoTitle: {
    marginBottom: 5,
  },
  language: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
  }
});
const Header = ({ item }) => {
  return (
    <>
      <View style={styles.header}>
        <View style={styles.repoTitle} testID='fullName'>
          <Text fontWeight="bold" fontSize="subheading" color="textPrimary">{item.fullName}</Text>
        </View>
        <View style={styles.repoTitle} testID='description'>
          <Text color="textSecondary">{item.description}</Text>
        </View>
        <View style={styles.language}>
          <Language item={item} />
        </View>
      </View>
    </>
  );
};

export default Header;