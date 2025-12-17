import type { Metadata } from 'next';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { SERVICES } from '@/lib/constants';
import { CtaSection } from '@/components/sections/cta-section';

export const metadata: Metadata = {
  title: 'Our Services | NovaNext',
  description: 'Explore our comprehensive suite of e-commerce services, from store development and marketplace management to SEO, advertising, and strategic consulting.',
};

export default function ServicesPage() {
  return (
    <>
      <div className="bg-background">
        <section className="pt-16 md:pt-24">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-base font-semibold uppercase tracking-wider text-primary">
                Our Services
              </p>
              <h1 className="mt-2 font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                A Complete E-Commerce Toolkit
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                We offer a full spectrum of services designed to address every aspect of your online business. From foundational setup to advanced growth strategies, we have you covered.
              </p>
              <div className="mt-8">
                <p className="text-lg font-semibold text-primary">
                  Service Packages Range from ₹10,000 to ₹9,99,000 INR
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-16 md:pb-24">
          <div className="container mx-auto max-w-4xl px-4">
            <Accordion type="single" collapsible className="w-full" defaultValue={SERVICES[0].title}>
              {SERVICES.map((service) => (
                <AccordionItem key={service.title} value={service.title}>
                  <AccordionTrigger className="text-left font-headline text-lg hover:no-underline">
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <service.icon className="h-5 w-5" />
                      </div>
                      {service.title}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2">
                    <Card className="border-none shadow-none">
                      <CardHeader className="pb-4">
                        <CardTitle className="text-base font-medium text-muted-foreground">{service.description}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {service.details.map((detail) => (
                            <li key={detail} className="flex items-start">
                              <Check className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                              <span className="text-sm text-foreground">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </div>
      <CtaSection />
    </>
  );
}
