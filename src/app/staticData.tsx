export type Sublink = {
    title: string;
    route: string;
  };
export type SidebarLink = {
    title: string;
    sublinks: Sublink[];
    route: string;
  };
export const SidebarLinks: SidebarLink[] =[
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