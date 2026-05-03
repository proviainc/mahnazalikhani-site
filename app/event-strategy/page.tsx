import { PageShell } from '../../components/page-shell';
import { CardGrid, CTASection, PageHero, SectionIntro } from '../../components/sections';
import { BreadcrumbJsonLd } from '../../components/structured-data';
import { pageMetadata } from '../../lib/metadata';
import { consultationFit } from '../../lib/site-data';

export const metadata = pageMetadata({
  title: 'Event Strategy Consultation | Mahnaz Alikhani',
  description:
    'Book an event strategy consultation with Mahnaz Alikhani for corporate, luxury, hospitality, and business events that need clarity before execution.',
  pathname: '/event-strategy',
});

const consultationSteps = [
  {
    title: 'Clarify The Event Context',
    description:
      'Discuss the audience, purpose, stakeholders, timing, and pressure points shaping the event.',
  },
  {
    title: 'Identify Execution Risks',
    description:
      'Surface gaps around guest flow, vendor coordination, internal ownership, timeline risk, and day-of decision-making.',
  },
  {
    title: 'Define The Next Move',
    description:
      'Leave with a clearer sense of what needs planning attention and whether deeper support is the right fit.',
  },
] as const;

export default function EventStrategyPage() {
  return (
    <PageShell>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', pathname: '/' },
          { name: 'Event Strategy', pathname: '/event-strategy' },
        ]}
      />
      <PageHero
        eyebrow="Event Strategy Consultation"
        title="A focused conversation before the event becomes urgent."
        description="Book time with Mahnaz to clarify what the event needs, where risk may be hiding, and how to approach planning with more control."
      />
      <section className="section-shell">
        <SectionIntro
          eyebrow="Best Fit"
          title="The consultation is designed for teams who need clarity before committing the next step."
        />
        <div className="mt-10 grid gap-4">
          {consultationFit.map((item) => (
            <div key={item} className="card flex gap-4">
              <span className="mt-1 h-3 w-3 shrink-0 rounded-full bg-copper" aria-hidden="true" />
              <p className="text-lg leading-8 text-muted">{item}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section-shell">
        <SectionIntro
          eyebrow="How The Call Helps"
          title="A simple flow for turning uncertainty into planning priorities."
        />
        <CardGrid items={consultationSteps} />
      </section>
      <CTASection
        title="Book Mahnaz’s event strategy consultation."
        description="Calendly is the primary booking path for launch. LinkedIn remains available as a secondary trust and connection channel."
      />
    </PageShell>
  );
}
