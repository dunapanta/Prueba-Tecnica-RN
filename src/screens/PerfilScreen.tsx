import {useNavigation} from '@react-navigation/native';
import React, {useContext} from 'react';

import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {ListTracks} from '../components/ListTracks';
import Colors from '../constants/Colors';
import {UserTracksContext} from '../context/UserTracksContext';

export const PerfilScreen = () => {
  const {goBack} = useNavigation();
  const {listTracksUser} = useContext(UserTracksContext);
  return (
    <View style={{flex: 1,}}>
      <View style={styles.header}>
        <View style={{flex: 1, marginLeft: 10}}>
          <TouchableOpacity activeOpacity={0.7} onPress={goBack}>
            <Icon
              name="arrow-back-outline"
              size={36}
              color={Colors.secondary}
            />
          </TouchableOpacity>
        </View>
        <View style={{flex: 3,}}>
          <Text style={styles.headerText}>Mi Perfil</Text>
        </View>
      </View>
      <View
        style={{
          justifyContent: 'center',
          width: 200,
          height: 200,
          borderColor: Colors.secondary,
          borderWidth: 2,
          borderRadius: 100,
          marginVertical: 20,
          overflow: 'hidden',
          marginLeft: 80
        }}>
        <Image
          source={require('../assets/avatar.png')}
          style={{height: '100%', width: '100%'}}
        />
      </View>
      <ListTracks topTracks={listTracksUser!} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: Colors.secondary,
    fontSize: 20,
    fontWeight: '700',
  },
});
