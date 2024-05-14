import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NoResponseFoundScreen from './app/screens/NoResponseFoundScreen';
import HomeScreen from './app/screens/HomeScreen';
import Notifications from './app/screens/Notifications';
import Responses from './app/screens/Responses';
import Question from './app/screens/Question';
import LoginScreen from './app/screens/LoginScreen';
import SignUpScreen from './app/screens/SignUpScreen';
import ProfileScreen from './app/screens/ProfileScreen';
import EditScreen from './app/screens/EditScreen';
import AppButton from './app/screens/AppButton';

export default function App() {
  return (
    <View>
        <StatusBar style="auto" />
        {/* <NoResponseFoundScreen /> */}
        {/* <HomeScreen /> */}
        {/* <Notifications /> */}
        {/* <Responses /> */}
        {/* <Question /> */}
        {/* <LoginScreen /> */}
        <SignUpScreen />
        {/* <ProfileScreen /> */}
        {/* <EditScreen /> */}
        {/* <AppButton /> */}
    </View>
  )
}

