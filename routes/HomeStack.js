import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";
import React from "react";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: "#eee" },
          headerTintColor: "#444",
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "GameZone" }}
        />
        <Stack.Screen
          name="ReviewDetails"
          component={ReviewDetails}
          options={{ title: "Review" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeStack;
