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
