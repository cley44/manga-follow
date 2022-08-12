import { Card } from "@rneui/themed";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Manga } from "../Manga";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export const MovieCard = (manga: Manga) => {
  const navigation = useNavigation();

  if (manga) {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Manga", {
            manga: manga,
          });
        }}
        style={styles.touchable}
      >
        <Card containerStyle={styles.card}>
          <Card.Image source={{ uri: manga.image }} style={styles.image} />
          <Card.Title style={styles.title}>{manga.title}</Card.Title>
        </Card>
      </TouchableOpacity>
    );
  } else {
    return <Text />;
  }
};

const styles = StyleSheet.create({
  card: { width: "100%" },
  image: { height: 217 },
  title: {},
  touchable: { width: "45%" },
});
