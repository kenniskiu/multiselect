import React from "react";
import { CircleX, Search } from "lucide-react";

export default function SearchInput({ search, setSearch, searchRef }) {
  return (
    <div className="flex items-center border-b">
      <Search className="text-gray-500 mr-2 ml-2" />
      <input
        ref={searchRef}
        type="text"
        className="w-full p-2 focus:outline-none"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {search?.length > 0 ? <CircleX className="text-gray-500 me-3 hover cursor-pointer" onClick={() => setSearch('')}/> : ""}

    </div>
  );
}