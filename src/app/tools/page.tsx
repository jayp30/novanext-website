import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TOOLS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'E-Commerce Tools | NovaNext',
  description: 'Leverage our suite of AI-powered and analytical tools to streamline your operations, optimize your listings, and gain a competitive edge.',
};

export default function ToolsPage() {
  return (
    <div className="bg-background">
      <section className="pt-16 md:pt-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-base font-semibold uppercase tracking-wider text-primary">
              Our Tools
            </p>
            <h1 className="mt-2 font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Power Your Growth with Intelligent Tools
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Streamline your e-commerce operations with our suite of powerful tools, designed to give you a data-driven advantage and save you time.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {TOOLS.map((tool) => (
              <Link key={tool.href} href={tool.href} className="group">
                <Card className="h-full transition-all group-hover:shadow-lg group-hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <tool.icon className="h-6 w-6" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h3 className="font-headline text-lg font-semibold">{tool.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{tool.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
