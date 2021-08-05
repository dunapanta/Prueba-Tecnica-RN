import {useNavigation} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  View,
  Image,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';
import {RootStackParams} from '../navigation/Navigator';

interface Props extends StackScreenProps<RootStackParams, 'DetalleScreen'> {}

export const DetalleScreen = (props: Props) => {
  const {top} = useSafeAreaInsets();
  const {goBack} = useNavigation();
  const {width} = useWindowDimensions();
  const {route} = props;
  const {params} = route;
  const {name, image, artist} = params;

  return (
    <View style={{flex: 1, top: top}}>
      {/* Header */}
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
      {/* White card */}
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          marginTop: 60,
          borderTopRightRadius: 100,
          borderTopLeftRadius: 100,
          position: 'relative',
        }}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          {/* IMAGE */}
          <Image
            source={{uri: image[3].img}}
            style={{
              backgroundColor: '#ff4455',
              borderRadius: 20,
              marginVertical: 30,
            }}
            width={120}
            height={120}
          />
          {/* Info */}
          <Text
            style={{
              color: Colors.primary,
              fontSize: 21,
              fontWeight: 'bold',
            }}>
            {name}
          </Text>
          <Text
            style={{
              color: Colors.primary,
              fontSize: 19,
            }}>
            {artist.name}
          </Text>
          {/* Line */}
          <View
            style={{
              marginVertical: 50,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>1:20</Text>
            <View
              style={{
                width: 240,
                marginHorizontal: 8,
                height: 2,
                backgroundColor: Colors.primary,
              }}
            />
            <Text>4:25</Text>
          </View>
          {/* Buttons */}
          <View style={{flexDirection: 'row'}}>
            <Icon
              name="play-back-circle-outline"
              size={56}
              color={Colors.primary}
            />

            <Icon
              name="pause-circle-outline"
              style={{marginHorizontal: 20}}
              size={56}
              color={Colors.primary}
            />

            <Icon
              name="play-forward-circle-outline"
              size={56}
              color={Colors.primary}
            />
          </View>
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
