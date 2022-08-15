import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";

const Stack = createNativeStackNavigator();

const HomePage = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="New releases"
        component={Home}
        options={{ headerTitleAlign: "center" }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default HomePage;
