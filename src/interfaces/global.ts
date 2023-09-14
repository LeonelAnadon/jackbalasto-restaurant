export interface IBurger {
  id: number;
  img: string;
  title: string;
  desc: string;
  price: number;
  inOffer: null | number;
}
export interface ICommonErrorInFetch {
  error: string | undefined;
}
export interface IReviews {
  id: number;
  name: string;
  msg: string;
  stars: number;
}
export interface IAbout {
  title: string;
  subtitle: string;
  desc: string;
  imgs: string[];
}
