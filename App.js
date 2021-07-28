import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import firebase from 'firebase';
import 'firebase/firestore';
import Welcome from './components/Welcome';
import Login from './components/Login';
import Notification from './components/Notification';
import Main from './components/Main';

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
  return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Main'>
            <Stack.Screen name='Home' component={Welcome} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Notification' component={Notification} />
            <Stack.Screen name='Main' component={Main} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};
