import { Text, View } from "react-native";
import { StyleSheet } from "react-native";

export const CollectionPage = () => {
  return (
    <Text style={styles.emptyCollection}>
      Your collection is empty, go to the search tab to start adding manga
    </Text>
  );
};

const styles = StyleSheet.create({
  emptyCollection: { textAlign: "center" },
});
