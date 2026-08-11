import { PageShell } from '../../components/page-shell';
import { CardGrid, CTASection, PageHero, SectionIntro } from '../../components/sections';
import { BreadcrumbJsonLd } from '../../components/structured-data';
import { pageMetadata } from '../../lib/metadata';
import { philosophy, professionalCertification } from '../../lib/site-data';

export const metadata = pageMetadata({
  title: 'About Mahnaz Alikhani | Founder, ProVia Events & Co-Founder, EventAgent.io',
  description:
    'Learn about Mahnaz Alikhani, Founder of ProVia Events and Co-Founder of EventAgent.io, and her approach to event strategy and guest operations.',
  pathname: '/about',
});

export default function AboutPage() {
  return (
    <PageShell>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', pathname: '/' },
          { name: 'About', pathname: '/about' },
        ]}
      />
      <PageHero
        eyebrow="About Mahnaz"
        title="An event leader shaped by planning pressure, hospitality standards, and live execution."
        description="Mahnaz Alikhani’s work sits at the intersection of event strategy, client confidence, guest experience, and the operational discipline needed to make complex gatherings feel calm."
      />
      <section className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionIntro
            eyebrow="Point Of View"
            title="The best events do not feel improvised."
          />
          <div className="space-y-6 text-lg leading-9 text-muted">
            <p>
              Mahnaz brings a senior planner’s perspective to events where many people, vendors, timelines, and expectations must come together at once. Her work is grounded in calm decision-making, practical structure, and careful attention to the guest experience.
            </p>
            <p>
              That judgment is shaped by a wide arc of operating work: founding ProVia Events, directing recurring showroom programs, developing structured hospitality training, improving restaurant workflows, and leading B2B hospitality technology initiatives. As Co-Founder of EventAgent.io, she also brings real organizer context into event-workflow product decisions.
            </p>
          </div>
        </div>
      </section>
      <section className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionIntro
            eyebrow="Professional Certification"
            title="Food safety training that supports hospitality-aware event execution."
          />
          <article className="card border-l-4 border-l-copper bg-warmIvory">
            <h3 className="font-display text-3xl font-semibold text-espresso">
              {professionalCertification.title}
            </h3>
            <p className="mt-4 text-sm font-bold uppercase tracking-[0.18em] text-copperDark">
              <time dateTime={professionalCertification.expiresOn}>
                Valid through {professionalCertification.validThrough}
              </time>
            </p>
            <p className="mt-5 text-base leading-8 text-muted">
              {professionalCertification.description}
            </p>
          </article>
        </div>
      </section>
      <section className="section-shell">
        <SectionIntro eyebrow="How She Works" title="Calm structure, clear priorities, and guest-aware execution." />
        <CardGrid items={philosophy} />
      </section>
      <CTASection
        title="Have an event that needs experienced operational judgment?"
        description="Share the event through ProVia Events so the team can review the stakes, fit, and appropriate next step."
      />
    </PageShell>
  );
}
