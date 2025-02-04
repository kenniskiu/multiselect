import React from "react";
import { CircleX } from "lucide-react";

export default function SelectedItem({ item, toggleSelect }) {
  return (
    <span
      key={item?.key}
      className="text-gray-600 bg-gray-100 border border-gray-300 focus:outline-none hover:bg-gray-100 font-medium rounded-full text-sm px-5 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 flex flex-column py-1"
    >
      {item.label}
      <CircleX
        size={15}
        className="ml-1 cursor-pointer my-auto"
        onClick={(e) => {
          e.stopPropagation();
          toggleSelect(item);
        }}
      />
    </span>
  );
}
