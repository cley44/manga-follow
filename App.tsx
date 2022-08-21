import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
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
import { CollectionContext } from "./src/collectionContext";
import { Manga } from "./src/Manga";
import { get, getDatabase, ref } from "firebase/database";

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

  const auth = getAuth();

  const [collection, setCollection] = React.useState<Manga[]>([]);
  const state = { collection, setCollection };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsConnected(true);
    } else {
      setIsConnected(false);
    }
  });

  useEffect(() => {
    if (auth.currentUser) {
      const database = getDatabase();
      const reference = ref(database, auth.currentUser.uid + "/manga");
      get(reference).then((mangas) => {
        if (mangas.val()) {
          setCollection(Object.values(mangas.val()));
        }
      });
    }
  }, [isConnected]);

  if (isConnected) {
    return (
      <CollectionContext.Provider value={state}>
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
      </CollectionContext.Provider>
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
