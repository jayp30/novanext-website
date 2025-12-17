import type { Metadata } from 'next';
import { ContactForm } from '@/components/tools/contact-form';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Contact Us | NovaNext',
  description: 'Get in touch with the NovaNext team. We are here to help you with your e-commerce needs.',
};

export default function ContactPage() {
  const contactDetails = [
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@nova-next.io',
      href: 'mailto:contact@nova-next.io',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9672729258',
      href: 'tel:+919672729258',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9358447567',
      href: 'tel:+919358447567',
    },
    {
      icon: MapPin,
      title: 'Office',
      value: 'Jaipur, Rajasthan, India',
    },
  ];

  return (
    <>
      <div className="bg-background">
        <section className="pt-16 md:pt-24">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-base font-semibold uppercase tracking-wider text-primary">
                Contact Us
              </p>
              <h1 className="mt-2 font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                Get in Touch
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                We're here to help you navigate the world of e-commerce. Whether you have a question about our services or want to discuss your project, we'd love to hear from you.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-16 md:pb-24">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <h2 className="font-headline text-2xl font-bold">Send us a message</h2>
                <p className="mt-2 text-muted-foreground">Fill out the form and our team will get back to you within 24 hours.</p>
                <ContactForm />
              </div>
              <div className="space-y-8">
                 <h2 className="font-headline text-2xl font-bold">Contact Information</h2>
                 <p className="mt-2 text-muted-foreground">Find us at our office or reach out via phone or email.</p>
                {contactDetails.map((detail) => (
                  <Card key={detail.value}>
                    <CardContent className="flex items-center gap-6 p-6">
                      <detail.icon className="h-8 w-8 text-primary" />
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{detail.title}</h3>
                        {detail.href ? (
                            <a href={detail.href} className="text-muted-foreground hover:text-primary">{detail.value}</a>
                        ) : (
                            <p className="text-muted-foreground">{detail.value}</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
