import React, { useState } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { Manga } from "../Manga";
import { searchManga } from "../utils/api";
import { MovieCard } from "./MovieCard";
import SearchBarCustom from "./SearchBarCustom";

const SearchPage = function (this: any) {
  const [mangas, setMangas] = useState<Manga[]>();

  const getSearchWord = (searchWord: String) => {
    return searchManga(searchWord).then((m) => {
      setMangas(m);
      return;
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
        columnWrapperStyle={{
          justifyContent: "space-evenly",
          paddingTop: 15,
        }}
        contentContainerStyle={{ paddingBottom: 15 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flatlist: { width: "100%" },
});

export default SearchPage;
