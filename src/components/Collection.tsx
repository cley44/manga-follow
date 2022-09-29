import React, { useContext } from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import { CollectionContext } from "../collectionContext";
import { MovieCard } from "./MovieCard";

export const Collection = () => {
  const { collection, setCollection } = useContext(CollectionContext);

  console.log(collection);

  if (collection.length == 0) {
    return (
      <View style={styles.baseView}>
        <Text>Start adding manga to your collection</Text>
      </View>
    );
  }
  return (
    <FlatList
      numColumns={2}
      data={collection}
      renderItem={(item) => {
        if (item.item.inCollection) {
          return <MovieCard {...item.item}></MovieCard>;
        } else {
          return (
            <View style={styles.baseView}>
              <Text>Start adding manga to your collection now</Text>
            </View>
          );
        }
      }}
      //style={styles.flatlist}
      columnWrapperStyle={{
        justifyContent: "space-evenly",
        paddingTop: 15,
      }}
      contentContainerStyle={{
        paddingBottom: 15,
      }}
    />
  );
};

const styles = StyleSheet.create({
  baseView: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
