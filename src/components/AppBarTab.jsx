import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import Text from './Text';

const styles = StyleSheet.create({
  tab: {
    margin: 15,
  }
});

const AppBarTab = ({ text, link }) => {

  return (
    <Pressable>
      <Link to={link} style={styles.tab}>
        <Text fontWeight="bold" fontSize="subheading" color="white">{text}</Text>
      </Link>
    </Pressable>
  );
};

export default AppBarTab;