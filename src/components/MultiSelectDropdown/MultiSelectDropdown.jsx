import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import useOutsideClick from "../../utils/useOutsideClick";
import Dropdown from "./Dropdown";
import SelectedItem from "./SelectedItem";

const options = [
  "Option 1",
  "Option with Icon",
  "Long Long Option 3",
  "Long Long Long Option 4",
  "Long Long Long Option Long 5",
  "Long Long Long Option Long Long 6",
];

export default function MultiSelectDropdown({config}) {
  const [selected, setSelected] = useState([]);
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(null);
  const selectRef = useRef(null);
  const searchRef = useRef(null);

  useOutsideClick([selectRef, dropdownRef, searchRef], () => setIsOpen(false));

  const toggleSelect = (option) => {
    if (config['isMultiple']) {
      setSelected((prev) =>
        prev.includes(option)
          ? prev.filter((item) => item !== option)
          : [...prev, option]
      );
    } else {
      setSelected((prev) =>
        prev[0] === option ? [] : [option]
      );
    }
  };

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative w-100">
      <div
        ref={selectRef}
        className="border border-gray-500 rounded-sm p-2 flex items-center justify-between cursor-pointer bg-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex flex-wrap gap-1">
          {selected.length > 0 ? (
            selected.map((item) => (
              <SelectedItem
                key={item}
                item={item}
                toggleSelect={toggleSelect}
              />
            ))
          ) : (
            <span className="text-gray-400"></span>
          )}
        </div>
        <ChevronDown size={18} />
      </div>

      <Dropdown
        isOpen={isOpen}
        filteredOptions={filteredOptions}
        search={search}
        setSearch={setSearch}
        selected={selected}
        toggleSelect={toggleSelect}
        dropdownRef={dropdownRef}
        searchRef={searchRef}
        config={config}
      />
    </div>
  );
}
