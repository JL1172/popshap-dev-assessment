import React from "react";
import { useLocalStorage } from "./useLocalStorage";
import { NavigateFunction } from "react-router-dom";

export type InitialType = {
  fName: string;
  lName: string;
  isLoading: boolean;
  isSubmitted: boolean;
  score: number | string;
  fNameErr: string;
  lNameErr: string;
  scoreErr: string;
};

export const initialState = {
  fName: "",
  lName: "",
  isLoading: false,
  isSubmitted: false,
  score: "",
  fNameErr: "",
  lNameErr: "",
  scoreErr: "",
};

export const useForm = (
  key: string,
  initialValue: InitialType = initialState
): [
  InitialType,
  (name: string, value: string | boolean | number) => void,
  (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>,
    nav: NavigateFunction
  ) => Promise<void>
] => {
  const [data, setData] = useLocalStorage(key, initialValue);

  const changeHandler = (
    name: string,
    value: string | boolean | number
  ): void => {
    if (name === "score" && isNaN(Number(value))) {
      value = "";
    } else {
      setData({ ...data, [name]: value });
    }
  };

  const submit = async (
    //! need to finish this functionality
    e: React.MouseEvent<HTMLInputElement, MouseEvent>,
    nav: NavigateFunction
  ): Promise<void> => {
    e.preventDefault();
    changeHandler("isLoading", true);
    try {
      const errs: string[] = [];

      if (!data.fName || data.fName.trim().length === 0) {
        errs.push("First name required");
      }
      if (!data.lName || data.lName.trim().length === 0) {
        errs.push("Last name required");
      }
      if (!data.score) {
        errs.push("Score reqiured");
      }
      if (errs.length > 0) {
        throw errs;
      }
      setData(initialValue);
      nav("/");
    } catch (err) {
      console.log(err);
    } finally {
      changeHandler("isLoading", false);
    }
  };
  return [data, changeHandler, submit];
};
