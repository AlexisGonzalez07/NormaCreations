import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainContainer from './Components/Containers/PageContainer';
export default function App() {
  return (
    <MainContainer>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </MainContainer>
  );
}

