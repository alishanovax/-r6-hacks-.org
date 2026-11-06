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
    title: 'Tactical overlays, tuned aim assist, operator ESP | R6 Hacks',
    description:
      'Tactical overlays, tuned aim assist, and operator ESP that stay readable in ranked—explore modules, compare forum settings, and PC sessions at r6hacks.org.',
    h1: 'R6 HACKS',
  },
  '/products/r6/': {
    title: 'Rainbow Six Siege – Buy R6 PC hacks shop and tiers',
    description:
      'Rainbow Six Siege shop: R6 hacks for PC — Elite aimbot, wall ESP, HWID spoofer, UGC recovery and Operator loadout tools checkout at r6hacks.org.',
    h1: 'Rainbow Six Siege — R6 hack tiers and checkout',
  },
  '/products/r6/lite/': {
    title: 'R6 Lite hacks — player ESP, radar and loot timers on PC',
    description:
      'R6 Lite hacks on PC: player ESP, gadget markers, roam timers and mini-radar without aimbot. Stream-proof overlay and ranked presets at r6hacks.org.',
    h1: 'R6 Lite hacks — player ESP, radar and loot timers',
  },
  '/products/r6/pro/': {
    title: 'R6 Pro hacks — aimbot, smooth aim and wall ESP on PC',
    description:
      'R6 Pro hacks add aimbot, Smooth Aim, Sticky Aim and bone priority on top of Lite ESP — ranked-safe portal presets for Rainbow Six Siege on PC.',
    h1: 'R6 Pro hacks — aimbot, smooth aim and wall ESP',
  },
  '/products/r6/elite/': {
    title: 'Elite R6 hacks — loot assist, triggerbot and full wall ESP',
    description:
      'Elite tier on PC: gadget ESP, triggerbot, loot assist, operator loadout tools and priority patch updates for Rainbow Six Siege at r6hacks.org.',
    h1: 'Elite R6 hacks — loot assist, triggerbot and full wall ESP',
  },
  '/products/r6/hwid-spoofer/': {
    title: 'HWID spoofer for Rainbow Six Siege hardware bans on PC',
    description:
      'Rainbow Six Siege HWID spoofer for PC hardware bans: compatibility scan, guided spoof workflow and post-check steps before you launch again on r6hacks.org.',
    h1: 'HWID spoofer for Rainbow Six Siege hardware bans',
  },
  '/products/r6/ugc/': {
    title: 'UGC tools — BattlEye and Ubisoft ban appeals on PC',
    description:
      'UGC appeal workspace for Rainbow Six Siege: organize BattlEye and Ubisoft disputes, case notes and status tracking — separate checkout at r6hacks.org.',
    h1: 'UGC tools — BattlEye and Ubisoft ban appeals',
  },
  '/products/r6/unlock-all/': {
    title: 'Operator loadout tools — local wrap and weapon previews',
    description:
      'Loadout Pack / operator loadout tools: preview outfits, wraps and weapons locally with your Rainbow Six Siege client — no in-game purchase required.',
    h1: 'Operator loadout tools — local wrap and weapon previews',
  },
  '/products/r6/utilities/': {
    title: 'R6 utilities — HWID spoofer, UGC and loadout tools',
    description:
      'Compare Rainbow Six Siege utilities on PC: HWID spoofer after hardware flags, UGC ban appeals, and local operator loadout tools at r6hacks.org.',
    h1: 'R6 utilities — HWID spoofer, UGC and loadout tools',
  },
  '/blog/': {
    title: 'R6 blogs — Siege guides on aimbot, ESP and BattlEye',
    description:
      'Browse R6 blogs for Rainbow Six Siege on PC: aimbot setup, ESP and wall ESP tiers, Lite vs Pro, practice lobbies, and BattlEye patch-day checklists.',
    h1: 'R6 blogs & Siege guides — aimbot, ESP, wall ESP and BattlEye',
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
    title: 'Terms of Service — R6 Hacks shop license and checkout',
    description:
      'Terms for buying R6 hacks on r6hacks.org: license use, secure checkout delivery, refunds policy, and account risk when you purchase trainer products.',
    h1: 'Terms of Service — R6 Hacks shop license and checkout',
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
      'About r6hacks.org: aimbot esp for Lite, Pro and Elite on PC — operator portal loader setup, FAQ answers, Discord support, and live status before checkout.',
    h1: 'About — aimbot ESP tiers, setup guides and support',
  },
  '/support/': {
    title: 'R6 support — loader, HWID and checkout help on r6hacks.org',
    description:
      'R6 hacks support on r6hacks.org: Discord loader help, aimbot and ESP presets, HWID spoofer setup, checkout receipts, and links to the FAQ index.',
    h1: 'R6 support — loader, HWID and checkout help',
  },
  '/r6-hacks/': {
    title: 'R6 hacks landing — PC trainer tiers, loader and patch status',
    description:
      'R6 hacks utilities for Rainbow Six Siege on PC: aimbot, wall ESP, gadget ESP, loader updates, and tier comparison before checkout at r6hacks.org.',
    h1: 'R6 hacks — PC trainer tiers, loader and patch status',
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
    title: 'BattlEye verification fix — loader reload help on R6 Siege',
    description:
      'BattlEye verification errors on PC: verify game files, cold reboot, loader order, and when HWID or UGC recovery applies on r6hacks.org.',
  },
  'buy-r6-hacks': {
    title: 'Buy R6 hacks in 2026 — secure Lite, Pro and Elite checkout',
    description:
      'How to buy R6 on PC: pick Lite, Pro or Elite, complete secure checkout, get operator portal access, install the loader, and check BattlEye status before ranked.',
  },
  'battleye-patch': {
    title: 'R6 hacks BattlEye checklist — patch-day loader reload',
    description:
      'After each Rainbow Six Siege patch, check the status banner, reload your loader, verify ESP in a lobby, and run conservative presets before ranked on PC.',
  },
  'r6-training-tips': {
    title: 'Shooting Range tips — aimbot and ESP drills before ranked',
    description:
      'Shooting Range and bot-lobby drills to tune aimbot smoothness, wall ESP ranges and radar before ranked on PC — then pick Lite or Pro at r6hacks.org.',
  },
  'r6-hack-setup': {
    title: 'Practice R6 hacks safely — Shooting Range vs ranked setup',
    description:
      'How to test aimbot and ESP in Shooting Range or bot lobbies before ranked: conservative presets, status checks, and Lite vs Pro tiers on PC.',
  },
  'r6-features': {
    title: 'R6 hacks features — aimbot, ESP, radar and Elite tools',
    description:
      'Full R6 hacks feature list on PC: aimbot, wall ESP, radar, loot assist, operator loadout tools, and how Lite, Pro and Elite tiers compare at r6hacks.org.',
  },
  'r6-console-commands': {
    title: 'Shooting Range vs ranked R6 hacks — practice and live play',
    description:
      'How Shooting Range practice differs from private aimbot and ESP in ranked: external loader workflow, presets, and tier choice on PC at r6hacks.org.',
  },
  'r6-lite-vs-pro': {
    title: 'R6 Lite vs Pro — ESP-only or aimbot for ranked on PC',
    description:
      'Compare Lite wall ESP and radar against Pro aimbot automation for Rainbow Six Siege ranked: report risk, presets, and upgrade path on r6hacks.org.',
  },
  'r6-elite': {
    title: 'Elite tier guide — loot assist, triggerbot and wall ESP',
    description:
      'When to upgrade to Elite on PC: loot assist, triggerbot, operator loadout tools, full wall ESP, and conservative day-one presets after patches.',
  },
  'r6-esp-setup': {
    title: 'Wall ESP setup — boxes, smoke alerts and ranked ranges',
    description:
      'Configure wall ESP for Rainbow Six Siege ranked: player boxes, gadget ESP, smoke alerts, distance caps, and Lite/Elite presets on PC.',
  },
  'r6-loadouts': {
    title: 'Operator loadout tools — local skin and wrap previews',
    description:
      'Loadout Pack guide: preview outfits, wraps and weapons locally on PC with your Rainbow Six Siege client — separate from Lite, Pro and Elite hacks.',
  },
  'r6-hwid-ban': {
    title: 'HWID ban vs account ban — spoofer or new account on PC',
    description:
      'After a BattlEye ban on PC: tell HWID flags from account bans, when to use HWID spoofer or UGC appeals, and safe return to r6hacks.org tiers.',
  },
  'r6-aimbot-combat': {
    title: 'Weapon aimbot guide — AR, SMG and shotgun on Pro tier',
    description:
      'Per-weapon aimbot profiles for Rainbow Six Siege Pro tier: AR spray, SMG tracking, shotgun push, smoothness presets, and ranked testing on PC.',
  },
  'r6-external-loader': {
    title: 'External loader guide — how R6 hacks run outside Siege',
    description:
      'Why external r6 hacks use a separate loader on PC, launch order before Rainbow Six Siege, cloud config sync, and BattlEye-aware updates at r6hacks.org.',
  },
};

