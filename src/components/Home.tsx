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

  // const mangas: Manga[] = [];
  // mangas.push(new Manga("1", "Naruto", "./../../assets/Naruto.png", 10, 10));
  // mangas.push(
  //   new Manga("2", "My hero academia", "./../../assets/Naruto.png", 10, 10)
  // );
  // mangas.push(new Manga("3", "Naruto3", "./../../assets/Naruto.png", 10, 10));
  // mangas.push(new Manga("4", "Naruto4", "./../../assets/Naruto.png", 10, 10));
  // mangas.push(new Manga("5", "Naruto5", "./../../assets/Naruto.png", 10, 10));
  // mangas.push(new Manga("6", "Naruto6", "./../../assets/Naruto.png", 10, 10));
  // mangas.push(new Manga("7", "Naruto7", "./../../assets/Naruto.png", 10, 10));
  // mangas.push(new Manga("8", "Naruto8", "./../../assets/Naruto.png", 10, 10));
  // mangas.push(new Manga("9", "Naruto9", "./../../assets/Naruto.png", 10, 10));
  // mangas.push(new Manga("10", "Naruto10", "./../../assets/Naruto.png", 10, 10));
  // mangas.push(new Manga("11", "Naruto11", "./../../assets/Naruto.png", 10, 10));
  // mangas.push(new Manga("12", "Naruto12", "./../../assets/Naruto.png", 10, 10));
  // mangas.push(new Manga("13", "Naruto13", "./../../assets/Naruto.png", 10, 10));
  // mangas.push(new Manga("14", "Naruto14", "./../../assets/Naruto.png", 10, 10));

  return (
    // <View style={styles.base}>
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
    // </View>
  );
};

const styles = StyleSheet.create({
  base: {},
  flatlist: {
    width: "100%",
  },
});

export default Home;
