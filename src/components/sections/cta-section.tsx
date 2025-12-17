import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function CtaSection() {
  return (
    <section className="bg-transparent">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="relative overflow-hidden rounded-xl bg-primary/90 px-6 py-20 text-center shadow-2xl glass-card">
           <div
             className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-secondary to-transparent opacity-50"
             aria-hidden="true"
           />
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Ready to Grow Your E-Commerce Business?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Let's discuss your goals. Schedule a free, no-obligation consultation with our e-commerce experts today.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">
                Schedule Your Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
