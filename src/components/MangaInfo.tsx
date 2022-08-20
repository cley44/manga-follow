import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { CheckBox, ListItem } from "@rneui/themed";
import { Manga } from "../Manga";
import { useNavigation } from "@react-navigation/native";
import { getDatabase, ref, set } from "firebase/database";
import { getAuth, User } from "firebase/auth";

export const MangaInfo = ({ route }: any) => {
  const manga: Manga = route.params.manga;
  const user = getAuth().currentUser;

  const navigation = useNavigation();

  const [collectionCheck, setCollectionCheck] = useState<boolean>(false);
  const [favoriteCheck, setFavoriteCheck] = useState<boolean>(false);

  const database = getDatabase();

  const showTome = () => {
    let tomes = [];
    for (let index = 1; index <= manga.volumeCount; index++) {
      tomes.push(
        <TouchableOpacity
          key={index}
          onPress={() => {
            navigation.navigate("Tome");
          }}
        >
          <ListItem bottomDivider>
            <ListItem.Content
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View style={{ width: "50%", alignItems: "center" }}>
                <ListItem.Title>Tome {index}</ListItem.Title>
              </View>
              <View style={{ width: "50%" }}>
                <ListItem.Chevron iconStyle={{ fontSize: 30 }} />
              </View>
            </ListItem.Content>
          </ListItem>
        </TouchableOpacity>
      );
    }
    return tomes;
  };

  return (
    <View style={styles.MangaBaseView}>
      <ScrollView>
        <Image style={styles.MangaImage} source={{ uri: manga.image }} />
        <Text style={styles.MangaText}> {manga.title} </Text>
        <Text style={{ alignSelf: "center" }}>Maned</Text>

        <View
          style={{
            backgroundColor: "red",
            alignSelf: "center",
            padding: 12,
            paddingRight: 15,
            paddingLeft: 15,
            borderRadius: 30,
          }}
        >
          <Text
            style={{
              fontSize: 25,
            }}
          >
            0/{manga.volumeCount}
          </Text>
        </View>

        <View style={styles.MangaButtonView}>
          <CheckBox
            containerStyle={styles.MangaButtonContainer}
            title="Add to collection"
            checked={collectionCheck}
            iconRight={true}
            uncheckedIcon={"plus"}
            checkedIcon={"check"}
            onPress={() => {
              if (user) {
                const reference = ref(
                  database,
                  user.uid + "/manga/" + manga.title
                );
                set(reference, manga);
                setCollectionCheck(!collectionCheck);
              }
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
        {showTome()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  MangaBaseView: { width: "100%", height: "100%" },
  MangaImage: {
    alignSelf: "center",
    width: "90%",
    height: 375,
  },
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
