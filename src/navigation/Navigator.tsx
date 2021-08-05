import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/HomeScreen';
import {DetalleScreen} from '../screens/DetalleScreen';
import {PerfilScreen} from '../screens/PerfilScreen';

import Colors from '../constants/Colors';
import {Track} from '../interfaces/tracksInterfaces';

export type RootStackParams = {
  HomeScreen: undefined;
  DetalleScreen: Track;
  PerfilScreen: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: Colors.primary,
        },
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetalleScreen" component={DetalleScreen} />
      <Stack.Screen name="PerfilScreen" component={PerfilScreen} />
    </Stack.Navigator>
  );
};
