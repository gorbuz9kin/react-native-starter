// @flow

/* REACT */
import React, { Component } from 'react';

/* MODULES */
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'mobx-react';
// import { createAppContainer } from 'react-navigation';

/* CUSTOM MODULES */
import AppNavigation from './navigation';
import NavigationService from './navigation/actions';
import stores from './stores';

// const AppContainer = createAppContainer(AppNavigator);

// const App: () => React$Node = () => <AppContainer />;

// export default App;

type _t_props = {};

export default class App extends Component<_t_props> {
  componentDidMount(): void {
    SplashScreen.hide();
  }

  render() {
    return (
      <Provider {...stores}>
        {/* // $FlowFixMe */}
        <AppNavigation
          navRef={(navigatorRef) => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </Provider>
    );
  }
}
