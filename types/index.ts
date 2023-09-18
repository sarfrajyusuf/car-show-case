import { MouseEventHandler } from "react";

export interface ICostomButtonProps {
  title: string;
  containerStyle?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "submit" | "button";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface ISearchManufacturer {
  manufacturer: string;
  setManuFacturer: (manufacturer: string) => void;
}

export interface Icars {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}
