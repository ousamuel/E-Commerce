export type Sublink = {
  title: string;
  route: string;
};
export type SidebarLink = {
  title: string;
  sublinks: Sublink[];
  route: string;
};
export const SidebarLinks: SidebarLink[] = [
  { title: "Home", sublinks: [], route: "/" },
  { title: "login", sublinks: [], route: "/login" },
  { title: "Flower", sublinks: [], route: "/flower" },
  {
    title: "Thing1",
    sublinks: [
      { title: "General", route: "/" },
      { title: "sub1", route: "/" },
      { title: "sub2", route: "/" },
    ],
    route: "/",
  },
  {
    title: "Thing2",
    sublinks: [
      { title: "General", route: "/" },
      { title: "sub3", route: "/" },
      { title: "sub4", route: "/" },
    ],
    route: "/",
  },
];
export type ItemObject = {
  id: number;
  name: string;
  price: number;
  availability: boolean;
  rating: number;
};

export const ItemObjectsList: ItemObject[] = [
  {
    id: 2957192,
    name: "flower",
    price: 500.5,
    availability: true,
    rating: 4.4,
  },
  {
    id: 4195822,
    name: "flower2",
    price: 125.5,
    availability: false,
    rating: 3.8,
  },
  { id: 971623, name: "flower3", price: 12.5, availability: true, rating: 4.7 },
  {
    id: 85313218,
    name: "flower4",
    price: 82.5,
    availability: false,
    rating: 2.4,
  },
];

export type CommentObject = {
  name: string;
  comment: string;
  rating: number;
  date: Date;
};
export const CommentList: CommentObject[] = [
  {
    name: "customer1",
    comment: "i loved it it was amazing and i waouldnt tosd ntjsad more ",
    rating: 5,
    date: new Date(2022, 5, 12),
  },
  {
    name: "customer2",
    comment:
      "swee aasd asdit asodesa reay asdasdasd asd asd asd asd sd sd a sdasda sdasda adsdasd asd as das lreammy pheantne asphenlyoatukar is a gentiic dorisdoer for the engner with enmyaiti activity asomething new with worlds and effectiveness does not really qustiont",
    rating: 4,
    date: new Date(2023, 12, 31),
  },
  {
    name: "customer3",
    comment:
      "swee aasd asdit asod. but i dowuldy say that something time about words that have meaning. Something rot saysad wbausdm ipsuem lorem",
    rating: 4,
    date: new Date(2019, 2, 27),
  },
  {
    name: "customer4",
    comment:
    "swee aasd asdit asodesa reay asdasdasd asd asd asd asd sd sd a sdasda sdasda adsdasd asd as das lreammy pheantne asphenlyoatukar is a gentiic dorisdoer for the engner with enmyaiti activity asomething new with worlds and effectiveness does not really qustiont",
    rating: 4,
    date: new Date(2019, 2, 27),
  },
  {
    name: "customer5",
    comment:
      "swee aasd asdit asod. but i dowuldy say that something time about words that have meaning. Something rot saysad wbausdm ipsuem lorem",
    rating: 4,
    date: new Date(2019, 2, 27),
  },
  {
    name: "customer6",
    comment:
    "swee aasd asdit asodesa reay asdasdasd asasda sdasda adsdasd asd as das lreammy pheantne asphenlyoatukar is a gentiic dorisdoer for the engner with enmyaiti activity asomething newot really qustiont",
    rating: 4,
    date: new Date(2019, 2, 27),
  },
  {
    name: "customer7",
    comment:
      "swee aasd asdit asod. but i dowuldy say that something time about words that have meaning. Something rot saysad wbausdm ipsuem lorem",
    rating: 4,
    date: new Date(2019, 2, 27),
  },
  {
    name: "customer8",
    comment:
    "swee aasd asdit asodesa reay asdasdasd asd asd asd asd sd sd a sdasda sdasda adsdasd asd as das lreammy pheantne asphenlyoatukar is a gentiic dorisdoer for the engner with enmyaiti activity asomething new with worlds and effectiveness does not really qustiont",
    rating: 4,
    date: new Date(2019, 2, 27),
  },
  {
    name: "customer9",
    comment:
      "swee aasd asdit asod. but i dowuldy say that something time about words that have meaning. Something rot saysad wbausdm ipsuem lorem",
    rating: 4,
    date: new Date(2019, 2, 27),
  },
  {
    name: "customer10",
    comment:
    "swee aasd asdit asodesa reay asdasdasd asd asd asd asd sd sd a sdasda sdasda adsdasd asd as das lreammy pheantne asphenlyoatukar is a gentiic dorisdoer for the engner with enmyaiti activity asomething new with worlds and effectiveness does not really qustiont",
    rating: 4,
    date: new Date(2019, 2, 27),
  },
  {
    name: "customer11",
    comment:
      "swee aasd asdit asod. but i dowuldy say that something time about words that have meaning. Something rot saysad wbausdm ipsuem lorem",
    rating: 4,
    date: new Date(2019, 2, 27),
  },
  {
    name: "customer12",
    comment:
      "swee aasd asdit asod. but i dowuldy say that something time about words that have meaning. Something rot saysad wbausdm ipsuem lorem",
    rating: 4,
    date: new Date(2019, 2, 27),
  },
  {
    name: "customer13",
    comment:
    "swee aasd asdit asodesa reay asdasdasd asd asd asd asd sd sd a sdasda sdasda adsdasd asd as das lreammy pheantne asphenlyoatukar is a gentiic dorisdoer for the engner with enmyaiti activity asomething new with worlds and effectiveness does not really qustiont",
    rating: 4,
    date: new Date(2019, 2, 27),
  },
  {
    name: "customer14",
    comment:
      "swee aasd asdit asod. but i dowuldy say that something time about words that have meaning. Something rot saysad wbausdm ipsuem lorem",
    rating: 4,
    date: new Date(2019, 2, 27),
  },
];
