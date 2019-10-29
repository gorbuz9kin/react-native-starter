// @flow

/* REACT */
import React, { Component } from 'react';

/* MODULES */
import { View } from 'react-native';
import { inject, observer } from "mobx-react";

/* CUSTOM MODULES */
import AppNavigator from './navigator';

/* TYPES */
import type { Node } from 'react';

type _t_defaultProps = {
  isHydrated: boolean,
};

type _t_props = {
  ...$Exact<_t_defaultProps>
  // navRef: Object,
};

type _t_state = {};

@inject(({ mainStore }) => ({
  isHydrated: mainStore.isHydrated,
}))
@observer
class AppNavigation extends Component<_t_props, _t_state> {

  static defaultProps: _t_defaultProps; // eslint-disable-line

  render(): Node {
    const { isHydrated } = this.props;

    return (
      <View style={{ flex: 1 }}>
        {
          isHydrated ? <AppNavigator /> : null
        }
      </View>
    );
  }
}

export default AppNavigation;
