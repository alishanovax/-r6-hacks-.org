/**
 * Central titles/descriptions for high-traffic routes.
 * After Search Console shows impressions, edit the matching path here and redeploy.
 */

export interface PageSeoEntry {
  title: string;
  description: string;
  /** Optional on-page H1 override (SEO-only routes). */
  h1?: string;
  /** Optional second H1 line (homepage hero accent). */
  h1Accent?: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'R6 Hacks – Check status before you queue after BattlEye',
    description:
      'R6 hacks for Rainbow Six Siege on PC — aimbot, player ESP, gadget ESP, config profiles, and installation guides. Tiers and checkout on r6hacks.org.',
    h1: 'R6 Hacks',
    h1Accent:
      'Check status before you queue after BattlEye — Rainbow Six Siege PC, Aimbot, ESP, Gadget ESP & Configs',
  },
  '/products/r6/': {
    title: 'Rainbow Six Siege – Buy R6 PC hacks shop and tiers',
    description:
      'Rainbow Six Siege shop: R6 hacks for PC — Elite aimbot, wall ESP, HWID spoofer, UGC recovery and Operator loadout tools checkout at r6hacks.org.',
    h1: 'Rainbow Six Siege — R6 hack tiers and checkout',
  },
  '/products/r6/lite/': {
    title: 'R6 Lite Hacks | Player ESP, Radar & Loot Timers',
    description:
      'R6 Lite hacks for PC — player ESP, gadget markers, roam timers and radar without aimbot. Stream-proof overlay and ranked presets on r6hacks.org.',
  },
  '/products/r6/pro/': {
    title: 'R6 Pro Hacks | Aimbot, Smooth Aim & Wall ESP',
    description:
      'R6 Pro hacks include Lite ESP plus Aimbot, Smooth Aim, Sticky Aim and bone priority — ranked-safe defaults and portal presets for Rainbow Six Siege on PC.',
  },
  '/products/r6/elite/': {
    title: 'Elite Rainbow Six Siege Hacks | Aimbot, ESP & Loot Assist',
    description:
      'Elite tier ships gadget ESP, triggerbot, full wall ESP, operator loadout tools and priority patch updates for Rainbow Six Siege on PC.',
  },
  '/products/r6/hwid-spoofer/': {
    title: 'HWID Spoofer for Rainbow Six Siege | Hardware Ban Bypass',
    description:
      'Buy a Rainbow Six Siege HWID spoofer for PC hardware bans — disk/MAC tools, compatibility scan and post-spoof checks before you launch hacks again.',
  },
  '/products/r6/ugc/': {
    title: 'UGC Tools | Rainbow Six Siege BattlEye & Ubisoft Ban Appeals',
    description:
      'UGC (Unban & Governance Control) organizes Ubisoft and BattlEye ban appeals, dispute workflows and case tracking for Rainbow Six Siege players.',
  },
  '/products/r6/unlock-all/': {
    title: 'Operator loadout tools – wrap and weapon previews with your Modern',
    description:
      'Operator loadout tools / Loadout Pack — local outfit, wrap and weapon previews with your Rainbow Six Siege client; no in-game inventory purchase required.',
  },
  '/products/r6/utilities/': {
    title: 'R6 Utilities — HWID, UGC & Loadout Tools',
    description:
      'Compare Rainbow Six Siege utilities on PC: HWID spoofer, UGC appeals, and local operator loadout tools at r6hacks.org.',
  },
  '/blog/': {
    title: 'R6 Blog — Siege guides on aimbot, ESP and BattlEye',
    description:
      'Our blog covers Rainbow Six Siege: aimbot setup, wall ESP, Lite vs Pro, practice lobbies and BattlEye patch-day checks.',
    h1: 'Rainbow Six Siege blog — aimbot, wall ESP and BattlEye',
  },
  '/forum/': {
    title: 'Forum — Rainbow Six Siege loader and tier help',
    description:
      'Community forum for loader setup, aimbot configs, BattlEye status and product questions, with answers from r6hacks.org guides.',
    h1: 'Forum — Rainbow Six Siege loader setup, tier help and discussions',
  },
  '/faq/': {
    title: 'FAQ – R6 tiers, bans, setup and BattlEye loader help',
    description:
      'FAQ on Lite, Pro and Elite tiers, aimbot, wall ESP, radar, HWID spoofer, Operator loadout tools, bans and loader setup at r6hacks.org.',
    h1: 'FAQ — R6 Hacks tiers, bans, BattlEye setup, loader help and checkout',
  },
  '/terms/': {
    title: 'Terms of Service — R6 Hacks Shop & License',
    description:
      'Terms for buying R6 hacks on r6hacks.org — license use, delivery, refunds and account risk when you checkout R6 trainer products.',
  },
  '/privacy/': {
    title: 'Privacy – analytics, cookies and checkout at r6hacks.org',
    description:
      'Privacy: How the r6hacks.org shop uses analytics, cookies and contact data for checkout referrals, support tickets, and shop data use.',
    h1: 'Privacy Policy — r6hacks.org analytics, cookies, checkout and contact data',
  },
  '/about/': {
    title: 'About — aimbot ESP tiers, setup guides and support',
    description:
      'Who we are: aimbot and ESP tools for Rainbow Six Siege on PC, tier comparisons, loader setup and support at r6hacks.org.',
    h1: 'About — aimbot ESP tiers, setup guides and support',
  },
  '/support/': {
    title: 'Support – loader, HWID and checkout help on r6hacks',
    description:
      'R6 hacks support for loader setup, aimbot/ESP configs, HWID spoofing and checkout help — 24/7 Discord and FAQ on r6hacks.org.',
  },
  '/r6-hacks/': {
    title: 'R6 Hacks — patch utilities for PC trainer & loader',
    description:
      'R6 Hacks patch utilities for aimbot, wall ESP, gadget ESP and loader updates on PC. Compare tiers and checkout at r6hacks.org.',
  },
};

