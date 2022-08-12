import React, { useState } from "react";
import { SearchBar } from "@rneui/themed";
import { View, StyleSheet } from "react-native";

type SearchBarComponentProps = {};

const SwitchComponent = ({ getSearchWord }: any) => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

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
          setLoading(true);
          getSearchWord(search).then(() => setLoading(false));
        }}
        showLoading={loading}
        containerStyle={styles.containerSearchBar}
        inputContainerStyle={styles.InputSearchBar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    margin: 10,
  },
  InputSearchBar: { borderRadius: 40 },
  containerSearchBar: {
    padding: 0,
    backgroundColor: "0",
    borderBottomWidth: 0,
    borderTopWidth: 0,
  },
});

export default SwitchComponent;
