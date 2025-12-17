import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PROCESS_STEPS } from '@/lib/constants';

export function ProcessSteps() {
  return (
    <section id="process" className="bg-background">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Proven Path to Growth
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We follow a structured, three-phase approach to build a strong foundation and scale your e-commerce business effectively.
          </p>
        </div>
        <div className="relative mt-16">
          <div className="absolute left-1/2 top-10 hidden h-px w-2/3 -translate-x-1/2 bg-border lg:block" />
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {PROCESS_STEPS.map((step, index) => (
              <Card key={step.title} className="relative text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <span className="font-bold text-lg">{index + 1}</span>
                  </div>
                  <CardTitle className="font-headline text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}