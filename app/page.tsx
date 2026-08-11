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
        eyebrow="Founder, ProVia Events · Co-Founder, EventAgent.io"
        title="Calm event strategy for high-stakes gatherings."
        description="Mahnaz Alikhani brings structure, culturally aware guest experience, and calm event-day control to complex gatherings. Event-service inquiries are handled through ProVia Events."
        portraitPriority
      />
      <ProofStrip items={proofPoints} />
      <section className="section-shell">
        <SectionIntro
          eyebrow="Who Mahnaz Helps"
          title="For events where the details carry real reputational weight."
          description="This site presents Mahnaz’s experience and judgment, then routes event-service inquiries to the appropriate ProVia Events intake."
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
        title="Planning an event that needs calm, structured execution?"
        description="Start with the ProVia Events intake so the event, pressure points, and appropriate support path can be reviewed together."
      />
    </PageShell>
  );
}
