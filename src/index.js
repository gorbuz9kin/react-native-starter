// @flow

/* REACT */
import React, { Component } from 'react';

/* MODULES */
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'mobx-react/native';

/* CUSTOM MODULES */
import stores from './stores';
import AppContainer from './navigation';
import NavigationService from './navigation/actions';
// import Home from '/src/containers/Home';

type _t_props = {};

export default class App extends Component<_t_props> {

  componentDidMount(): void {
    SplashScreen.hide();
  }

  render() {
    return (
      <Provider {...stores}>
        <AppContainer
          navRef={(navigatorRef) => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </Provider>
    );
  }
}
