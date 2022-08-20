import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Collection } from "./Collection";
import { PAL } from "./PAL";
import { ToBuy } from "./ToBuy";

const Tab = createMaterialTopTabNavigator();

export const CollectionPage = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="MyCollection" component={Collection} />
      <Tab.Screen name="PAL" component={PAL} />
      <Tab.Screen name="ToBuy" component={ToBuy} />
    </Tab.Navigator>
    // <Text style={styles.emptyCollection}>
    //   Your collection is empty, go to the search tab to start adding manga
    // </Text>
  );
};

const styles = StyleSheet.create({
  emptyCollection: { textAlign: "center" },
});
