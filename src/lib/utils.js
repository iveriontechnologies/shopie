import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...classNames) => {
  return twMerge(clsx(classNames));
};
