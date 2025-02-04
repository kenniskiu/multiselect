export default function DropdownOption({
    option,
    selected,
    toggleSelect,
    search,
  }) {
    const getHighlightedText = (text, highlight) => {
      if (!highlight) return text;
      const parts = text.split(new RegExp(`(${highlight})`, "gi"));
      return parts.map((part, index) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <span key={index} className="bg-blue-300">{part}</span>
        ) : (
          part
        )
      );
    };
  
    return (
      <div
        className={`p-2 cursor-pointer hover:bg-blue-100 flex items-center ${selected.includes(option) ? "bg-blue-200" : ""}`}
        onClick={(e) => {
          e.stopPropagation();
          toggleSelect(option);
        }}
      >
        {getHighlightedText(option, search)}
      </div>
    );
  }
  