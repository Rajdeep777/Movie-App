class ProductModel {
  constructor(_id, _name, _year, _imdb, _genre, _imageUrl, _fullhd, _ultrahd, _fullhdbtn, _ultrahdbtn) {
    this.id = _id;
    this.name = _name;
    this.year = _year;
    this.imdb = _imdb;
    this.genre = _genre;
    this.imageUrl = _imageUrl;
    this.fullhd = _fullhd;
    this.ultrahd = _ultrahd;
    this.fullhdbtn = _fullhdbtn
    this.ultrahdbtn = _ultrahdbtn
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
    "https://image.tmdb.org/t/p/w185/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
    "https://drive.usercontent.google.com/download?id=12TJvmGHIWCdpPXeO7EocEaT6zBlRWV4z&export=download&authuser=4",
    "https://drive.usercontent.google.com/download?id=1FiMoDAFi4SXwPbMYI4Tv33YxlqQ8vpq5&export=download&authuser=4",
    '3.6 GB - FHD',
    '34 GB - UHD'
  ),
  new ProductModel(
    2,
    "Extraction 2",
    2023,
    "7/10",
    "Action, Thriller",
    "https://image.tmdb.org/t/p/w185/7gKI9hpEMcZUQpNgKrkDzJpbnNS.jpg",
    "https://drive.usercontent.google.com/download?id=1lRt9kKQJEoZqX36pEwmvWyV75JCdrEPy&export=download&authuser=2",
    'https://drive.usercontent.google.com/download?id=1pF59zVXW6bGEdjkKpX40r7H_vHhC9uKS&export=download&authuser=2',
    '5.6 GB - FHD',
    '18 GB - UHD'
  ),
  new ProductModel(
    3,
    "Salaar: Part 1 - Ceasefire",
    2023,
    "6.6/10",
    "Action, Thriller",
    "https://image.tmdb.org/t/p/w185/vzzeYSh6QYyN9CcY0EmdZJvXH4l.jpg",
    "https://drive.usercontent.google.com/download?id=1HlNLQj-F9ucFFseq3AF5_r68-O8N5OtJ&export=download&authuser=2",
    "https://drive.usercontent.google.com/download?id=10fyUqt0BYPnMadGlSmPa-peqUhR-T3aK&export=download&authuser=2",
    '4.9 GB - FHD',
    '17 GB - UHD'
  ),
];
export default ProductModel;
