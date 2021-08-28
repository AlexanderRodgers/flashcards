import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { NativeBaseProvider } from 'native-base';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import HomeScreen from './screens/HomeScreen';
import AppBar from './components/AppBar';
import MultiSafeView from './components/MultiSafeView';
import BottomNav from './components/BottomNav';
import Layout from './components/Layout';

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
      <NativeBaseProvider>
        <MultiSafeView>
          <Layout>
            <AppBar />
            <HomeScreen />
          </Layout>
        </MultiSafeView>
      </NativeBaseProvider>
    </ApplicationProvider>
  </>
);