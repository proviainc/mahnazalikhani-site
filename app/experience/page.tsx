import { PageShell } from '../../components/page-shell';
import { CardGrid, CTASection, PageHero, SectionIntro } from '../../components/sections';
import { BreadcrumbJsonLd } from '../../components/structured-data';
import { pageMetadata } from '../../lib/metadata';
import { selectedExperienceChapters } from '../../lib/site-data';

export const metadata = pageMetadata({
  title: 'Experience | Mahnaz Alikhani',
  description:
    'Explore Mahnaz Alikhani’s event strategy experience across corporate, luxury, hospitality, ProVia Events, and EventAgent contexts.',
  pathname: '/experience',
});

const proofAreas = [
  {
    title: 'Corporate Event Confidence',
    description:
      'Helping teams make the event feel organized, intentional, and ready for executives, stakeholders, partners, and guests.',
  },
  {
    title: 'Luxury Guest Experience',
    description:
      'Balancing polish, discretion, and logistics so private events feel personal without becoming fragile or overcomplicated.',
  },
  {
    title: 'Hospitality Operations',
    description:
      'Bringing a service-aware lens to flow, timing, team readiness, and the moments that shape guest perception.',
  },
  {
    title: 'Technology-Informed Strategy',
    description:
      'Connecting real event workflows with EventAgent’s operating context, so technology is grounded in practical event needs.',
  },
] as const;

export default function ExperiencePage() {
  return (
    <PageShell>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', pathname: '/' },
          { name: 'Experience', pathname: '/experience' },
        ]}
      />
      <PageHero
        eyebrow="Experience"
        title="Event strategy informed by the realities of live execution."
        description="Mahnaz’s experience is most valuable when the event has moving parts, visible stakeholders, guest expectations, and little room for confusion."
      />
      <section className="section-shell">
        <SectionIntro
          eyebrow="Selected Context"
          title="Six focused chapters selected from her professional background."
        />
        <CardGrid items={selectedExperienceChapters} />
      </section>
      <section className="section-shell">
        <SectionIntro
          eyebrow="Proof Areas"
          title="Where her event perspective is most relevant."
        />
        <CardGrid items={proofAreas} />
      </section>
      <CTASection
        title="Meet her to find out what she can do for your event."
        description="The consultation is the fastest way to understand the event context, clarify the stakes, and decide what level of planning support makes sense."
      />
    </PageShell>
  );
}
