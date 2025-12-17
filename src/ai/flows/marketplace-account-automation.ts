'use server';

/**
 * @fileOverview Automates the marketplace account setup, tax compliance, and onboarding process.
 *
 * - marketplaceAccountAutomation - A function that handles the marketplace account automation process.
 * - MarketplaceAccountAutomationInput - The input type for the marketplaceAccountAutomation function.
 * - MarketplaceAccountAutomationOutput - The return type for the marketplaceAccountAutomation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const MarketplaceAccountAutomationInputSchema = z.object({
  marketplace: z.string().describe('The name of the marketplace (e.g., Amazon, Flipkart).'),
  businessType: z.string().describe('The type of business (e.g., Sole Proprietorship, LLC).'),
  country: z.string().describe('The country where the business is registered.'),
  productCategory: z.string().describe('The main product category for the business.'),
});
export type MarketplaceAccountAutomationInput = z.infer<typeof MarketplaceAccountAutomationInputSchema>;

const MarketplaceAccountAutomationOutputSchema = z.object({
  accountSetupChecklist: z.string().describe('A checklist of steps required to set up the seller account.'),
  taxComplianceInformation: z.string().describe('Information regarding tax compliance for the specified marketplace and country.'),
  onboardingRequirements: z.string().describe('Specific onboarding requirements for the marketplace.'),
});
export type MarketplaceAccountAutomationOutput = z.infer<typeof MarketplaceAccountAutomationOutputSchema>;

export async function marketplaceAccountAutomation(input: MarketplaceAccountAutomationInput): Promise<MarketplaceAccountAutomationOutput> {
  return marketplaceAccountAutomationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'marketplaceAccountAutomationPrompt',
  input: {schema: MarketplaceAccountAutomationInputSchema},
  output: {schema: MarketplaceAccountAutomationOutputSchema},
  prompt: `You are an expert e-commerce consultant specializing in marketplace account setup and onboarding.

  Based on the information provided, generate a checklist for setting up a seller account, provide tax compliance information, and list the onboarding requirements.

  Marketplace: {{{marketplace}}}
  Business Type: {{{businessType}}}
  Country: {{{country}}}
  Product Category: {{{productCategory}}}`,
});

const marketplaceAccountAutomationFlow = ai.defineFlow(
  {
    name: 'marketplaceAccountAutomationFlow',
    inputSchema: MarketplaceAccountAutomationInputSchema,
    outputSchema: MarketplaceAccountAutomationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
