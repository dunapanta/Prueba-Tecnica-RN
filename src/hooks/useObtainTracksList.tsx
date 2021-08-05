import React, {useEffect} from 'react';
import {tracksApi} from '../api/tracksApi';

export const useObtainTracksList = () => {
  const API_KEY = 'cef240c04a419e061d0f317d47b7269f';
  const COUNTRY = 'spain';
  const url = `https://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&${COUNTRY}=spain&api_key=${API_KEY}&format=json`;

  const loadTracks = async () => {
    const resp = await tracksApi.get(url);
    console.log(resp);
  };

  useEffect(() => {
    loadTracks();
  }, []);

  return {url};
};