export function normalizeSeoPath(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return path;
}

export function getPageSeoEntry(pathname: string): PageSeoEntry | undefined {
  return PAGE_SEO[normalizeSeoPath(pathname)];
}

/** Blog post `<title>` / meta description overrides (natural phrasing, one topic term each). */
export const BLOG_POST_SEO: Record<string, Partial<PageSeoEntry>> = {
  'r6-radar': {
    title: 'R6 radar guide — distance caps, FOV and camera zoom',
    description:
      'Mini-radar and extended camera zoom for Rainbow Six Siege, with safe distance caps and awareness presets on PC at r6hacks.org.',
  },
  'r6-practice-lobby': {
    title: 'Practice lobbies — Shooting Range drills before ranked',
    description:
      'Use Shooting Range and bot lobbies to practice aimbot smoothness, ESP ranges and loadout presets before ranked matchmaking on PC.',
  },
  'r6-stream-proof': {
    title: 'Stream Proof – Hide wall ESP and script overlays from OBS',
    description:
      'Hide wall ESP and script overlays from OBS, Game Bar and capture cards—stream-proof workflow for Rainbow Six Siege creators.',
  },
  'r6-aimbot-ranked': {
    title: 'Ranked Aimbot — Bone Priority & Prediction Setup',
    description:
      'Ranked aimbot configs for Rainbow Six Siege: bone priority, prediction, and smoothness presets on PC at r6hacks.org.',
  },
  'battleye-fix': {
    title: 'BattlEye Error Fix — Verification & Loader Help',
    description:
      'Fix BattlEye verification errors, reload the loader after patches, and when to use HWID or UGC recovery tools on r6hacks.org.',
  },
};

/** Optional on-page H1 overrides (blog posts). */
export const BLOG_POST_PAGE_H1: Record<string, string> = {
  'battleye-fix':
    'What the BattlEye error means — unable to verify Rainbow Six Siege (R6 hacks)',
  'r6-stream-proof':
    'Stream-Proof Overlay Setup — hide wall ESP and script overlays from OBS (R6 hacks)',
  'r6-practice-lobby': 'Shooting Range Practice: Aim Drills Before Ranked (R6 hacks)',
  'r6-radar':
    'Rainbow Six Siege radar — distance caps, FOV and camera zoom',
};

export function getBlogPostSeo(slug: string, fallback: PageSeoEntry): PageSeoEntry {
  const override = BLOG_POST_SEO[slug];
  if (!override) return fallback;
  return {
    title: override.title ?? fallback.title,
    description: override.description ?? fallback.description,
  };
}

export function blogPostPageH1(slug: string, postTitle: string): string {
  return BLOG_POST_PAGE_H1[slug] ?? postTitle;
}

/** Layout `<title>` for blog posts; ranked override is used verbatim when under 60 chars. */
export function blogPostLayoutTitle(slug: string, postTitle: string, brand = 'R6 Hacks'): string {
  const override = BLOG_POST_SEO[slug]?.title;
  if (override && override.length <= 60) return override;
  if (override) return `${override.slice(0, 57).trim()}…`;
  const suffix = ` | ${brand}`;
  const max = 60;
  if (`${postTitle}${suffix}`.length <= max) return `${postTitle}${suffix}`;
  const trimmed = postTitle.slice(0, Math.max(20, max - suffix.length - 1)).trim();
  return `${trimmed}${suffix}`;
}
