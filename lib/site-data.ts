export const proofPoints = [
  'ProVia Events: 50+ programs since 2024 across business, tech, trade show, networking, concert, and gala formats (~200–800 guests)',
  'High-volume showroom programs, structured hospitality training (200+ staff), and restaurant operations consulting',
  'B2B hospitality product leadership (Banic Software) and strategy contributor context with EventAgent',
] as const;

export const audienceCards = [
  {
    title: 'Corporate And Business Events',
    description:
      'Planning support for meetings, launches, conferences, and stakeholder gatherings where timing, clarity, and brand trust matter.',
  },
  {
    title: 'Luxury Private Events',
    description:
      'Guest-first event guidance for private celebrations that require discretion, polish, and thoughtful coordination.',
  },
  {
    title: 'Hospitality Consulting',
    description:
      'Operational perspective for hospitality teams shaping better service flow, guest experience, and event readiness.',
  },
  {
    title: 'Speaking And Emcee Inquiries',
    description:
      'A calm, experienced voice for business and community events that need structure, presence, and audience confidence.',
  },
] as const;

export const philosophy = [
  {
    title: 'Calm Before The Room Opens',
    description:
      'Strong events feel effortless to guests because priorities, roles, timing, and contingencies are clear before event day.',
  },
  {
    title: 'Hospitality With Structure',
    description:
      'Warm service and operational discipline belong together. The experience works when both the guest and the team are cared for.',
  },
  {
    title: 'Strategy Beyond Decor',
    description:
      'Event planning is not only aesthetic. It is decision-making, stakeholder alignment, vendor orchestration, and live risk management.',
  },
] as const;

/**
 * LinkedIn-sourced project chapters; voice matches Stage 06 authenticity (specific, no hype).
 * Banic outcomes stay qualitative on-site; see `docs/06-authenticity-audit.md` for numeric policy.
 */
export const selectedExperienceChapters = [
  {
    title: 'ProVia Events: Launch And Growth',
    description:
      'Since January 2024, Mahnaz has founded and scaled ProVia Events, delivering 50+ business, technology, trade show, networking, concert, and gala events, typically in the roughly 200–800 guest range. She has built vendor and strategic partnerships and established structured systems, cost-control discipline, and execution playbooks so quality scales with demand.',
  },
  {
    title: 'Banic Software: Real-Time Ordering Platform',
    description:
      'As co-founder and head of sales, she led strategy for a B2B real-time restaurant ordering platform adopted across a large base of hospitality operators. She connected product direction with kitchens, waitstaff, and owners. Outcomes included faster service, leaner labor, better table turnover, stronger revenue, and higher guest satisfaction; the public site keeps wording qualitative unless exact figures are locked with resume.',
  },
  {
    title: 'Baran Showroom Event Series',
    description:
      'With Bartec Engineering (Baran Group), she directed a high-volume showroom event program, on the order of 100+ events per year, in small-group experiential formats of about 50 guests. The focus was brand visibility, sales growth, and repeatable frameworks for consistent quality and commercial impact.',
  },
  {
    title: 'Comprehensive Hospitality Training Program',
    description:
      'She designed and implemented a structured hospitality training curriculum for more than 200 staff members, covering banquet and venue management, scheduling and rotation, guest experience, and standardized workflows, moving teams toward luxury service standards with clear operating rules.',
  },
  {
    title: 'Thai Orchid Restaurant: Workflow Optimization',
    description:
      'As an independent operations consultant, she restructured workforce scheduling and end-to-end service workflow for a high-volume restaurant, tightening order flow from table to kitchen to service delivery, easing staff overload, and improving consistency and labor alignment.',
  },
  {
    title: 'EventAgent: Strategy Contributor',
    description:
      'She contributes strategy context with EventAgent, connecting how event teams actually work with software built for live programs, timelines, and day-of coordination. Public-facing titles stay general until an exact role line is approved by EventAgent and Mahnaz.',
  },
] as const;

/** First four chapters: strongest mix for homepage without overcrowding. */
export const homeExperiencePreview = selectedExperienceChapters.slice(0, 4);

export const consultationFit = [
  'You are planning a corporate, business, luxury, or hospitality event with meaningful reputational stakes.',
  'You need a senior event strategist to clarify priorities before committing budget, vendors, or internal resources.',
  'You want a practical conversation about guest experience, execution risk, and what needs to be true before event day.',
] as const;

export const pages = [
  { pathname: '/', title: 'Home' },
  { pathname: '/about', title: 'About' },
  { pathname: '/experience', title: 'Experience' },
  { pathname: '/speaking', title: 'Speaking' },
  { pathname: '/event-strategy', title: 'Event Strategy' },
  { pathname: '/card', title: 'Card' },
] as const;
