/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/style-prop-object */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppLoading from 'expo-app-loading';
import {
  Archivo_400Regular,
  Archivo_700Bold,
} from '@expo-google-fonts/archivo';
import { useFonts } from 'expo-font';
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';
import Landing from './src/pages/Landing';
import AppStack from './src/routes/AppStack';

export default function App() {
  const [loaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  if (!loaded) {
    return <AppLoading />;
  }
  return (
    <>
      <AppStack />
      <StatusBar style="light" />
    </>
  );
}
