import React from "react";
import { Manga } from "./Manga";

export const CollectionContext = React.createContext<any>({
  collection: [],
});
