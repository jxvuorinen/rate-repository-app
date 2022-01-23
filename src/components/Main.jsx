import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, useRouteMatch, Redirect } from 'react-router-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import theme from '../theme';
import SignIn from './SignIn';
import SingleRepository from './SingleRepository';
import Review from './Review';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.backgroundColors.main,
    fontFamily: theme.fonts,
  },
});

const Main = () => {
  let match = useRouteMatch("/repositories/:id");

  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route path='/login'>
          <SignIn />
        </Route>
        <Route path='/repositories/:id'>
          <SingleRepository match={match} />
        </Route>
        <Route path='/review'>
          <Review />
        </Route>
        <Route path='/' exact>
          <RepositoryList />
        </Route>
        <Redirect to='/' />
      </Switch>
    </View>
  );
};

export default Main;