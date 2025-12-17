import {
  Store,
  LayoutGrid,
  List,
  TrendingUp,
  Megaphone,
  Boxes,
  Shield,
  Truck,
  BrainCircuit,
  type LucideIcon,
  BarChart,
  FileText,
  BotMessageSquare,
} from 'lucide-react';

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/tools', label: 'Tools' },
];

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  details: string[];
};

export const SERVICES: Service[] = [
  {
    icon: Store,
    title: 'E-Commerce Store Development',
    description: 'Custom stores on Shopify, WooCommerce, or custom platforms with responsive design and secure checkout.',
    details: [
      'Custom store development',
      'Shopify / WooCommerce / Custom setup',
      'Mobile responsive design',
      'Secure checkout & payment gateway integration',
      'Product catalog structuring',
      'Multi-currency & international selling',
    ],
  },
  {
    icon: LayoutGrid,
    title: 'Marketplace Account Setup & Launch',
    description: 'Seamless setup on Amazon, Flipkart, Walmart, and more, including verification, tax, and compliance.',
    details: [
      'Amazon (India, USA, UK, UAE, Canada, EU)',
      'Flipkart, Meesho, Walmart, Noon',
      'Seller account creation & verification',
      'Tax, compliance & onboarding',
      'Brand & category approval',
    ],
  },
  {
    icon: List,
    title: 'Product Listing & Catalog Management',
    description: 'SEO-optimized titles, descriptions, and A+ content to enhance visibility and sales.',
    details: [
      'SEO-optimized titles & bullets',
      'Product descriptions & backend keywords',
      'Image & A+ content coordination',
      'Variation & catalog error fixing',
    ],
  },
  {
    icon: TrendingUp,
    title: 'E-Commerce SEO & Organic Growth',
    description: 'Boost your rankings with marketplace SEO, keyword research, and conversion rate optimization.',
    details: [
      'Marketplace SEO',
      'Keyword research & indexing',
      'Storefront & category ranking optimization',
      'Conversion rate optimization',
    ],
  },
  {
    icon: Megaphone,
    title: 'Advertising & Performance Marketing',
    description: 'Managed PPC campaigns on Amazon and other marketplaces to improve ROAS and ACOS.',
    details: [
      'Amazon Ads & marketplace PPC',
      'Campaign optimization',
      'ROAS & ACOS improvement',
      'Analytics & reporting',
    ],
  },
  {
    icon: Boxes,
    title: 'Inventory, Pricing & Operations',
    description: 'Support for inventory forecasting, FBA/FBM, pricing strategies, and order management.',
    details: [
      'Inventory forecasting',
      'FBA / FBM / WFS guidance',
      'Pricing & repricing strategy',
      'Order, return & reconciliation support',
    ],
  },
  {
    icon: Shield,
    title: 'Brand Protection & Compliance',
    description: 'Protect your brand with Brand Registry, trademark coordination, and policy violation resolution.',
    details: [
      'Brand Registry',
      'IP & trademark coordination',
      'Listing reinstatement',
      'Policy violation resolution',
    ],
  },
  {
    icon: Truck,
    title: 'Logistics & Fulfillment Advisory',
    description: 'Guidance on domestic/international logistics, FBA shipping, warehousing, and 3PL.',
    details: [
      'Domestic & international logistics',
      'FBA shipment planning',
      'Warehouse & 3PL guidance',
      'Cross-border & export documentation',
    ],
  },
  {
    icon: BrainCircuit,
    title: 'E-Commerce Consulting & Strategy',
    description: 'Expert advice on product launches, marketplace expansion, and profitability analysis.',
    details: [
      'New product launch planning',
      'Marketplace expansion',
      'Profitability & cost analysis',
      'One-on-one consulting',
    ],
  },
];

export const WHY_NOVANEXT_POINTS = [
  'End-to-end solutions from launch to scale',
  'Expertise across global marketplaces',
  'Data-driven strategies for growth',
  'Dedicated support and consulting',
  'Proven track record of success',
  'Transparent reporting and analytics'
];

export const SUPPORTED_MARKETPLACES = [
  'Amazon',
  'Flipkart',
  'Walmart',
  'Shopify',
  'WooCommerce',
  'Meesho',
  'Noon',
  'Custom D2C'
];

export const PROCESS_STEPS = [
  {
    title: 'Launch',
    description: 'We handle everything from account setup to your first live product, ensuring a seamless start.',
  },
  {
    title: 'Optimize',
    description: 'Using data and SEO, we enhance your listings and campaigns for maximum visibility and conversion.',
  },
  {
    title: 'Scale',
    description: 'We implement growth strategies to expand your reach, enter new markets, and increase profitability.',
  },
];

export const TESTIMONIALS = [
  {
    quote: "NovaNext transformed our Amazon presence. Their expertise in listing optimization and PPC is unmatched. Our sales have grown by over 200%!",
    name: "Priya Singh",
    title: "Founder, Urban Living Co.",
  },
  {
    quote: "The strategic guidance for expanding into European markets was invaluable. NovaNext made a complex process feel simple and achievable.",
    name: "Rohan Mehta",
    title: "CEO, Global Exports Inc.",
  },
  {
    quote: "From store development to daily operations, NovaNext is a true partner. Their team is responsive, knowledgeable, and genuinely cares about our success.",
    name: "Aarav Sharma",
    title: "Director, TechGadgets",
  },
];

export const LEGAL_LINKS = [
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms-and-conditions', label: 'Terms & Conditions' },
  { href: '/refund-policy', label: 'Refund Policy' },
  { href: '/shipping-policy', label: 'Shipping Policy' },
];

export const TOOLS = [
  {
    href: '/tools/product-listing-optimizer',
    title: 'Product Listing Optimizer',
    description: 'Generate SEO-optimized titles, descriptions, and keywords for your products.',
    icon: BotMessageSquare,
  },
  {
    href: '/tools/marketplace-account-automation',
    title: 'Marketplace Account Automation',
    description: 'Get a customized checklist for setting up your seller account and staying compliant.',
    icon: FileText,
  },
  {
    href: '/dashboard',
    title: 'Performance Analytics Dashboard',
    description: 'Track and visualize key metrics to gain actionable insights into your marketplace performance.',
    icon: BarChart,
  },
];
