import React from "react";
import { Image, Tooltip } from "@nextui-org/react";

export default function Header() {
  type HeaderLink = {
    title: String;
    sublinks: string[];
  };
  const HeaderLinksList: HeaderLink[] = [
    { title: "Home", sublinks: [] },
    { title: "Flower", sublinks: [] },
    { title: "Thing1", sublinks: ["sub1", "sub2"] },
    { title: "Thing2", sublinks: ["sub2.1", "sub2.2"] },
  ];
  return (
    <div
      className="max-h-[330px] min-h-[150px] border
          h-[30vw] flex flex-col items-center justify-center header pb-5 pt-10"
    >
      <div className="max-w-content text-6xl flex-col flex align-middle items-center">
        Logo
        {/* <Image src="svgs/logo.svg" width="50px" alt="logo" /> */}
      </div>
      <ul
        id="header-links"
        className="flex-2 w-full flex justify-around items-right"
      >
        {HeaderLinksList.map((link: HeaderLink, index) =>
          link.sublinks.length > 0 ? (
            <Tooltip
              content={
                <ul key={index}>
                  {link.sublinks.map((sublink: string) => (
                    <li key={sublink}>{sublink}</li>
                  ))}
                </ul>
              }
              placement="bottom"
            >
              <li>{link.title}</li>
            </Tooltip>
          ) : (
            <li>{link.title}</li>
          )
        )}
      </ul>
    </div>
  );
}
