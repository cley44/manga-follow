import { getAuth } from "firebase/auth";
import { get, getDatabase, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { FlatList, Text } from "react-native";
import { Manga } from "../Manga";
import { MovieCard } from "./MovieCard";

export const Collection = () => {
  const [mangas, setMangas] = useState<Manga[]>();
  const user = getAuth().currentUser;

  useEffect(() => {
    if (user) {
      const database = getDatabase();
      const reference = ref(database, user.uid + "/manga");
      get(reference).then((mangas) => {
        setMangas(Object.values(mangas.val()));
      });
    }
  }, []);

  return (
    <FlatList
      numColumns={2}
      data={mangas}
      renderItem={(item) => {
        return <MovieCard {...item.item}></MovieCard>;
      }}
      //style={styles.flatlist}
      columnWrapperStyle={{
        justifyContent: "space-evenly",
        paddingTop: 15,
      }}
      contentContainerStyle={{ paddingBottom: 15 }}
    />
  );
};
