import React, { useState } from "react";
import { SearchBar } from "@rneui/themed";
import { View, StyleSheet } from "react-native";

type SearchBarComponentProps = {};

const SwitchComponent = ({ getSearchWord }: any) => {
  const [search, setSearch] = useState("");

  const updateSearch = (search: React.SetStateAction<string>) => {
    setSearch(search);
  };

  return (
    <View style={styles.view}>
      <SearchBar
        placeholder="Search Manga or Anime"
        onChangeText={updateSearch}
        value={search}
        onSubmitEditing={() => {
          getSearchWord(search);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    margin: 10,
  },
});

export default SwitchComponent;
