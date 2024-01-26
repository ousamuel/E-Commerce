import React from "react";
import {Image} from "@nextui-org/react";

export default function Header() {

    type HeaderLink = {
      title: String;
    };
    // const HeaderLinksList: HeaderLink[] = [
    //   {title: }
    // ];
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
          <li>one</li>
          <li>two</li>
          <li>three</li>
          <li>four</li>
          <li>five</li>
        </ul>
      </div>
    );
  }
  