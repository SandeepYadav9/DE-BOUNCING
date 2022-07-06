import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";

function App() {
  const [inputData, setInputData] = useState("");
  const [data, setData] = useState([]);
  const dataDebounc = useDebounce(inputData, 3000);
  useEffect(() => {
    if (dataDebounc) {
      fetchUserData(dataDebounc);
    } else {
      console.log("Somthing Went Worng");
    }
  }, [dataDebounc]);

  const fetchUserData = async (value) => {
    const fetchData = await fetch(`https://fakestoreapi.com/products${value}`);
    const data = await fetchData.json();
    console.log(data);
    setData(data);
  };
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

      {data ? (
        <div>
          {data.map((list) => {
            return (
              <div key={list.id}>
                <h1>{list.title}</h1>
              </div>
            );
          })}
        </div>
      ) : (
        <h1>No Data Found </h1>
      )}
    </div>
  );
}

export default App;
