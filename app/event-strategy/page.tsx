import { PageShell } from '../../components/page-shell';
import { CardGrid, CTASection, PageHero, SectionIntro } from '../../components/sections';
import { BreadcrumbJsonLd } from '../../components/structured-data';
import { pageMetadata } from '../../lib/metadata';
import { consultationFit } from '../../lib/site-data';

export const metadata = pageMetadata({
  title: 'Event Strategy | Mahnaz Alikhani and ProVia Events',
  description:
    'Review event strategy needs with ProVia Events through a structured request covering goals, guest experience, operational pressure, and next steps.',
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
        eyebrow="Event Strategy Through ProVia Events"
        title="Start with structure before the event becomes urgent."
        description="Submit the event through ProVia Events so Mahnaz and the appropriate delivery path can review what the event needs, where risk may be hiding, and what should happen next."
      />
      <section className="section-shell">
        <SectionIntro
          eyebrow="Best Fit"
          title="The intake is designed for teams who need clarity before committing the next step."
        />
        <div className="mt-10 grid gap-4">
          {consultationFit.map((item, index) => (
            <div key={item} className="card relative overflow-hidden border-l-4 border-l-copper bg-softSand/35">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-copper">
                Fit clarity {String(index + 1).padStart(2, '0')}
              </p>
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
        <CardGrid items={consultationSteps} role="process" />
      </section>
      <CTASection
        title="Start your event request with ProVia Events."
        description="Use the structured intake as the primary path. LinkedIn remains available as a secondary professional connection channel."
      />
    </PageShell>
  );
}
