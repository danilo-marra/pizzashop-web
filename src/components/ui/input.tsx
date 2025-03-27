import * as React from 'react';

import { cn } from '@/lib/utils';

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'flex h-9 w-full min-w-0 rounded-md border border-[hsl(var(--input))] bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none selection:bg-[hsl(var(--primary))] selection:text-[hsl(var(--primary-foreground))] file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-[hsl(var(--input))]/30',

        'focus-visible:border-[hsl(var(--ring))] focus-visible:ring-[3px] focus-visible:ring-[hsl(var(--ring))]/50',

        'aria-invalid:border-[hsl(var(--destructive))] aria-invalid:ring-[hsl(var(--destructive))]/20 dark:aria-invalid:ring-[hsl(var(--destructive))]/40',

        className
      )}
      {...props}
    />
  );
}

export { Input };
