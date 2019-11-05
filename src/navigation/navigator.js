// @flow

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

/* CUSTOM MODULES */
import Home from '/src/containers/Home';
import Profile from '/src/containers/Profile';
import Map from '/src/containers/Map';

const AppNavigator = createStackNavigator(
  {
    Home,
    Profile,
    Map,
  },
  {
    initialRouteName: 'Home'
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
