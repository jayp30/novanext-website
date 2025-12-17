
import type { Metadata } from 'next';
import { ProductOptimizerForm } from '@/components/tools/product-optimizer-form';

export const metadata: Metadata = {
  title: 'Product Listing Optimizer | NovaNext',
  description: 'Use our AI-powered tool to generate SEO-optimized product titles, descriptions, and backend keywords for marketplaces like Amazon and Flipkart.',
};

export default function ProductListingOptimizerPage() {
  return (
    <div className="bg-background">
      <section className="pt-16 md:pt-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-base font-semibold uppercase tracking-wider text-primary">
              AI Tool
            </p>
            <h1 className="mt-2 font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Product Listing Optimizer
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Fill in your product details below and let our AI generate SEO-optimized content to boost your visibility and sales on your target marketplace.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container mx-auto max-w-4xl px-4">
            <ProductOptimizerForm />
        </div>
      </section>
    </div>
  );
}
