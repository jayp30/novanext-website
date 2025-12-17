'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2, Wand2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

import {
  generateProductListing,
  type ProductListingOutput,
} from '@/ai/flows/product-listing-optimization';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '../ui/badge';

const formSchema = z.object({
  productName: z.string().min(3, 'Product name must be at least 3 characters.'),
  productCategory: z.string().min(3, 'Product category is required.'),
  keyFeatures: z.string().min(10, 'Please list at least one key feature.'),
  targetMarketplace: z.string().min(2, 'Target marketplace is required.'),
  exampleListings: z.string().optional(),
});

export function ProductOptimizerForm() {
  const [result, setResult] = useState<ProductListingOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productName: '',
      productCategory: '',
      keyFeatures: '',
      targetMarketplace: 'Amazon',
      exampleListings: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setResult(null);
    try {
      const output = await generateProductListing(values);
      setResult(output);
    } catch (error) {
      console.error('Error generating product listing:', error);
      toast({
        title: 'An error occurred',
        description: 'Failed to generate product listing. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Product Details</CardTitle>
          <CardDescription>Provide information about your product.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="productName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Product Name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Organic Green Tea" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="productCategory"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Product Category</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Grocery & Gourmet Foods" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="keyFeatures"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Key Features (comma-separated)</FormLabel>
                    <FormControl>
                      <Textarea placeholder="e.g., 100% natural, Rich in antioxidants, Sourced from Darjeeling" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="targetMarketplace"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Target Marketplace</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a marketplace" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Amazon">Amazon</SelectItem>
                        <SelectItem value="Flipkart">Flipkart</SelectItem>
                        <SelectItem value="Walmart">Walmart</SelectItem>
                        <SelectItem value="Shopify">Shopify</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="exampleListings"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Example Listings (Optional)</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Paste URLs of top-performing competitor listings..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Wand2 className="mr-2 h-4 w-4" />
                )}
                Generate Listing
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Optimized Listing</CardTitle>
            <CardDescription>AI-generated content will appear here.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {isLoading && (
              <div className="flex items-center justify-center p-8">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            )}
            {result && (
              <>
                <div>
                  <h3 className="font-semibold text-foreground">Generated Title</h3>
                  <p className="mt-1 rounded-md border bg-muted p-3 text-sm">{result.title}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Generated Description</h3>
                  <p className="mt-1 whitespace-pre-wrap rounded-md border bg-muted p-3 text-sm">{result.description}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Backend Keywords</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {result.backendKeywords.split(',').map(keyword => keyword.trim()).filter(Boolean).map((keyword) => (
                      <Badge key={keyword} variant="secondary">{keyword}</Badge>
                    ))}
                  </div>
                </div>
              </>
            )}
            {!isLoading && !result && (
              <div className="text-center text-sm text-muted-foreground p-8">
                Your optimized product listing will be generated here.
              </div>
            )}
          </CardContent>
        </Card>
