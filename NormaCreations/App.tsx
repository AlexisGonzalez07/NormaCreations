import { StatusBar } from "expo-status-bar";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./Navigation/types";
import { lazy, Suspense, useState } from "react";
import { colors } from "./Components/colors";
import { CartProvider } from "./CartContext";
import CustomPressable from "./Components/Pressables/CustomPressable";
import { Ionicons } from "@expo/vector-icons";
import CartModal from "./Components/Modals/CartModal";
const Stack = createNativeStackNavigator<RootStackParamList>();

const LandingScreen = lazy(() => import("./Screens/LandingPage/LandingScreen"));
const BalloonScreen = lazy(
  () => import("./Screens/BalloonsPage/BalloonScreen")
);
const DecorationsScreen = lazy(
  () => import("./Screens/DecorationsPage/DecorationsScreen")
);
const ShopScreen = lazy(() => import("./Screens/ShopPage/ShopScreen"));
const ContactScreen = lazy(() => import("./Screens/ContactPage/ContactScreen"));

export default function App() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <CartProvider>
      <Suspense fallback={<h1>In Progress..</h1>}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              title: "Norma's Creations",
              headerTitleAlign: 'left',
              headerTintColor: 'black',
              headerStyle: {
                backgroundColor: colors.lightBackground
              },
              headerRight: () => (
                <CustomPressable onPress={() => handleOpenModal()} style={{backgroundColor: colors.green, width: 'auto', padding: 3, marginRight: 10}}>
                <Ionicons name={'cart'} size={28} /></CustomPressable>
              )
            }}
            initialRouteName="Shop"
          >
            <Stack.Screen
              name="LandingPage"
              component={LandingScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Shop"
              component={ShopScreen}
              options={{
                title: "Norma's Shop",
                headerLeft: null
              }}
            />
            <Stack.Screen
              name="Decorations"
              component={DecorationsScreen}
              options={{
                title: "Norma's Decorations",
                headerLeft: null
              }}
            />
            <Stack.Screen
              name="Balloons"
              component={BalloonScreen}
              options={{
                title: "Norma's Balloons",
                headerLeft: null
              }}
            />
            <Stack.Screen
              name="Contact"
              component={ContactScreen}
              options={{
                title: "Contact Norma's Creations",
                headerLeft: null
              }}
            />
          </Stack.Navigator>
            <CartModal visible={showModal} handleCloseModal={handleCloseModal}/>
        </NavigationContainer>
      </Suspense>
    </CartProvider>
  );
}
