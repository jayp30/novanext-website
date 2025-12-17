import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { TESTIMONIALS } from '@/lib/constants';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function TrustSection() {
  return (
    <section id="testimonials" className="bg-secondary/50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Trusted by Growing Brands
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Hear what our clients have to say about partnering with NovaNext.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => {
            const authorImage = PlaceHolderImages.find(p => p.id === `testimonial-author-${index + 1}`);
            return (
              <Card key={testimonial.name} className="flex flex-col">
                <CardContent className="flex-grow p-6">
                  <blockquote className="text-muted-foreground">
                    <p>“{testimonial.quote}”</p>
                  </blockquote>
                </CardContent>
                <div className="border-t bg-card p-6">
                  <div className="flex items-center">
                    {authorImage && (
                      <Image
                        className="h-12 w-12 rounded-full object-cover"
                        src={authorImage.imageUrl}
                        alt={authorImage.description}
                        width={48}
                        height={48}
                        data-ai-hint={authorImage.imageHint}
                      />
                    )}
                    <div className="ml-4">
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}