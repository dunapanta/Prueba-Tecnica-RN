import {useNavigation} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';
import {RootStackParams} from '../navigation/Navigator';

interface Props extends StackScreenProps<RootStackParams, 'DetalleScreen'> {}

export const DetalleScreen = (props: Props) => {
  const {goBack} = useNavigation();
  const {route} = props
  const {params} = route
  const {name} = params
  
  return (
    <View>
      <View style={styles.header}>
        <View style={{flex: 1, marginLeft: 10}}>
          <TouchableOpacity onPress={goBack}>
            <Icon
              name="arrow-back-outline"
              size={36}
              color={Colors.secondary}
            />
          </TouchableOpacity>
        </View>
        <View style={{flex: 3}}>
          <Text style={styles.headerText}>{name}</Text>
        </View>
      </View>
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
