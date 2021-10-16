import React from 'react';
import { Image, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  logo: {
    width: theme.tinyLogo.width,
    height: theme.tinyLogo.height,
  },
});
const Logo = ({ item }) => {
  return (
    <Image style={styles.logo} source={{ uri: item.ownerAvatarUrl }}></Image>
  );
};

export default Logo;