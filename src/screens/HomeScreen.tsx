import React from 'react';
import {View, StatusBar, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Colors from '../constants/Colors';
import {useObtainTracksList} from '../hooks/useObtainTracksList';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  useObtainTracksList();
  return (
    <View>
      <StatusBar backgroundColor={Colors.primary} />
      <Text>Home Screen</Text>
    </View>
  );
};
