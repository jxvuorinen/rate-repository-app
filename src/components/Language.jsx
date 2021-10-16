import React from 'react';
import { View, StyleSheet } from 'react-native';
import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
  box: {
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    marginTop: 5,
    padding: 5,
  },
});
const Language = ({ item }) => {
  return (
    <View style={styles.box}>
      <Text color="white">{item.language}</Text>
    </View>
  );
};

export default Language;
