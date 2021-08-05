import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import Colors from '../constants/Colors';

import {Track} from '../interfaces/tracksInterfaces';

interface Props {
  track: Track;
}

export const TrackCard = ({track}: Props) => {
  const {navigate} = useNavigation();
  const {height} = useWindowDimensions();
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => navigate('DetalleScreen', track)}>
      <View style={{...styles.cardContiner, height: height > 300 ? 110 : 170}}>
        <View style={styles.cardInfo}>
          <View style={{flex: 1, marginLeft: 10}}>
            <Image
              source={{uri: track.image[3].img}}
              width={40}
              height={40}
              style={{borderRadius: 10, backgroundColor: '#ff4455'}}
            />
          </View>
          <View style={{flex: 4}}>
            <Text
              style={{
                color: Colors.secondary,
                fontWeight: '700',
                fontSize: 16,
              }}>
              {track.name}
            </Text>
            <Text style={{color: Colors.secondary, fontSize: 14}}>
              {track.artist.name}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContiner: {
    marginHorizontal: 20,
    borderRadius: 20,
    borderColor: Colors.secondary,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  cardInfo: {
    flexDirection: 'row',
  },
});
