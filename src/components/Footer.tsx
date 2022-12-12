import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import HomePage from "./HomePage";
import SearchPage from "./SearchPage";
import { CollectionPage } from "./CollectionPage";
import { ISBNScanner } from "./scanner/ISBNScanner";

const Tab = createBottomTabNavigator();

const Footer = ({ navigation }: any) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          switch (route.name) {
            case "Home":
              return (
                <ImageBackground
                  source={require("./../../assets/footer/home.png")}
                  style={styles.logo}
                />
              );
            case "Search":
              return (
                <ImageBackground
                  source={require("./../../assets/footer/search.png")}
                  style={styles.logo}
                />
              );
            case "Collection":
              return (
                <ImageBackground
                  source={require("./../../assets/footer/collection.png")}
                  style={styles.logo}
                />
              );
            case "Nav":
              return (
                <ImageBackground
                  source={require("./../../assets/footer/navigation-menu.png")}
                  style={styles.logo}
                />
              );
          }
        },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "black",
        tabBarActiveBackgroundColor: "#bdd6ff",
      })}
    >
      <Tab.Screen
        name="Home"
        options={{ title: "Home", headerShown: false }}
        component={HomePage}
      />
      <Tab.Screen
        name="Search"
        options={{ title: "Search" }}
        component={SearchPage}
      />
      <Tab.Screen
        name="Collection"
        options={{
          title: "My collection",
          headerTitleAlign: "center",
        }}
        component={CollectionPage}
      />
      <Tab.Screen
        name="Nav"
        options={{ title: "Navigation" }}
        component={ISBNScanner}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  logo: { width: 35, height: 35 },
});

export default Footer;
