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
        <p className="mt-auto">results</p>
        <select name="sort" className="rounded-md cursor-pointer border p-2">
          {SortOptions.map((option: String | any) => (
            <option key={option} value={option} className="">
              {option}
            </option>
          ))}
        </select>
      </div>
      <ul className="border-t pt-5 flex flex-wrap">
        {ItemObjectsList.map((item: ItemObject, index: number) => (
          <div key={index} className='w-[33%]'>
            <Image alt='random' src='svgs/random.svg' width={50}/>
            <h4>{item.name}</h4></div>
        ))}
        <li>item</li>
      </ul>
    </div>
  );
}
