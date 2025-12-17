import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";

const fontBody = Inter({ 
  subsets: ['latin'],
  variable: '--font-body',
});

const fontHeadline = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-headline',
});

export const metadata: Metadata = {
  title: 'NovaNext – Complete E-Commerce Services',
  description: 'End-to-End E-Commerce Growth Solutions for Modern Brands. We help brands launch, scale & optimize across marketplaces & D2C.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark !scroll-smooth" suppressHydrationWarning>
      <body className={cn('font-body antialiased', fontBody.variable, fontHeadline.variable)}>
        <div className="flex min-h-screen flex-col bg-gradient-radial">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
