import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refund & Cancellation Policy | NovaNext',
  description: 'Read the refund and cancellation policy for NovaNext.io.',
};

export default function RefundPolicyPage() {
  return (
    <div className="bg-background">
      <section className="pt-16 md:pt-24">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert mx-auto max-w-none text-muted-foreground prose-h1:text-foreground prose-h1:font-headline prose-h2:text-foreground prose-h2:font-headline prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-foreground">
            <h1 className="mt-2 text-center font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Refund & Cancellation Policy</h1>
            <p className="text-center text-lg">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

            <h2>Overview</h2>
            <p>Our policy for refunds and cancellations is designed to be transparent and fair. As a service-based business, our refund policy is tailored to the nature of our work.</p>

            <h2>Service Fees</h2>
            <p>All fees for services rendered are non-refundable once the service has commenced. This includes consultation, strategy, development, and management services.</p>
            <p>A portion of the fee may be refundable if a cancellation request is made before any work has begun, subject to a processing fee. Refunds will be credited within 5 to 10 days in original mode of payment.</p>

            <h2>Cancellations</h2>
            <p>You may cancel your service agreement at any time by providing written notice. Depending on the terms of your specific contract, a notice period may be required.</p>
            <p>Upon cancellation, you will be responsible for payment for all work performed up to the cancellation date.</p>

            <h2>AI Tool Subscriptions</h2>
            <p>For any subscription-based AI tools, you can cancel your subscription at any time. Your access will continue until the end of the current billing period, and you will not be charged for the next period.</p>
            <p>We do not offer refunds for partial subscription periods.</p>

            <h2>Contact Us</h2>
            <p>If you have any questions about our Refund and Cancellation Policy, please contact us:</p>
            <ul>
              <li>By email: contact@nova-next.io</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
