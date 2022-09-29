import React, { useContext, useState } from "react";
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
import { getAuth } from "firebase/auth";
import { CollectionContext } from "../collectionContext";
import { PAL } from "./PAL";

export const MangaInfo = ({ route }: any) => {
  let manga: Manga = route.params.manga;
  const user = getAuth().currentUser;

  const navigation = useNavigation();

  const [collectionCheck, setCollectionCheck] = useState<boolean>(
    manga.inCollection
  );
  const [favoriteCheck, setFavoriteCheck] = useState<boolean>(manga.inFavorite);

  const [PALCheck, setPALCheck] = useState<boolean>(manga.inPAL);

  const [toBuyCheck, setToBuyCheck] = useState<boolean>(manga.toBuy);

  const database = getDatabase();

  const { collection, setCollection } = useContext(CollectionContext);

  const showTome = () => {
    let tomes = [];
    for (let index = 1; index <= manga.volumeCount; index++) {
      tomes.push(
        <TouchableOpacity
          key={index}
          onPress={() => {
            navigation.navigate("Tome" as any);
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
                const m = { ...manga };
                m["inCollection"] = !m["inCollection"];
                manga = m;

                setCollection([...collection, manga]);

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
              if (user) {
                const m = { ...manga };
                m["inFavorite"] = !m["inFavorite"];
                manga = m;

                setCollection([...collection, manga]);

                const reference = ref(
                  database,
                  user.uid + "/manga/" + manga.title
                );

                set(reference, manga);

                setFavoriteCheck(!favoriteCheck);
              }
            }}
          />
          <CheckBox
            containerStyle={styles.MangaButtonContainer}
            title="Add to PAL"
            checked={PALCheck}
            iconRight={true}
            onPress={() => {
              if (user) {
                const m = { ...manga };
                m["inPAL"] = !m["inPAL"];
                manga = m;

                setCollection([...collection, manga]);

                const reference = ref(
                  database,
                  user.uid + "/manga/" + manga.title
                );

                set(reference, manga);

                setPALCheck(!PALCheck);
              }
            }}
          />
          <CheckBox
            containerStyle={styles.MangaButtonContainer}
            title="To Buy"
            checked={toBuyCheck}
            iconRight={true}
            onPress={() => {
              if (user) {
                const m = { ...manga };
                m["toBuy"] = !m["toBuy"];
                manga = m;

                setCollection([...collection, manga]);

                const reference = ref(
                  database,
                  user.uid + "/manga/" + manga.title
                );

                set(reference, manga);

                setToBuyCheck(!toBuyCheck);
              }
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
    alignItems: "center",
  },

  MangaButtonView: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },
});
