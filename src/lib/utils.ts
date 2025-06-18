import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function placeHolderURL({ ...Props }: { w: string; h: string }): string {
  return `https://placehold.co/${Props.w}x${Props.h}.png`;
}
