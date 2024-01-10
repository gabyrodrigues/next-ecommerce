import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function randomId(length: number): string {
  const randomPart = Math.random()
    .toString(36)
    .slice(2, length + 2);

  if (randomPart.length >= length) {
    return randomPart;
  }

  return randomPart + randomId(length - randomPart.length);
}
