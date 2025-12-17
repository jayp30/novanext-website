import { HomeHero } from '@/components/sections/home-hero';
import { ServicesOverview } from '@/components/sections/services-overview';
import { WhyNovanext } from '@/components/sections/why-novanext';
import { SupportedMarketplaces } from '@/components/sections/supported-marketplaces';
import { ProcessSteps } from '@/components/sections/process-steps';
import { TrustSection } from '@/components/sections/trust-section';
import { CtaSection } from '@/components/sections/cta-section';

export default function Home() {
  return (
    <>
      <HomeHero />
      <ServicesOverview />
      <WhyNovanext />
      <SupportedMarketplaces />
      <ProcessSteps />
      <TrustSection />
      <CtaSection />
    </>
  );
}
