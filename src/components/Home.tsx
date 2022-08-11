import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { Card } from "@rneui/themed";
import { getTrendingManga } from "./../utils/api";
import { MovieCard } from "./MovieCard";
import { Manga } from "../Manga";

const Home = () => {
  //const [mangas, setMangas] = useState([]);

  // getTrendingManga().then((json) => {
  //   const m = json.map((manga: Manga) => {
  //     return <MovieCard key={manga.id} {...manga} />;
  //   });

  //   setMangas(m);
  // });

  const mangas: Manga[] = [];
  mangas.push(new Manga("1", "Naruto", ""));
  mangas.push(new Manga("2", "My hero academia", ""));
  mangas.push(new Manga("3", "Naruto3", ""));
  mangas.push(new Manga("4", "Naruto4", ""));
  mangas.push(new Manga("5", "Naruto5", ""));
  mangas.push(new Manga("6", "Naruto6", ""));
  mangas.push(new Manga("7", "Naruto7", ""));
  mangas.push(new Manga("8", "Naruto8", ""));
  mangas.push(new Manga("9", "Naruto9", ""));
  mangas.push(new Manga("10", "Naruto10", ""));
  mangas.push(new Manga("11", "Naruto11", ""));
  mangas.push(new Manga("12", "Naruto12", ""));
  mangas.push(new Manga("13", "Naruto13", ""));
  mangas.push(new Manga("14", "Naruto14", ""));

  return (
    <View style={styles.base}>
      <FlatList
        numColumns={2}
        data={mangas}
        renderItem={(item) => {
          return <MovieCard {...item.item}></MovieCard>;
        }}
        style={styles.flatlist}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  base: {},
  flatlist: { width: "100%" },
});

export default Home;
