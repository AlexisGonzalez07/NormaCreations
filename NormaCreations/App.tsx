import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./Navigation/types";
import {lazy,Suspense} from 'react'
import { colors } from "./Components/colors";

const Stack = createNativeStackNavigator<RootStackParamList>();

const LandingScreen = lazy(() => import("./Screens/LandingPage/LandingScreen"))
const BalloonScreen = lazy(() => import("./Screens/BalloonsPage/BalloonScreen"))
const DecorationsScreen = lazy(() => import("./Screens/DecorationsPage/DecorationsScreen"))
const ShopScreen = lazy(() => import("./Screens/ShopPage/ShopScreen"))
const ContactScreen = lazy(() => import("./Screens/ContactPage/ContactScreen"))



export default function App() {
  return (
    <Suspense fallback={<h1>Loading..</h1>}>
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
        headerShown: false
      }}
      initialRouteName="LandingPage"
     >
        <Stack.Screen name="LandingPage" component={LandingScreen} />
        <Stack.Screen name="Shop" component={ShopScreen} />
        <Stack.Screen name="Decorations" component={DecorationsScreen} />
        <Stack.Screen name="Balloons" component={BalloonScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </Suspense>
  );
}
