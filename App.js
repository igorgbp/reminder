
import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Rotas from './fonte/rotas/navi';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar/>
      <Rotas/>
    </NavigationContainer>
  )
}




