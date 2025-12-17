import type { Metadata } from 'next';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, Rocket, Gem } from 'lucide-react';
import { CtaSection } from '@/components/sections/cta-section';

export const metadata: Metadata = {
  title: 'About Us | NovaNext',
  description: 'Learn about NovaNext, an end-to-end e-commerce solutions company helping brands launch, scale, and optimize their online business.',
};

export default function AboutPage() {
  const aboutHeroImage = PlaceHolderImages.find(p => p.id === 'about-hero');

  const values = [
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To be the most trusted and effective e-commerce growth partner for brands worldwide.',
    },
    {
      icon: Rocket,
      title: 'Our Mission',
      description: 'To empower businesses with the strategic, technical, and operational expertise needed to thrive in the digital marketplace.',
    },
    {
      icon: Gem,
      title: 'Our Values',
      description: 'Partnership, Integrity, Innovation, and a relentless focus on delivering results for our clients.',
    },
  ];

  return (
    <>
      <div className="bg-background">
        <section className="pt-16 md:pt-24">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-base font-semibold uppercase tracking-wider text-primary">
                About NovaNext
              </p>
              <h1 className="mt-2 font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                Your Partner in E-Commerce Excellence
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                NovaNext is an end-to-end e-commerce solutions company helping brands, sellers, and businesses launch, scale, and optimize online selling across global marketplaces and D2C platforms.
              </p>
            </div>
            <div className="mt-12">
              <div className="relative h-64 w-full overflow-hidden rounded-lg md:h-96">
                {aboutHeroImage && (
                  <Image
                    src={aboutHeroImage.imageUrl}
                    alt={aboutHeroImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={aboutHeroImage.imageHint}
                  />
                )}
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-12">
              <div>
                <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground">
                  A Fusion of Strategy, Technology, and Operations
                </h2>
                <p className="mt-4 text-muted-foreground">
                  At NovaNext, we understand that true e-commerce success requires a holistic approach. It's not just about listing products; it's about building a sustainable and profitable online business. Our team is comprised of seasoned experts from every corner of the e-commerce world.
                </p>
                <dl className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
                  {[
                    { name: 'Strategic Focus', description: 'We help you see the bigger picture, from market entry and expansion to long-term profitability and brand positioning.' },
                    { name: 'Technical Expertise', description: 'Our team masters the technical intricacies of various platforms, ensuring your store and listings are optimized for performance.' },
                    { name: 'Operational Excellence', description: 'We streamline your day-to-day operations, including inventory, logistics, and customer support, so you can focus on your product.' },
                    { name: 'Growth-Driven Mindset', description: 'Every action we take is geared towards one goal: driving measurable growth for your business through data-backed marketing and optimization.' },
                  ].map((feature) => (
                    <div key={feature.name} className="border-t border-border pt-4">
                      <dt className="font-medium text-foreground">{feature.name}</dt>
                      <dd className="mt-1 text-sm text-muted-foreground">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {values.map((value) => (
                    <Card key={value.title}>
                      <CardHeader className="flex flex-row items-center gap-4 pb-2">
                          <value.icon className="h-8 w-8 text-primary" />
                          <CardTitle className="font-headline text-xl">{value.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p className="text-muted-foreground">{value.description}</p>
                      </CardContent>
                    </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <CtaSection />
    </>
  );
}