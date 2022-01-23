import React, { useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import theme from '../theme';
import useAuthorization from '../hooks/useAuthorization';
import { useHistory } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.backgroundColors.appBar,
    paddingBottom: 10,
    flexDirection: 'row'
  }
});

const AppBar = () => {
  const { authorizedUser } = useAuthorization();
  const history = useHistory();

  useEffect(() => {
    if (authorizedUser) {
      history.push('/');
    } else if (authorizedUser === null) {
      history.push('/login');
    }
  },[authorizedUser]);

  return (
    <View style={styles.container}>
      {authorizedUser ?
        <ScrollView horizontal>
          <AppBarTab text='Repositories' link='/' />
          <AppBarTab text='Create a review' link='/review' />
          <AppBarTab text='Sign out' link='' />
        </ScrollView>
        :
        <ScrollView horizontal>
          <AppBarTab text='Sign in' link='/login' />
        </ScrollView>
      }
    </View>
  );
};

export default AppBar;