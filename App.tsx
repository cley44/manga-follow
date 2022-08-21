import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { createContext, useEffect, useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import Footer from "./src/components/Footer";
import { MangaInfo } from "./src/components/MangaInfo";
import { TomeInfo } from "./src/components/TomeInfo";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signInAnonymously,
  User,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "project-id.firebaseapp.com",
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: "project-id.appspot.com",
  messagingSenderId: "sender-id",
  appId: process.env.REACT_APP_APP_ID,
  measurementId: "G-measurement-id",
};

initializeApp(firebaseConfig);

const Stack = createNativeStackNavigator();

export default function App() {
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [user, setUser] = useState<User>();
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsConnected(true);
      setUser(user);
    } else {
      setIsConnected(false);
      setUser(undefined);
    }
  });

  if (isConnected) {
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
                headerTitleAlign: "center",
              };
            }}
          />
          <Stack.Screen name="Tome" component={TomeInfo} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <View>
      <Text>You are not auth</Text>
      <Button
        title="login"
        onPress={async () => {
          await signInAnonymously(auth);
        }}
      >
        login
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: { width: 35, height: 35 },
});
