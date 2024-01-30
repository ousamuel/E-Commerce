"use client";
import { Image } from "@nextui-org/react";

type ItemObject = {
  name: string;
  price: number;
  availability: boolean;
};

const ItemObjectsList: ItemObject[] = [
  { name: "flower", price: 500.5, availability: true },
  { name: "flower2", price: 125.5, availability: false },
  { name: "flower3", price: 12.5, availability: true },
  { name: "flower4", price: 82.5, availability: false },
];
export default function PageContent() {
  const SortOptions: String[] = [
    "Sort by popularity",
    "Sort A-Z",
    "Sort Z-A",
    "In Stock",
  ];
  return (
    <div className="page-content">
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
      <ul className="border-t pt-5 flex flex-wrap justify-between">
        {ItemObjectsList.map((item: ItemObject, index: number) => (
          <div
            key={index}
            className="w-[10vw] min-w-[150px] max-w-[250px] 
                    flex flex-col my-2 items-center text-center"
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
                alt="add-to-cary"
              />
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}
