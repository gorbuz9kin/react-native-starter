// @flow

/* REACT */
import React from 'react';

/* MODULES */
import { View, Text, TouchableOpacity } from 'react-native';

/* CUSTOM MODULES */

/* CONFIGS */

/* STYLES */
// import {} from './styles';

/* TYPES */
import type { Node } from 'react';

type _t_props = {|
  navigation: Object,
|};

export default ({ navigation }: _t_props): Node => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Profile Screen</Text>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Text>Back button</Text>
    </TouchableOpacity>
  </View>
);
