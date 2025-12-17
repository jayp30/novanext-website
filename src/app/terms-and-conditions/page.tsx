import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Conditions | NovaNext',
  description: 'Read the terms and conditions for using NovaNext.io.',
};

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-background">
      <section className="pt-16 md:pt-24">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert mx-auto max-w-none text-muted-foreground prose-h1:text-foreground prose-h1:font-headline prose-h2:text-foreground prose-h2:font-headline prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-foreground">
            <h1 className="mt-2 text-center font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Terms and Conditions</h1>
            <p className="text-center text-lg">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

            <p>Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the https://www.nova-next.io website (the "Service") operated by NovaNext.io ("us", "we", or "our").</p>
            <p>Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.</p>
            <p>By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.</p>

            <h2>Intellectual Property</h2>
            <p>The Service and its original content, features, and functionality are and will remain the exclusive property of NovaNext.io and its licensors. The Service is protected by copyright, trademark, and other laws of both the India and foreign countries.</p>

            <h2>Links To Other Web Sites</h2>
            <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by NovaNext.io.</p>
            <p>NovaNext.io has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party web sites or services. You further acknowledge and agree that NovaNext.io shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>

            <h2>Governing Law</h2>
            <p>These Terms shall be governed and construed in accordance with the laws of Rajasthan, India, without regard to its conflict of law provisions.</p>

            <h2>Changes</h2>
            <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>

            <h2>Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us:</p>
            <ul>
              <li>By email: contact@nova-next.io</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
