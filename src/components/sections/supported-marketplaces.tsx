import { SUPPORTED_MARKETPLACES } from '@/lib/constants';
import { Badge } from '@/components/ui/badge';

export function SupportedMarketplaces() {
  return (
    <section id="marketplaces" className="bg-transparent">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            We Scale Brands Across All Major Platforms
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our expertise spans global marketplaces and direct-to-consumer channels, ensuring your brand reaches customers wherever they shop.
          </p>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 md:gap-8">
          {SUPPORTED_MARKETPLACES.map((marketplace) => (
            <Badge key={marketplace} variant="outline" className="px-4 py-2 text-base font-medium text-muted-foreground border-white/20 bg-white/5">
              {marketplace}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
