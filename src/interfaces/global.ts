export interface IBurger {
  id: number;
  img: string;
  title: string;
  desc: string;
  price: number;
  inOffer: null | number;
  type: string;
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

export interface IChefs {
  id: number;
  name: string;
  img: string;
  job: string;
}

export interface IFormData {
  name: string;
  date: string;
  hour: string;
  people: string;
  table: number;
}