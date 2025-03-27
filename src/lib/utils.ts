import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function hsl(variable: string, opacity?: number) {
  return opacity !== undefined ? `hsl(var(--${variable}) / ${opacity})` : `hsl(var(--${variable}))`;
}
