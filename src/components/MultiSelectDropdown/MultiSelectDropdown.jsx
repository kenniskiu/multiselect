import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
import useOutsideClick from "../../utils/useOutsideClick";
import Dropdown from "./Dropdown";
import SelectedItem from "./SelectedItem";

const options = [
  {
    key:"1",
    label: 'Option 1'
  },
  {
    key:"2",
    label: 'Option 2'
  },
  {
    key:"3",
    label: 'Option 3'
  },
  {
    key:"4",
    label: 'Option 5'
  },
  {
    key:"6",
    label: 'Option 6'
  },
  {
    key:"7",
    label: 'Option 7'
  },
];

export default function MultiSelectDropdown({ isMultiple = false, isWithSearch = true, optionLabels = options, isOutlined = true}) {
  const [selected, setSelected] = useState([]);
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(null);
  const selectRef = useRef(null);
  const searchRef = useRef(null);

  useOutsideClick([selectRef, dropdownRef, searchRef], () => setIsOpen(false));

  const toggleSelect = (option) => {
    console.log(option)
    if (isMultiple) {
      setSelected((prev) =>
        prev.includes(option)
          ? prev.filter((item) => item.key != option.key)
          : [...prev, option]
      );
    } else {
      setSelected((prev) => (prev[0] == option ? [] : [option]));
    }
  };

  const filteredOptions = optionLabels?.filter((option) =>
    option.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative w-screen max-w-xl">
      <div
        ref={selectRef}
        className={`border border-gray-500 rounded-sm p-2 flex items-center justify-between cursor-pointer ${isOutlined ? 'bg-gray-200' : 'bg-white'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex flex-wrap gap-1">
          {selected.length > 0 ? (
            selected.map((option) => (
              <SelectedItem key={option.key} item={option} toggleSelect={toggleSelect} />
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
        isWithSearch={isWithSearch}
      />
    </div>
  );
}
