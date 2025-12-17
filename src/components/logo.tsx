import Link from 'next/link';
import { cn } from '@/lib/utils';
import { BotMessageSquare } from 'lucide-react';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <BotMessageSquare className="h-8 w-8 text-primary" />
      <span className={cn("text-2xl font-bold font-headline text-primary")}>
        NovaNext
      </span>
    </div>
  );
}
