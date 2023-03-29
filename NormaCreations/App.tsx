import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import NavigationContainer from './Components/Containers/NavigationContainer';
import MainContainer from './Components/Containers/PageContainer';
import Header from './Components/Texts/Header';
import LargeText from './Components/Texts/LargeText';
import SmallText from './Components/Texts/SmallText';
import Text from './Components/Texts/Text';
import Navigation from './Navigation/navigation';
export default function App() {
  return (
    <MainContainer>
      <Header>Hello</Header>
      <SmallText>Hello</SmallText>
      <Text>Hello</Text>
      <LargeText>Hello</LargeText>
      <Navigation/>
    </MainContainer>
  );
}

