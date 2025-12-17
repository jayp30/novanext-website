import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import { WHY_NOVANEXT_POINTS } from '@/lib/constants';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function WhyNovanext() {
  const whyUsImage = PlaceHolderImages.find(p => p.id === 'why-us-image');

  return (
    <section id="why-us" className="bg-background">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              The Partner You Need for E-Commerce Success
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We're more than a service provider; we're your strategic partner dedicated to navigating the complexities of online retail and driving sustainable growth.
            </p>
            <ul className="mt-8 space-y-4">
              {WHY_NOVANEXT_POINTS.map((point) => (
                <li key={point} className="flex items-start">
                  <CheckCircle2 className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-80 w-full lg:h-auto">
            {whyUsImage && (
              <Image
                src={whyUsImage.imageUrl}
                alt={whyUsImage.description}
                fill
                className="rounded-lg object-cover shadow-lg"
                data-ai-hint={whyUsImage.imageHint}