import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {UserTracksProvider} from './src/context/UserTracksContext';

import {Navigator} from './src/navigation/Navigator';

const AppState = ({children}: any) => {
  return <UserTracksProvider>{children}</UserTracksProvider>;
};

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigator />
      </AppState>
    </NavigationContainer>
  );
};

export default App;
