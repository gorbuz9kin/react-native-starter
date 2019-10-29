// @flow

import { NavigationActions } from 'react-navigation';
// import { DrawerActions } from 'react-navigation-drawer';

let _navigator;

function setTopLevelNavigator(navigatorRef: Object) {
  _navigator = navigatorRef;
}

function navigate(routeName: string, params: Object) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}

// function toggleDrawer() {
//   _navigator.dispatch(DrawerActions.toggleDrawer());
// }

// add other navigation functions that you need and export them

export default {
  navigate,
  setTopLevelNavigator,
  // toggleDrawer,
};
