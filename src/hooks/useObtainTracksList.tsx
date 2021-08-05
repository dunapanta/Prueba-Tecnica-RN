import React, {useEffect, useState} from 'react';

import {tracksApi} from '../api/tracksApi';
import {TopTracksResponse, Track} from '../interfaces/tracksInterfaces';

export const useObtainTracksList = () => {
  const [topTracksList, setTopTracksList] = useState<Track[]>([]);
  const API_KEY = 'cef240c04a419e061d0f317d47b7269f';
  const COUNTRY = 'spain';
  const url = `https://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=${COUNTRY}&api_key=${API_KEY}&format=json&limit=10`;

  const loadTracks = async () => {
    const resp = await tracksApi.get<TopTracksResponse>(url);
    //console.log(resp.data.tracks);
    setTopTracksList(resp.data.tracks.track);
  };

  useEffect(() => {
    loadTracks();
  }, []);

  return {topTracksList};
};
