import { Card } from "@rneui/themed";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Manga } from "../Manga";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export const MovieCard = ({ id, title, image, synopsis }: Manga) => {
  const navigation = useNavigation();

  if (id) {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Manga", {
            manga: { id, title, image, synopsis },
          });
        }}
        style={styles.touchable}
      >
        <Card containerStyle={styles.card}>
          <Card.Image source={{ uri: image }} style={styles.image} />
          <Card.Title style={styles.title}>{title}</Card.Title>
        </Card>
      </TouchableOpacity>
    );
  } else {
    return <Text />;
  }
};

const styles = StyleSheet.create({
  card: { width: "100%" },
  image: {},
  title: {},
  touchable: { width: "45%" },
});
