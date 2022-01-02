import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import Text from './Text';
import useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';
import { useHistory } from 'react-router-native';

const styles = StyleSheet.create({
  tab: {
    margin: 15,
  }
});

const AppBarTab = ({ text, link }) => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const history = useHistory();

  const handleSignOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
    history.push('/login');
  };

  if (text === 'Sign out') {
    return (
      <Pressable onPress={handleSignOut}>
        <Text style={styles.tab} fontWeight="bold" fontSize="subheading" color="white" >{text}</Text>
      </Pressable>
    );
  }

  return (
    <Pressable>
      <Link to={link} style={styles.tab}>
        <Text fontWeight="bold" fontSize="subheading" color="white" >{text}</Text>
      </Link>
    </Pressable>
  );
};

export default AppBarTab;