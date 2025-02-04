import React from "react";
import SearchInput from "./SearchInput";
import DropdownOption from "./DropdownOption";

export default function Dropdown({
  isOpen,
  filteredOptions,
  search,
  setSearch,
  selected,
  toggleSelect,
  dropdownRef,
  searchRef,
  config
}) {
  return (
    isOpen && (
      <div ref={dropdownRef} className="absolute mt-3 w-full bg-white border rounded-sm shadow-lg z-100 border-gray-500">
        {config['isWithSearch'] ? <SearchInput search={search} setSearch={setSearch} searchRef={searchRef}/> : ""}
        <div className="max-h-40 overflow-auto">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <DropdownOption
                key={option}
                option={option}
                selected={selected}
                toggleSelect={toggleSelect}
                search={search}
              />
            ))
          ) : (
            <div className="p-2 text-gray-500">No results found</div>
          )}
        </div>
      </div>
    )
  );
}
