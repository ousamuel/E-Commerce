"use client";
import { Image, Link } from "@nextui-org/react";
import { Router } from "express";
import { useRouter } from "next/navigation";
import { ItemObject, ItemObjectsList } from "../staticData";

export default function PageContent() {
  const SortOptions: String[] = [
    "Sort by popularity",
    "Sort A-Z",
    "Sort Z-A",
    "In Stock",
  ];
  const router = useRouter();
  return (
    <div className="page-content border-t">
      <div className="flex justify-between pb-3 text-gray-500">
        <p className="mt-auto">Showing __ of __ results</p>
        <select name="sort" className="rounded-md cursor-pointer border p-2">
          {SortOptions.map((option: String | any) => (
            <option key={option} value={option} className="">
              {option}
            </option>
          ))}
        </select>
      </div>
      <ul className="border-t pt-2 flex flex-wrap justify-between">
        {ItemObjectsList.map((item: ItemObject, index: number) => (
          <Link
            key={index}
            className="product-div my-2"
            href={`/product-details/${item.id + "-" + item.name}`}
            
          >
            <Image
              className="w-1/2 m-auto"
              alt="random"
              src="svgs/random.svg"
            />
            <h5 className="uppercase text-gray-500">{item.name}</h5>
            <div className="flex justify-evenly w-full">
              <p className="my-auto">${item.price.toFixed(2)}</p>
              <Image
                className="cursor-pointer"
                src="svgs/cart-add.svg"
                width={25}
                alt="add-to-cart"
              />
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
}
