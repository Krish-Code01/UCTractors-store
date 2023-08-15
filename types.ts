export interface Banner {
  id: string;
  label: string;
  imageUrl: string;
}

export interface Company {
  id: string;
  name: string;
  banner: Banner;
}

export interface Product {
  [x: string]: any;
  id: string;
  company: Company;
  name: string;
  tyre: string;
  condition: string;
  model: string;
  price: string;
  isFeatured: boolean;
  images: Image[];
}

export interface Image {
  id: string;
  url: string;
}
