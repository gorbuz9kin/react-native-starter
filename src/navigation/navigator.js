// @flow

import { createStackNavigator } from 'react-navigation-stack';

/* CUSTOM MODULES */
import Home from '/src/containers/Home';
import Profile from '/src/containers/Profile';

const AppNavigator = createStackNavigator(
  {
    Home,
    Profile,
  },
  {
    initialRouteName: 'Home'
  }
);

export default AppNavigator;
