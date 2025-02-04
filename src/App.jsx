import { useState } from "react";
import "./App.css";
import MultiSelectDropdown from "./components/MultiSelectDropdown/MultiSelectDropdown";

function App() {
  const [config, setConfig] = useState({
    isMultiple: false,
    isWithSearch: true,
  });
  
  return (
    <>
      <MultiSelectDropdown config={config}/>
    </>
  );
}

export default App;
