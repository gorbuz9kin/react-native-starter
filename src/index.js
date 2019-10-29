// @flow

/* REACT */
import React, { Component } from 'react';

/* MODULES */
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'mobx-react';

/* CUSTOM MODULES */
import AppNavigation from './navigation';
import stores from './stores';

type _t_props = {};

export default class App extends Component<_t_props> {

  componentDidMount(): void {
    SplashScreen.hide();
  }

  render() {
    return (
      <Provider {...stores}>
        <AppNavigation />
      </Provider>
    );
  }
}
