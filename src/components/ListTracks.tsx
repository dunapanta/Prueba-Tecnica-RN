import React from 'react';
import {FlatList} from 'react-native';

import {Track} from '../interfaces/tracksInterfaces';
import {TrackCard} from './TrackCard';

interface Props {
  topTracks: Track[];
}

export const ListTracks = ({topTracks}: Props) => {
  return (
    <FlatList
      data={topTracks}
      keyExtractor={track => track.name}
      showsVerticalScrollIndicator={false}
      renderItem={({item, index}) => <TrackCard track={item} />}
    />
  );
};
