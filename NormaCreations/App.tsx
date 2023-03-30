import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./Navigation/types";
import BalloonScreen from "./Screens/BalloonsPage/BalloonScreen";
import DecorationsScreen from "./Screens/DecorationsPage/DecorationsScreen";
import ContactScreen from "./Screens/ContactPage/ContactScreen";
import ShopScreen from "./Screens/ShopPage/ShopScreen";
import LandingScreen from "./Screens/LandingPage/LandingScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingPage">
        <Stack.Screen name="LandingPage" component={LandingScreen} />
        <Stack.Screen name="Shop" component={ShopScreen} />
        <Stack.Screen name="Decorations" component={DecorationsScreen} />
        <Stack.Screen name="Balloons" component={BalloonScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
