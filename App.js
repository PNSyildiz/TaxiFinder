import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/stack';
import NoResponseFoundScreen from './app/screens/NoResponseFoundScreen';
import HomeScreen from './app/screens/HomeScreen';
import Notifications from './app/screens/Notifications';
import Responses from './app/screens/Responses';
import Question from './app/screens/Question';
import LoginScreen from './app/screens/LoginScreen';
import SignUpScreen from './app/screens/SignUpScreen';
import ProfileScreen from './app/screens/ProfileScreen';
import EditScreen from './app/screens/EditScreen';
import AddAddress from './app/screens/AddAddress';
import AppButton from './app/screens/AppButton';
import { enableScreens } from 'react-native-screens';

enableScreens();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUpScreen">
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="AddAddress" component={AddAddress} />
        <Stack.Screen name="Home" component={HomeScreen} /> {/* Define HomeScreen */}
        
        <StatusBar style="auto" />
           
        </Stack.Navigator>
    </NavigationContainer>
  )
}

