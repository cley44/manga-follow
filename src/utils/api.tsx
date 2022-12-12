import { Manga } from "./../Manga";
const baseUrl = "https://kitsu.io/api/edge";
//documentation https://kitsu.docs.apiary.io/

export const getTrendingManga = () => {
  return fetch(baseUrl + "/trending/manga")
    .then((response) => response.json())
    .then((json) => {
      return json.data.map((element: any, index: any) => {
        const id = element.id;
        const title = element.attributes.canonicalTitle;
        const image = element.attributes.coverImage?.small;
        const synopsis = element.attributes.description;
        const chapterCount = element.attributes.chapterCount;
        const volumeCount = element.attributes.volumeCount;

        // if (index == 1) {
        //   console.log(element);
        // }

        return new Manga(id, title, image, chapterCount, volumeCount, synopsis);
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
        const chapterCount = element.attributes.chapterCount;
        const volumeCount = element.attributes.volumeCount;

        return new Manga(id, title, image, chapterCount, volumeCount, synopsis);
      });
    });
};

const baseGoogleUrl = "https://www.googleapis.com/books/v1/volumes?q=";

export const getInfoFromIsbn = (isbn: number) => {
  return fetch(baseGoogleUrl + "+isbn:" + isbn)
    .then((response) => response.json())
    .then((data) => {
      return data.items[0].volumeInfo.title;
    });
};
