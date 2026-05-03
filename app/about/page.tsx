import { PageShell } from '../../components/page-shell';
import { CardGrid, CTASection, PageHero, SectionIntro } from '../../components/sections';
import { BreadcrumbJsonLd } from '../../components/structured-data';
import { pageMetadata } from '../../lib/metadata';
import { philosophy } from '../../lib/site-data';

export const metadata = pageMetadata({
  title: 'About Mahnaz Alikhani | Senior Event Planner And Strategist',
  description:
    'Learn about Mahnaz Alikhani, a senior event planner and strategist supporting corporate, luxury, hospitality, and business events.',
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
              That judgment is shaped by a wide arc of operating work: founding and scaling ProVia Events since 2024 across dozens of mid-scale corporate and gala programs; earlier high-volume showroom programs; structured hospitality training for large teams; hands-on restaurant workflow consulting; and B2B product leadership in hospitality technology, always with an eye toward repeatable systems, vendor coordination, and what actually happens when doors open.
            </p>
          </div>
        </div>
      </section>
      <section className="section-shell">
        <SectionIntro eyebrow="How She Works" title="Calm structure, clear priorities, and guest-aware execution." />
        <CardGrid items={philosophy} />
      </section>
      <CTASection
        title="Have a planning question where senior experience could help?"
        description="Book a consultation to discuss the event, the stakes, and the decisions that need clarity before execution begins."
      />
    </PageShell>
  );
}
