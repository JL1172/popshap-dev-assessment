import React, { useState } from "react";

export type InitialType = {
  fName: string;
  lName: string;
  isLoading: boolean;
  isSubmitted: boolean;
};

export const initialState = {
  fName: "",
  lName: "",
  isLoading: false,
  isSubmitted: false,
};

export const useForm = (
  key: string,
  initialValue: InitialType = initialState
): [
  InitialType,
  (name: string, value: string | boolean) => void,
  (e: React.MouseEvent<HTMLFormElement, MouseEvent>) => void
] => {
  const [data, setData] = useState<InitialType>(initialValue);

  const change = (name: string, value: string | boolean): void => {
    setData((data) => ({ ...data, [name]: value }));
  };

  const submit = (e: React.MouseEvent<HTMLFormElement, MouseEvent>): void => {
    e.preventDefault();
    console.log("submitted");
  };
  return [data, change, submit];
};
