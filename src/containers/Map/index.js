// @flow

/* REACT */
import React from 'react';

/* MODULES */
import {
  SafeAreaView, View, StyleSheet, Text
} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
// import MapView from 'react-native-maps';

/* CUSTOM MODULES */

/* CONFIGS */

/* STYLES */
// import {} from './styles';

/* TYPES */
import type { Node } from 'react';

// type _t_props = {||};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 15,
  },
  title: {
    marginVertical: 15,
  },
  mapWrapper: {
    height: 300,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    // backgroundColor: 'yellow',
    position: 'relative',
  },
  map: {
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // right: 0,
    // bottom: 0,
    // flex: 1,
    ...StyleSheet.absoluteFillObject,
  },
});

export default (): Node => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.title}>Map start</Text>
    <View style={styles.mapWrapper}>
      <MapView
        styles={styles.map}
        provider={PROVIDER_GOOGLE}
        region={{
          latitude: 42.882004,
          longitude: 74.582748,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        showsUserLocation
      />
    </View>
    <Text style={styles.title}>Map end</Text>
  </SafeAreaView>
);
