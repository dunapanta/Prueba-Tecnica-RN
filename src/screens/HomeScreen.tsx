import React from 'react';
import {View, StatusBar, Text, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import Icon from 'react-native-vector-icons/Ionicons';

import Colors from '../constants/Colors';
import {useObtainTracksList} from '../hooks/useObtainTracksList';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {topTracksList} = useObtainTracksList();
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.primary} />
      <View style={styles.header}>
        <View style={{flex: 1, marginLeft: 10}}>
          <Icon name="menu-outline" size={46} color={Colors.secondary} />
        </View>
        <View style={{flex: 3}}>
          <Text style={styles.headerText}>Top Tracks en España</Text>
        </View>
      </View>
      <Text>{JSON.stringify(topTracksList, null, 5)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    color: Colors.secondary,
    fontSize: 20,
    fontWeight: '700',
  },
});
