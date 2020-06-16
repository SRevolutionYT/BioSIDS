import React from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView} from 'react-native';
import { AppLoading} from 'expo';

import Routes from './src/routes';

import { Roboto_500Medium, Roboto_400Regular } from '@expo-google-fonts/roboto';
import { Ubuntu_700Bold, useFonts} from '@expo-google-fonts/ubuntu';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {Container} from 'native-base';

export default function App() {
  const [FontsLoaded] = useFonts({
    Roboto_500Medium,
    Roboto_400Regular,
    Ubuntu_700Bold,
  });
  
  if(!FontsLoaded){
     return <AppLoading />;

  }

  return (
    <Container>
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent/>
      <Routes />
    </SafeAreaProvider>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DBDBDB',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
