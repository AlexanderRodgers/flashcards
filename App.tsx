import React from 'react';
import HomeScreen from './screens/HomeScreen';
import { NativeBaseProvider, Box } from 'native-base';

function App() {
  return (
    <NativeBaseProvider>
      <HomeScreen />
    </NativeBaseProvider>
  );
}

export default App