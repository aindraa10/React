/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TextInput,
  Alert,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { event } from 'react-native-reanimated';
import HomeScreen from './Screens/Home/Home';
import DetailsScreen from './Screens/Detail/Detail';
import KalkulatorScreen from './Screens/Kalkulator/Kalkulator';

const Stack = createStackNavigator()

const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={ HomeScreen } />
          <Stack.Screen name="Details" component={ DetailsScreen } />
          <Stack.Screen name="Kalkulator" component={ KalkulatorScreen } />

        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};



const styles = StyleSheet.create( {
  h1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue'
  },
  inputText: {
    borderWidth: 1,
    marginBottom: 12,
    borderRadius: 25,
    paddingHorizontal: 18
  },
  line: {
    height: 2,
    backgroundColor: "white",
    marginVertical: 20
  }

} )

export default App;
