import type { Metadata } from 'next';
import { MarketplaceAutomationForm } from '@/components/tools/marketplace-automation-form';

export const metadata: Metadata = {
  title: 'Marketplace Account Automation | NovaNext',
  description: 'Generate a customized checklist for seller account setup, tax compliance, and onboarding requirements for your chosen marketplace.',
};

export default function MarketplaceAccountAutomationPage() {
  return (
    <div className="bg-background">
      <section className="pt-16 md:pt-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-base font-semibold uppercase tracking-wider text-primary">
              AI Tool
            </p>
            <h1 className="mt-2 font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Marketplace Account Automation
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Get a head start on your marketplace launch. Provide your business details to receive a customized, step-by-step guide for account setup, tax, and compliance.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container mx-auto max-w-4xl px-4">
            