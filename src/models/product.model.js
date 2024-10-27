class ProductModel {
  constructor(_id, _name, _year, _imdb, _genre, _imageUrl, _fullhd, _ultrahd) {
    this.id = _id;
    this.name = _name;
    this.year = _year;
    this.imdb = _imdb;
    this.genre = _genre;
    this.imageUrl = _imageUrl;
    this.fullhd = _fullhd;
    this.ultrahd = _ultrahd;
  }
  static get() {
    return products;
  }
}

const products = [
  new ProductModel(
    1,
    "John Wick 4",
    2023,
    "7.7/10",
    "Action, Crime, Thriller",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapersden.com%2Fnew-john-wick-4-poster-hd-wallpaper%2F&psig=AOvVaw1CNwOd9Wg3v6ut2IZp2xVw&ust=1730092054213000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKixwKXlrYkDFQAAAAAdAAAAABAJ",
    "https://drive.usercontent.google.com/download?id=12TJvmGHIWCdpPXeO7EocEaT6zBlRWV4z&export=download&authuser=4",
    "https://drive.usercontent.google.com/download?id=1FiMoDAFi4SXwPbMYI4Tv33YxlqQ8vpq5&export=download&authuser=4"
  ),
  new ProductModel(
    2,
    "Extraction",
    2020,
    "6.8/10",
    "Action, Thriller",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.uhdpaper.com%2F2023%2F02%2Fextraction-2-chris-hemsworth-4k-600i.html%3Fm%3D1&psig=AOvVaw1p9XScOcmHiuIcvFWZJDuN&ust=1730092680918000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPjKgM_nrYkDFQAAAAAdAAAAABAE",
    "https://drive.usercontent.google.com/download?id=1vnS_G8Zwyb1BecePMGewscYKAkF26XYS&export=download&authuser=2"
  ),
  new ProductModel(
    3,
    "Salaar: Part 1 - Ceasefire",
    2023,
    "6.6/10",
    "Action, Thriller",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fin.pinterest.com%2Fpin%2Fsalaar-the-ceasefire--546061523583368019%2F&psig=AOvVaw1v7JckwKYpTRPnsLubn78m&ust=1730092846593000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDAqJ7orYkDFQAAAAAdAAAAABAE",
    "https://drive.usercontent.google.com/download?id=1HlNLQj-F9ucFFseq3AF5_r68-O8N5OtJ&export=download&authuser=2",
    "https://drive.usercontent.google.com/download?id=10fyUqt0BYPnMadGlSmPa-peqUhR-T3aK&export=download&authuser=2"
  ),
];
export default ProductModel;
