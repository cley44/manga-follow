import { Manga } from "./../Manga";
const baseUrl = "https://kitsu.io/api/edge";
//documentation https://kitsu.docs.apiary.io/

export const getTrendingManga = () => {
  return fetch(baseUrl + "/trending/manga")
    .then((response) => response.json())
    .then((json) => {
      return json.data.map((element: any) => {
        const id = element.id;
        const title = element.attributes.canonicalTitle;
        const image = element.attributes.coverImage?.small;
        const synopsis = element.attributes.description;

        return new Manga(id, title, image, synopsis);
      });
    })
    .catch((error) => {
      console.error(error);
    });
};

export const searchManga = (searchWord: String) => {
  return fetch(baseUrl + "/manga?filter[text]=" + searchWord)
    .then((response) => response.json())
    .then((json) => {
      return json.data.map((element: any) => {
        const id = element.id;
        const title = element.attributes.canonicalTitle;
        const image = element.attributes.posterImage?.large;
        const synopsis = element.attributes.description;

        return new Manga(id, title, image, synopsis);
      });
    });
};
