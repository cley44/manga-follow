import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import { getTrendingManga } from "./../utils/api";
import { MovieCard } from "./MovieCard";
import { Manga } from "../Manga";

const Home = () => {
  const [mangas, setMangas] = useState<Manga[]>();

  useEffect(() => {
    getTrendingManga().then((m) => {
      setMangas(m);
    });
  }, []);

  return (
    <FlatList
      numColumns={2}
      data={mangas}
      renderItem={(item) => {
        return <MovieCard {...item.item}></MovieCard>;
      }}
      style={styles.flatlist}
      columnWrapperStyle={{
        justifyContent: "space-evenly",
        paddingTop: 15,
      }}
      contentContainerStyle={{ paddingBottom: 15 }}
    />
  );
};

const styles = StyleSheet.create({
  flatlist: {
    width: "100%",
  },
});

export default Home;
