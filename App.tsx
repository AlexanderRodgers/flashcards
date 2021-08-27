import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import HomeScreen from './screens/HomeScreen';
import AppBar from './components/AppBar';
import MultiSafeView from './components/MultiSafeView';

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
      <MultiSafeView>
        <AppBar />
        <HomeScreen />
      </MultiSafeView>
    </ApplicationProvider>
  </>
);