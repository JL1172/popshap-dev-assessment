import { useState } from "react";
import { InitialType } from "./useForm";

export const useLocalStorage = (
  key: string,
  initialState: InitialType
): [InitialType, (value: InitialType) => void] => {
  const [data, setData] = useState(() => {
    if (window.localStorage.getItem(key)) {
      const res = window.localStorage.getItem(key) || "";
      return res === "undefined" ? initialState : JSON.parse(res);
    }
    window.localStorage.setItem(key, JSON.stringify(initialState));
    return initialState;
  });
  const change = (value: InitialType): void => {
    setData(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [data, change];
};
