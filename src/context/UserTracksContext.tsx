import React, {useState} from 'react';
import {createContext} from 'react';
import {Track} from '../interfaces/tracksInterfaces';

import AsyncStorage from '@react-native-async-storage/async-storage';

type UserTracksContextProps = {
  listTracksUser: Track[] | undefined;
  addTrackToUserListen: (newTrack: Track) => void;
};

export const UserTracksContext = createContext({} as UserTracksContextProps);

export const UserTracksProvider = ({children}: any) => {
  const [listTracksUser, setListTracksUser] = useState<Track[]>([]);

  //const userLatestTracks = await AsyncStorage.getItem('tracks')
  const addTrackToUserListen = (newTrack: Track) => {
    setListTracksUser([...listTracksUser, newTrack]);
  };

  return (
    <UserTracksContext.Provider
      value={{
        listTracksUser,
        addTrackToUserListen,
      }}>
      {children}
    </UserTracksContext.Provider>
  );
};
