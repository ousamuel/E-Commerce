import React from "react";
import { Image, Tooltip, Link } from "@nextui-org/react";
import { SidebarLinks, Sublink, SidebarLink } from "../staticData";
export default function Header() {
  return (
    <div
      className="max-h-[330px] min-h-[150px] border
          h-[30vw] flex flex-col items-center justify-center header"
    >
      <div className="max-w-content text-6xl flex-col flex align-middle items-center grow justify-center">
        {/* Logo */}
        <Image
          src="imgs/logo.png"
          className="w-[35vw] min-w-[240px] max-w-[500px] "
          alt="logo"
        />
      </div>
      <ul
        id="header-all-links"
        className="flex-2 w-full flex justify-around items-right"
      >
        {SidebarLinks.map((link: SidebarLink, index) =>
          link.sublinks.length > 0 ? (
            <Tooltip
              key={index}
              content={
                <ul className="flex flex-col border p-3 bg-black text-white static">
                  {link.sublinks.map((sublink: Sublink) => (
                    <Link href={sublink.route} key={sublink.title}>
                      {sublink.title}
                    </Link>
                  ))}
                </ul>
              }
              placement="bottom"
            >
              <Link href={link.route} className="header-link">
                {link.title}
              </Link>
            </Tooltip>
          ) : (
            <Link key={index} href={link.route} className="header-link">
              {link.title}
            </Link>
          )
        )}
      </ul>
    </div>
  );
}
