import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PaymentDetails, TambahTamu } from "./src/screens";

import Toast from "react-native-toast-message";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false, animation: "fade_from_bottom" }}
      >
        <Stack.Screen name="PaymentDetails" component={PaymentDetails} />
        <Stack.Screen name="TambahTamu" component={TambahTamu} />
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  );
}
