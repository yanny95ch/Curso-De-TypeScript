export type  sizes= 'S' | 'M' | 'L' | 'XL' | 'XXL';
export type Product = {
  title:  string,
  createAd: Date,
  stock: number,
  size?: sizes
};
