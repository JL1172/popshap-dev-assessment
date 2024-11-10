import { createContext } from "react";
import { InitialType } from "../hooks/useForm";
import { NavigateFunction } from "react-router-dom";

export type AddScoreCtxType = {
  data: InitialType;
  changeHandler: (name: string, value: string | boolean | number) => void;
  submit: (
    e: React.MouseEvent<HTMLInputElement | HTMLFormElement, MouseEvent>,
    nav: NavigateFunction
  ) => void;
};

export const AddScoreCtx = createContext<AddScoreCtxType | undefined>(
  undefined
);
