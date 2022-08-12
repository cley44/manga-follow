import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import React from "react";
import { StyleSheet } from "react-native";
import Footer from "./src/components/Footer";
import { MangaInfo } from "./src/components/MangaInfo";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name=" "
          component={Footer}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Manga"
          component={MangaInfo}
          options={({ route }: any) => {
            const { manga } = route.params;
            return {
              title: manga.title,
            };
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  logo: { width: 35, height: 35 },
});
