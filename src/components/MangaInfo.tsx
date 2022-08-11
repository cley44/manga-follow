import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

export const MangaInfo = ({ route }: any) => {
  const { manga } = route.params;

  return (
    <View style={styles.MangaBaseView}>
      <Image style={styles.MangaImage} source={{ uri: manga.image }}></Image>
      <Text style={styles.MangaText}> {manga.title} </Text>
      <Text>{manga.synopsis}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  MangaBaseView: { width: "100%", height: "100%" },
  MangaImage: { width: "100%", height: "50%" },
  MangaText: { alignSelf: "center", fontSize: 40, textAlign: "center" },
});
