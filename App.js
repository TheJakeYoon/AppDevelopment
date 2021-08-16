import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import firebase from 'firebase';
import 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Welcome from './components/Welcome';
import Login from './components/Login';
import Notification from './components/Notification';
import Main from './components/Main';
import Contact from './components/Contact'
import Help from './components/Help'
import Chat from './components/Chat'
import Reminder from './components/Reminder'
import MentalHealth from './components/MentalHealth'
import Game from './components/Game'
import Meditation from './components/Meditation'
import PlayScreen from './components/PlayScreen'

const firebaseConfig = {
  apiKey: "AIzaSyAp63YhaTKD8qC7cM6ouQV1BVvRlxDAwoY",
  authDomain: "appdevelopment-435a3.firebaseapp.com",
  projectId: "appdevelopment-435a3",
  storageBucket: "appdevelopment-435a3.appspot.com",
  messagingSenderId: "942989083960",
  appId: "1:942989083960:web:e66b69bdc553a08175edcd",
  measurementId: "G-ZZGQ541WD5"
};

firebase.initializeApp(firebaseConfig)

const Stack = createStackNavigator();

export default function App() {
  const [registered, setRegistered] = useState(false);

  const getData = async() => {
    try {
      const value = await AsyncStorage.getItem("registered");
      setRegistered(true);
    }
    catch(err) {
    }
  };

  useEffect(() => {
    getData();
  })
  return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="Reminder" component={Reminder} />
          <Stack.Screen name="Contact" component={Contact} />
          <Stack.Screen name="Help" component={Help} />
          <Stack.Screen name="Chat" component={Chat} />
          <Stack.Screen name="MentalHealth" component={MentalHealth} />
          <Stack.Screen name="Game" component={Game} />
          <Stack.Screen name="Meditation" component={Meditation} />
          <Stack.Screen name="PlayScreen" component={PlayScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}