/** Optional on-page H1 overrides (blog posts). */
export const BLOG_POST_PAGE_H1: Record<string, string> = {
  'battleye-fix':
    'BattlEye verification fix — loader reload help when Rainbow Six Siege will not launch',
  'r6-stream-proof':
    'Stream-Proof Overlay Setup — hide wall ESP and script overlays from OBS (R6 hacks)',
  'r6-practice-lobby': 'Shooting Range Practice: Aim Drills Before Ranked (R6 hacks)',
  'r6-radar':
    'Rainbow Six Siege radar — distance caps, FOV and camera zoom',
  'r6-features': 'R6 hacks features — aimbot, wall ESP, radar and Elite tools',
  'r6-lite-vs-pro': 'R6 Lite vs Pro — ESP-only or aimbot for ranked play',
  'r6-elite': 'Elite tier guide — loot assist, triggerbot and full wall ESP',
  'r6-esp-setup': 'Wall ESP setup — boxes, smoke alerts and ranked distance caps',
  'r6-aimbot-ranked': 'Ranked aimbot configs — bone priority and prediction on PC',
  'r6-aimbot-combat': 'Weapon aimbot guide — AR, SMG and shotgun profiles',
  'r6-external-loader': 'External loader guide — how R6 hacks run outside Siege',
  'r6-hwid-ban': 'HWID ban vs account ban — spoofer, UGC and recovery paths',
  'r6-loadouts': 'Operator loadout tools — local skin and wrap previews',
  'r6-hack-setup': 'Practice R6 hacks safely — Shooting Range before ranked',
  'r6-training-tips': 'Shooting Range tips — aimbot and ESP drills before ranked',
  'r6-console-commands': 'Shooting Range practice vs ranked R6 hacks on PC',
  'buy-r6-hacks': 'How to buy R6 hacks — Lite, Pro and Elite checkout walkthrough',
  'battleye-patch': 'R6 hacks BattlEye checklist — patch-day loader reload',
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

/** Product page H1 aligned with PAGE_SEO when set. */
export function productPageH1(pagePath: string, fallback: string): string {
  return getPageSeoEntry(pagePath)?.h1 ?? fallback;
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
