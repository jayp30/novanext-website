import Link from 'next/link';
import { Logo } from '@/components/logo';
import { NAV_LINKS, LEGAL_LINKS, TOOLS } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          <div className="col-span-2 space-y-4 md:col-span-1">
            <Logo />
            <p className="text-sm text-muted-foreground">
              End-to-End E-Commerce Growth Solutions for Modern Brands.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Navigation</h3>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
               <li>
                  <Link href="/dashboard" className="text-sm text-muted-foreground hover:text-primary">
                    Dashboard
                  </Link>
                </li>
            </ul>
          </div>
           <div>
            <h3 className="font-semibold text-foreground">Tools</h3>
            <ul className="mt-4 space-y-2">
              {TOOLS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Legal</h3>
            <ul className="mt-4 space-y-2">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="mailto:contact@novanext.com" className="hover:text-primary">
                  contact@novanext.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="hover:text-primary">
                  +1 (234) 567-890
                </a>
              </li>
               <li>
                  <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
                    Talk to Experts
                  </Link>
                </li>
              <li>Mon-Fri: 9am - 6pm</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} NovaNext. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
