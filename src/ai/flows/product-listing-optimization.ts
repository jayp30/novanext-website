'use server';

/**
 * @fileOverview Generates SEO-optimized product titles and descriptions for e-commerce listings.
 *
 * - generateProductListing - A function that generates product listings.
 * - ProductListingInput - The input type for the generateProductListing function.
 * - ProductListingOutput - The return type for the generateProductListing function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProductListingInputSchema = z.object({
  productName: z.string().describe('The name of the product.'),
  productCategory: z.string().describe('The category of the product.'),
  keyFeatures: z.string().describe('A comma-separated list of key features of the product.'),
  targetMarketplace: z.string().describe('The target marketplace (e.g., Amazon, Flipkart).'),
  exampleListings: z.string().optional().describe('Examples of listings on the marketplace to improve product visibility.'),
});
export type ProductListingInput = z.infer<typeof ProductListingInputSchema>;

const ProductListingOutputSchema = z.object({
  title: z.string().describe('The SEO-optimized product title.'),
  description: z.string().describe('The SEO-optimized product description.'),
  backendKeywords: z.string().describe('Comma separated list of backend keywords'),
});
export type ProductListingOutput = z.infer<typeof ProductListingOutputSchema>;

export async function generateProductListing(input: ProductListingInput): Promise<ProductListingOutput> {
  return productListingFlow(input);
}

const productListingPrompt = ai.definePrompt({
  name: 'productListingPrompt',
  input: {schema: ProductListingInputSchema},
  output: {schema: ProductListingOutputSchema},
  prompt: `You are an expert in creating SEO-optimized product listings for e-commerce marketplaces.

  Given the following product information, generate an optimized product title, product description, and backend keywords suitable for the specified marketplace.  You should increase product visibility and adhere to the marketplace's best practices. Pay special attention to SEO optimization best practices given your experience.

  Product Name: {{{productName}}}
  Product Category: {{{productCategory}}}
  Key Features: {{{keyFeatures}}}
  Target Marketplace: {{{targetMarketplace}}}
  Example Listings: {{{exampleListings}}}

  Title:
  Description:
  Backend Keywords (comma-separated):`,
});

const productListingFlow = ai.defineFlow(
  {
    name: 'productListingFlow',
    inputSchema: ProductListingInputSchema,
    outputSchema: ProductListingOutputSchema,
  },
  async input => {
    const {output} = await productListingPrompt(input);
    return output!;
  }
);
