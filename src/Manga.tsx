export class Manga {
  id: any;
  title: any;
  image: any;
  synopsis: any;
  //rating: any;
  inCollection: boolean;
  inFavorite: boolean;
  inPAL: boolean;
  toBuy: boolean;
  chapterCount: number;
  volumeCount: number;

  constructor(
    id: any,
    title: any,
    image: any,
    chapterCount: number,
    volumeCount: number,
    synopsis?: any
    //rating?: any
  ) {
    this.id = id;
    this.title = title;
    this.image = image;
    this.synopsis = synopsis;
    //this.rating = rating;
    this.chapterCount = chapterCount;
    this.volumeCount = volumeCount;
    this.inCollection = false;
    this.inFavorite = false;
    this.inPAL = false;
    this.toBuy = false;
  }
}
