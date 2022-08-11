export class Manga {
  id: any;
  title: any;
  image: any;
  synopsis: any;
  rating: any;
  constructor(id: any, title: any, image: any, synopsis?: any, rating?: any) {
    this.id = id;
    this.title = title;
    this.image = image;
    this.synopsis = synopsis;
    this.rating = rating;
  }
}
