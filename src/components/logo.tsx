import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("text-2xl font-bold font-headline text-primary", className)}>
      NovaNext
    </span>
  );
}