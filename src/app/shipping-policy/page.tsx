import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shipping Policy | NovaNext',
  description: 'Read the shipping policy for NovaNext.io.',
};

export default function ShippingPolicyPage() {
  return (
    <div className="bg-background">
      <section className="pt-16 md:pt-24">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert mx-auto max-w-none text-muted-foreground prose-h1:text-foreground prose-h1:font-headline prose-h2:text-foreground prose-h2:font-headline prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-foreground">
            <h1 className="mt-2 text-center font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Shipping Policy</h1>
            <p className="text-center text-lg">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

            <h2>Digital Services</h2>
            <p>NovaNext.io primarily provides digital services and consulting. As such, traditional shipping policies do not apply to the majority of our offerings.</p>
            <p>All services, reports, and deliverables will be provided electronically via email, project management tools, or other digital means as agreed upon with the client.</p>

            <h2>Physical Goods</h2>
            <p>In the rare event that we provide physical goods, the shipping terms will be explicitly outlined in the corresponding service agreement or invoice. This may include, but is not limited to, promotional materials or hardware related to a project.</p>
            <p>Shipping costs, carriers, and estimated delivery times for any physical items will be communicated and agreed upon before shipment.</p>
            
            <h2>Contact Us</h2>
            <p>If you have any questions about our Shipping Policy, please contact us:</p>
            <ul>
              <li>By email: contact@nova-next.io</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
