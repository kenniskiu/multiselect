export default function DropdownOption({
  option,
  selected,
  toggleSelect,
  search,
}) {
  const highlightText = (text, searchTerm) => {
    if (!searchTerm) return text;
    const regex = new RegExp(`(${searchTerm})`, "gi");
    // Wrap matched parts in <span> to highlight them
    return text.replace(regex, (match) => `<span class="bg-blue-300">${match}</span>`);
  };

  return (
    <div
      className={`p-2 cursor-pointer hover:bg-blue-100 flex items-center ${selected.includes(option) ? "bg-blue-200" : ""}`}
      onClick={(e) => {
        e.stopPropagation();
        toggleSelect(option);
      }}
    >
      <p 
        dangerouslySetInnerHTML={{ __html: highlightText(option.label, search) }} 
      />
    </div>
  );
}
