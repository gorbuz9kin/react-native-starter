// @flow

/* REACT */
import React from 'react';

/* MODULES */
import { View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
// import MapView from 'react-native-maps';

/* CUSTOM MODULES */

/* CONFIGS */

/* STYLES */
// import {} from './styles';

/* TYPES */
import type { Node } from 'react';

// type _t_props = {||};

export default (): Node => (
  <View style={{ flex: 1, }}>
    <MapView
      provider={PROVIDER_GOOGLE}
      styles={{ flex: 1 }}
      region={{
        latitude: 42.882004,
        longitude: 74.582748,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }}
      showsUserLocation
    />
  </View>
);
