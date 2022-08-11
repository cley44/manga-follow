import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import HomePage from "./HomePage";
import { MangaInfo } from "./MangaInfo";
import SearchPage from "./SearchPage";

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

      {/* <Tab.Screen
      name="Nav"
      options={{ title: "Navigation" }}
      component={() => {
        return <View></View>;
      }}
    /> */}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  logo: { width: 35, height: 35 },
});

export default Footer;
