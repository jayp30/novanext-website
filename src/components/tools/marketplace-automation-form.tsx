'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2, FileText } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

import {
  marketplaceAccountAutomation,
  type MarketplaceAccountAutomationOutput,
} from '@/ai/flows/marketplace-account-automation';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

const formSchema = z.object({
  marketplace: z.string().min(2, 'Marketplace is required.'),
  businessType: z.string().min(2, 'Business type is required.'),
  country: z.string().min(2, 'Country is required.'),
  productCategory: z.string().min(3, 'Product category is required.'),
});

export function MarketplaceAutomationForm() {
  const [result, setResult] = useState<MarketplaceAccountAutomationOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      marketplace: 'Amazon',
      businessType: 'Sole Proprietorship',
      country: 'USA',
      productCategory: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setResult(null);
    try {
      const output = await marketplaceAccountAutomation(values);
      setResult(output);
    } catch (error) {
      console.error('Error generating account plan:', error);
      toast({
        title: 'An error occurred',
        description: 'Failed to generate account setup plan. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  }

  const renderChecklist = (text: string) => (
    <ul className="list-disc space-y-2 pl-5 text-sm">
      {text.split('\n').filter(line => line.trim().startsWith('*') || line.trim().startsWith('-')).map((item, index) => (
        <li key={index} className="text-muted-foreground">{item.substring(1).trim()}</li>
      ))}
    </ul>
  );

  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Business Information</CardTitle>
          <CardDescription>Tell us about your business to get a tailored plan.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="marketplace"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Marketplace</FormLabel>
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
                        <SelectItem value="Noon">Noon</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="businessType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Business Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a business type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Sole Proprietorship">Sole Proprietorship</SelectItem>
                        <SelectItem value="LLC">LLC</SelectItem>
                        <SelectItem value="Private Limited">Private Limited</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Country of Registration</FormLabel>
                     <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a country" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="USA">USA</SelectItem>
                        <SelectItem value="India">India</SelectItem>
                        <SelectItem value="UK">UK</SelectItem>
                        <SelectItem value="UAE">UAE</SelectItem>
                        <SelectItem value="Canada">Canada</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="productCategory"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Main Product Category</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Electronics, Apparel, Home Goods" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <FileText className="mr-2 h-4 w-4" />
                )}
                Generate Setup Plan
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Your Personalized Setup Plan</CardTitle>
            <CardDescription>AI-generated guidance will appear here.</CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading && (
              <div className="flex items-center justify-center p-8">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            )}
            {result && (
              <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Account Setup Checklist</AccordionTrigger>
                  <AccordionContent>
                    {renderChecklist(result.accountSetupChecklist)}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Tax & Compliance Information</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground whitespace-pre-wrap">
                    {result.taxComplianceInformation}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Onboarding Requirements</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground whitespace-pre-wrap">
                    {result.onboardingRequirements}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            )}
            {!isLoading && !result && (
              <div className="text-center text-sm text-muted-foreground p-8">
                Your customized plan for marketplace success will be generated here.
              </div>
            )}
          </CardContent