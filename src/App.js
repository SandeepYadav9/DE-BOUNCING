import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";
function App() {
  const [inputData, setInputData] = useState("");
  const useDebounceValue = useDebounce(inputData, 300);

  useEffect(() => {
    if (useDebounceValue) {
      console.log(useDebounceValue + "input Data");
    } else {
      console.log("Somthing else !!");
    }
  }, [useDebounceValue]);

  return (
    <div>
      <h1>Debouncing</h1>
      <input
        type="text"
        value={inputData}
        onChange={(e) => {
          setInputData(e.target.value);
        }}
      />
    </div>
  );
}

export default App;
