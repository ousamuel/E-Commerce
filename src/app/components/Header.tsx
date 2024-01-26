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
          h-[30vw] flex flex-col items-center justify-center justify-around"
    >
      <div className="max-w-content text-6xl flex-col flex align-middle items-center">
        Logo <Image src="svgs/logo.svg" width="50px" alt="logo" />
      </div>
      <ul
        id="header-links"
        className="flex-2 w-full flex justify-around items-right"
      >
        {HeaderLinksList.map((link: HeaderLink) =>
          link.sublinks.length > 0 ? (
            // Render Tooltip if the title matches a certain condition
            <Tooltip
              content={
                <ul>
                  {link.sublinks.map((sublink: string) => (
                    <li>{sublink}</li>
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
