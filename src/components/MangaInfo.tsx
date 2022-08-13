import React, { useState } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { CheckBox } from "@rneui/themed";
import { Manga } from "../Manga";

export const MangaInfo = ({ route }: any) => {
  const manga: Manga = route.params.manga;

  const [collectionCheck, setCollectionCheck] = useState<boolean>(false);
  const [favoriteCheck, setFavoriteCheck] = useState<boolean>(false);

  return (
    <View style={styles.MangaBaseView}>
      <Text style={{ textAlign: "center" }}>{manga.id}</Text>
      <Image style={styles.MangaImage} source={{ uri: manga.image }}></Image>
      <Text style={styles.MangaText}> {manga.title} </Text>
      <Text style={{ textAlign: "center", fontSize: 20 }}>0/20</Text>
      <View style={styles.MangaButtonView}>
        <CheckBox
          containerStyle={styles.MangaButtonContainer}
          title="Add to collection"
          checked={collectionCheck}
          iconRight={true}
          uncheckedIcon={"plus"}
          checkedIcon={"check"}
          onPress={() => {
            setCollectionCheck(!collectionCheck);
          }}
        />
        <CheckBox
          containerStyle={styles.MangaButtonContainer}
          title="Add to favorite"
          checked={favoriteCheck}
          iconRight={true}
          onPress={() => {
            setFavoriteCheck(!favoriteCheck);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  MangaBaseView: { width: "100%", height: "100%" },
  MangaImage: { width: "100%", height: "50%" },
  MangaText: { alignSelf: "center", fontSize: 40, textAlign: "center" },
  MangaButtonContainer: {
    width: "40%",
    borderRadius: 30,
  },

  MangaButtonView: {
    width: "100%",

    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
