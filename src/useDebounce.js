import  {useState, useEffect} from "react";

const useDebounce = (insertSearchValue, delay) => {
  const [debounceValue, setDebounceValue] = useState(insertSearchValue);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(debounceValue);
    }, delay);

    return () => {
      clearTimeout(handler)
    };
  }, [insertSearchValue, delay]);

  return debounceValue;
};

export default useDebounce;
