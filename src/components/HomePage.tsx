import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MangaInfo } from "./MangaInfo";
import Home from "./Home";

const Stack = createNativeStackNavigator();

const HomePage = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={Home} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default HomePage;
