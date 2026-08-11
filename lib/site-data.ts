export const proofPoints = [
  'Founder, ProVia Events: event strategy, guest operations, and live execution',
  'Hospitality operations, training, and service-workflow experience',
  'Co-Founder, EventAgent.io: real organizer perspective for event workflows',
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
    title: 'Gala And Cultural Events',
    description:
      'Culturally aware planning and guest operations for programs where timing, hospitality, and community context matter.',
  },
  {
    title: 'Event Operations And Guest Experience',
    description:
      'Structured support for vendor coordination, guest flow, check-in, program timing, and calm event-day control.',
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

export const professionalCertification = {
  title: 'Ontario-Recognized Food Handler Certificate',
  validThrough: 'July 2031',
  expiresOn: '2031-07-14',
  description:
    'Food safety training that supports responsible coordination around catered events and hospitality environments.',
} as const;

/**
 * LinkedIn-sourced project chapters; voice matches Stage 06 authenticity (specific, no hype).
 * Banic outcomes stay qualitative on-site; see `docs/06-authenticity-audit.md` for numeric policy.
 */
export const selectedExperienceChapters = [
  {
    title: 'ProVia Events: Launch And Growth',
    description:
      'Mahnaz founded ProVia Events and leads event strategy, vendor and venue coordination, guest operations, and live execution across business, cultural, gala, and private-event contexts.',
  },
  {
    title: 'Banic Software: Real-Time Ordering Platform',
    description:
      'As co-founder and head of sales, she led strategy for a B2B real-time restaurant ordering platform used by hospitality operators. She connected product direction with kitchens, waitstaff, and owners to improve service flow and operational visibility.',
  },
  {
    title: 'Baran Showroom Event Series',
    description:
      'With Bartec Engineering (Baran Group), she directed a recurring showroom event program focused on brand visibility, repeatable guest experiences, and consistent operational quality.',
  },
  {
    title: 'Comprehensive Hospitality Training Program',
    description:
      'She designed and implemented a structured hospitality training curriculum covering banquet and venue management, scheduling, guest experience, and standardized service workflows.',
  },
  {
    title: 'Thai Orchid Restaurant: Workflow Optimization',
    description:
      'As an independent operations consultant, she restructured workforce scheduling and end-to-end service workflow for a high-volume restaurant, tightening order flow from table to kitchen to service delivery, easing staff overload, and improving consistency and labor alignment.',
  },
  {
    title: 'EventAgent.io: Co-Founder',
    description:
      'As Co-Founder of EventAgent.io, she brings real organizer and event-operations experience into product direction, workflow design, partnerships, and customer discovery. Product capabilities and readiness are described only when verified.',
  },
] as const;

/** First four chapters: strongest mix for homepage without overcrowding. */
export const homeExperiencePreview = selectedExperienceChapters.slice(0, 4);

export const consultationFit = [
  'You are planning a corporate, business, luxury, or hospitality event with meaningful reputational stakes.',
  'You need ProVia Events to help clarify priorities before committing budget, vendors, or internal resources.',
  'You want a structured intake covering guest experience, execution risk, and the next appropriate level of support.',
] as const;

export const pages = [
  { pathname: '/', title: 'Home' },
  { pathname: '/about', title: 'About' },
  { pathname: '/experience', title: 'Experience' },
  { pathname: '/speaking', title: 'Speaking' },
  { pathname: '/event-strategy', title: 'Event Strategy' },
  { pathname: '/card', title: 'Card' },
] as const;
