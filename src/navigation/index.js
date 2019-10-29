// @flow

/* REACT */
import React, { Component } from 'react';

/* MODULES */
import { View } from 'react-native';
import { inject, observer } from "mobx-react";
import { createStackNavigator } from 'react-navigation-stack';

/* CUSTOM MODULES */
import Home from '../containers/Home';
import Profile from '../containers/Profile';

/* TYPES */
import type { Node } from 'react';

type _t_props = {
  mainStore: Object,
  navRef: Object,
};

type _t_state = {};

const AppNavigator = createStackNavigator(
  {
    Home,
    Profile,
  },
  {
    initialRouteName: 'Home'
  }
);

@inject('mainStore')
@observer
class AppNavigation extends Component<_t_props, _t_state> {
  render(): Node {
    const { mainStore, navRef } = this.props;

    return (
      <View style={{ flex: 1 }}>
        {
          mainStore.isHydrated ? <AppNavigator ref={navRef} /> : null
        }
      </View>
    );
  }
}

export default AppNavigation;
