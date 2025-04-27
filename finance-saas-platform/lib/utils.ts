import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {  // useful function for tailwind merge and if we want dynamic Tailwind classes w/o conflicting the styles
  return twMerge(clsx(inputs))
}
