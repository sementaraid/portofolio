import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...classNames: ClassValue[]) => {
  return twMerge(clsx(classNames))
}

export { cn }