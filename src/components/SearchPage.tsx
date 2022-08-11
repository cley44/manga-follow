import React, { useState } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { Manga } from "../Manga";
import { searchManga } from "../utils/api";
import { MovieCard } from "./MovieCard";
import SearchBarCustom from "./SearchBarCustom";

const SearchPage = function (this: any) {
  const [search, setSearch] = useState<String>("");
  const [mangas, setMangas] = useState<Manga[]>();

  const getSearchWord = (searchWord: String) => {
    setSearch(searchWord);
    searchManga(searchWord).then((m) => {
      setMangas(m);
    });
  };

  return (
    <View>
      <SearchBarCustom getSearchWord={getSearchWord} />
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
  flatlist: { width: "100%" },
});

export default SearchPage;
