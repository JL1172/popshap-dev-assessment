import React, { useState } from "react";
import { NavigateFunction } from "react-router-dom";
import { FirebaseService } from "../services/firebase";

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
  initialValue: InitialType = initialState
): [
  InitialType,
  (name: string, value: string | boolean | number) => void,
  (
    e: React.MouseEvent<HTMLInputElement | HTMLFormElement, MouseEvent>,
    nav: NavigateFunction
  ) => Promise<void>,
  string
] => {
  // const [data, setData] = useLocalStorage(key, initialValue);
  const [data, setData] = useState<InitialType>(initialValue);
  const [error, setError] = useState("");
  const dbInstance = new FirebaseService();

  const changeHandler = (
    name: string,
    value: string | boolean | number
  ): void => {
    if (name === "score" && isNaN(Number(value))) {
      value = "";
    } else {
      setData((data: InitialType) => ({ ...data, [name]: value }));
    }
  };

  const handleErrors = (): void => {
    const errs: Record<string, string>[] = [];
    if (!data.fName || data.fName.trim().length === 0) {
      errs.push({ fNameErr: "First name required" });
    }
    if (!data.lName || data.lName.trim().length === 0) {
      errs.push({ lNameErr: "Last name required" });
    }
    if (!data.score) {
      errs.push({ scoreErr: "Score required" });
    }
    if (errs.length > 0) {
      throw errs;
    }
  };

  const submit = async (
    e: React.MouseEvent<HTMLInputElement | HTMLFormElement, MouseEvent>,
    nav: NavigateFunction
  ): Promise<void> => {
    e.preventDefault();
    changeHandler("isLoading", true);
    setError("");
    try {
      handleErrors();
      await dbInstance.addPlayer(data.fName, data.lName, Number(data.score));
      setData(initialValue);
      nav("/");
    } catch (err) {
      if (Array.isArray(err)) {
        err.forEach((n) =>
          setData((data: InitialType) => ({
            ...data,
            [Object.keys(n)[0]]: Object.values(n)[0],
          }))
        );
      } else {
        setError(
          "An unexpected problem occurred, if problem persists, contact admin"
        );
        setTimeout(() => {
          setError("");
        }, 2500);
      }
    } finally {
      changeHandler("isLoading", false);
    }
  };
  return [data, changeHandler, submit, error];
};
