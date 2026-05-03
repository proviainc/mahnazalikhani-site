import { PageShell } from '../../components/page-shell';
import { CTASection, SectionIntro } from '../../components/sections';
import { BreadcrumbJsonLd } from '../../components/structured-data';
import { pageMetadata } from '../../lib/metadata';
import { siteConfig } from '../../site.config';

export const metadata = pageMetadata({
  title: 'Speaking And Emcee | Mahnaz Alikhani',
  description:
    'Mahnaz Alikhani brings a calm, professionally trained voice to emcee, stage host, and panel facilitator roles, keeping programs flowing with presence and purpose.',
  pathname: '/speaking',
});

export default function SpeakingPage() {
  return (
    <PageShell>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', pathname: '/' },
          { name: 'Speaking And Emcee', pathname: '/speaking' },
        ]}
      />
      <section className="section-shell">
        <SectionIntro
          eyebrow="Speaking And Emcee"
          title="A senior voice for programs that need structure and credibility."
          description="With a calm, recognizable, and professionally trained voice, Mahnaz speaks with presence and purpose. Her experience as an emcee, stage host, and panel discussion facilitator allows her to engage audiences naturally and keep every program flowing with confidence."
        />
        <div className="mt-10 max-w-3xl space-y-6 text-lg leading-9 text-muted">
          <div className="rounded-[2rem] border border-espresso/10 bg-softSand/40 p-6 text-base leading-8 text-muted">
            <p className="font-semibold text-espresso">Contact for speaking</p>
            <p className="mt-2">
              <span className="text-muted">Work: </span>
              <a className="font-semibold text-deepTeal underline decoration-copper/40 underline-offset-2" href={`mailto:${siteConfig.contact.work.email}`}>
                {siteConfig.contact.work.email}
              </a>
            </p>
            <p className="mt-1">
              <span className="text-muted">Personal: </span>
              <a className="font-semibold text-deepTeal underline decoration-copper/40 underline-offset-2" href={`mailto:${siteConfig.contact.personal.email}`}>
                {siteConfig.contact.personal.email}
              </a>
            </p>
          </div>
        </div>
      </section>
      <CTASection
        title="Prefer to start with a short strategy conversation?"
        description="Use the Calendly consultation if the first step is clarifying fit, timing, and how Mahnaz should prepare for your program."
      />
    </PageShell>
  );
}
