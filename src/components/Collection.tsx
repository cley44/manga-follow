import React, { useContext } from "react";
import { FlatList } from "react-native";
import { CollectionContext } from "../collectionContext";
import { MovieCard } from "./MovieCard";

export const Collection = () => {
  const { collection, setCollection } = useContext(CollectionContext);

  return (
    <FlatList
      numColumns={2}
      data={collection}
      renderItem={(item) => {
        return <MovieCard {...item.item}></MovieCard>;
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
