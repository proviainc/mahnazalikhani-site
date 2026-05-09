import { PageShell } from '../components/page-shell';
import { CardGrid, CTASection, PageHero, ProofStrip, SectionIntro } from '../components/sections';
import { BreadcrumbJsonLd } from '../components/structured-data';
import { pageMetadata } from '../lib/metadata';
import { audienceCards, homeExperiencePreview, philosophy, proofPoints } from '../lib/site-data';
import { siteConfig } from '../site.config';

export const metadata = pageMetadata({
  title: siteConfig.seo.defaultTitle,
  description: siteConfig.seo.defaultDescription,
  pathname: '/',
});

export default function HomePage() {
  return (
    <PageShell>
      <BreadcrumbJsonLd items={[{ name: 'Home', pathname: '/' }]} />
      <PageHero
        eyebrow="Senior Event Planner And Strategist"
        title="Calm event strategy for high-stakes gatherings."
        description="Mahnaz Alikhani helps corporate, luxury, hospitality, and business-event teams bring structure, guest experience, and event-day control to complex gatherings."
        portraitPriority
      />
      <ProofStrip items={proofPoints} />
      <section className="section-shell">
        <SectionIntro
          eyebrow="Who Mahnaz Helps"
          title="For events where the details carry real reputational weight."
          description="The site is intentionally focused: help visitors understand Mahnaz’s judgment, decide whether there is a fit, and book a consultation."
        />
        <CardGrid items={audienceCards} role="fit" />
      </section>
      <section className="section-shell">
        <SectionIntro
          eyebrow="Operating Philosophy"
          title="Premium event work is structured long before guests arrive."
        />
        <CardGrid items={philosophy} role="system" />
      </section>
      <section className="section-shell">
        <SectionIntro
          eyebrow="Selected Experience"
          title="Four highlights from a longer operating arc. See Experience for the full chapter list."
        />
        <CardGrid items={homeExperiencePreview} role="proof" />
      </section>
      <CTASection
        title="Start with a focused event strategy conversation."
        description="Use the consultation to clarify the event vision, pressure points, operating model, and next decisions before the work becomes urgent."
      />
    </PageShell>
  );
}
