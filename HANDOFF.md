# Handoff: portfolio site for Muhammad Farhan Editya

Updated in session 4 (2026-10-28). Read this first, then `PRODUCT.md`. `README.md` was refreshed in session 4. `DESIGN.md` was regenerated from the shipped site and `PRODUCT.md` was brought up to date, both in session 4.
Sessions 1 and 2 are summarised only where they still matter. The session 1 layout (sidebar file manager, pixel story) no longer exists.

## What this is

Static personal portfolio (Next.js 16 App Router, React 19, TypeScript, Tailwind v4, `output: "export"`).
Positions Farhan for backend engineering and junior data-analyst roles, backend and research at equal weight.
Original spec: `task/task.md` (content) and `task/design.md` (older visual brief, partly superseded by the layout below).

## Current state (verified this session)

- `npx eslint .`: clean. `npx tsc --noEmit`: clean. `npx next build`: passes, 7 static pages (home, 3 project pages, not-found).
- Real-Chrome checks at 390px (device emulation) and 1440px: no horizontal overflow, no tap target under 44px, no text under 13px, nav active state works, copy buttons work (clipboard verified), mobile menu opens.
- NOT verified: a real phone or Safari, the typing intro watched at real speed on mobile, a Lighthouse or performance run, Windows high-contrast.
- Nothing is committed (`git log` has only the scaffolder's commit). Do not commit unless the user asks.
- Dev server: the user's original server on port 3000 disappeared mid-session. The only one running was started by the agent on **port 3001** (`npm run dev`). It may not be running now. Stop it when done.

## Layout as built (all five sections were prototyped with /prototype and picked by the user)

Order on `/`:

1. **TopBar** (floating pill, `components/TopBar.tsx`): brand, links Path / Projects / Publication / Contact, mobile Menu. No CV button. Scroll-spy sets `aria-current="location"` (IntersectionObserver band plus a "bottom of page selects the last link" rule).
2. **Hero** (`components/Hero.tsx` + `components/Typed.tsx`): name, role, headline, one body paragraph, the visible personal-lines placeholder, "See projects" and "Download CV" (the only CV button on the site), status line, portrait. About was merged into the hero; there is no About section or nav link anymore. Copy lives in `content/about.ts` as `{ headline, body, personal }`.
3. **Path** ("How I got here", `PathSection` in `components/Sections.tsx`): dated rows (13rem period column), tools shown with `StackMarks`.
4. **Projects** ("What I've built", `ProjectIndex`): "Large type" rows, the whole row links to `/projects/[slug]/`. Stack shown as logos only (`StackMarks` in `components/StackIcons.tsx`), name in a tooltip on pointer hover, plus a hidden screen-reader line. The long alternating bands are gone from home; `components/ProjectBand.tsx` is used only by the detail pages.
5. **Toolbox** ("What I work with", `ToolboxSection`): "Inline" list, a small logo before each name, no hover needed, nothing focusable.
6. **Publication** (`PublicationSection`): title, a mono citation line, "Copy citation" button (`components/CopyButton.tsx`) and the paper link.
7. **Contact** (`ContactSection`): "Email me", "Copy address", the address in mono, then GitHub and LinkedIn as icon-only links (44px, `lib/social-icons.ts`), and a footer with location and "back to top".

### Hero intro (user explicitly wants this kept)

On a fresh page load without reduced motion, `layout.tsx` sets `data-typing="1"` and `data-intro="1"` on `<html>` before paint. `Typed.tsx` types name (20 cps), role (32 cps), headline (40 cps) with 250 ms gaps, starting at 300 ms. Timeline and delays are documented in `app/globals.css` ("Intro" comment) and `Hero.tsx` (`after(3300 / 3700 / 4000)` ms for body, buttons, status). The portrait does a clip-path wipe at 1400 ms. A click, tap, wheel or key (not Tab) finishes everything. `INTRO_END_MS` (5400) in `Typed.tsx` must stay longer than the last CSS delay plus duration. The user said it "feels too fast" earlier, so speeds were slowed; they approved the current pacing ("its good for now"). Tune via `cps` in `Typed.tsx` and the delays in `Hero.tsx`.

## Motion added in session 4 (from `/find-animation-opportunities`; the user reviewed each one)

1. **Project title morph** (home row to detail page): `ViewTransition name="project-{slug}" share="morph" default="none"` wraps `.pj-title` in `Sections.tsx` and the detail `h1` in `ProjectBand.tsx` (only when `headingLevel === 1`). Timing lives in `globals.css` (`::view-transition-group(.morph)` 320ms, root crossfade 180ms, instant under reduced motion). Two fixes were needed for it to feel right: `app/projects/[slug]/page.tsx` wraps its content in a plain `<div>` (Next scrolls the first element of a new page into view, and the sticky `TopBar` made that land mid-page, hiding the title), and `<html data-scroll-behavior="smooth">` in `layout.tsx` stops the site's `scroll-behavior: smooth` from animating the scroll during navigation.
2. **Section prompts**: `components/Prompt.tsx` (client) renders `$ cd projects` etc. above each heading via `SectionHead`'s `cmd` prop. Typed once per page load (45 cps) when it scrolls in; full text is in the markup, hidden from screen readers; the caret shows only while typing. Reduced motion shows the text at once.
3. **Mobile menu**: `.topnav` fades and scales in (180ms, `@starting-style`, `transition-behavior: allow-discrete`) and fades out in 120ms. Mobile only.
4. **Copy button label fade**: `CopyButton.tsx` keys the label per state so each swap fades in (160ms); a hidden sizer keeps the width. Shows `✓ Copied`. Not animated on first paint.
5. **Nav link hover fade** (120ms, hover-capable pointers only) and **press feedback** (`.menu-btn` scale 0.95, `.ct-icon` scale 0.92).
Rejected on purpose: hover-revealed project info, always-blinking cursors, a Ctrl+K palette animation, CRT/scanline effects, extra stagger on Path and Toolbox.

## Polish pass (end of session 4)

Keyboard and cleanup fixes, no visual redesign: hero buttons use `visibility: hidden` in the `hero-in` keyframe so they are not focusable before they appear; skip link (`.skip`, `<main id="main">` on both routes); mobile menu closes on Escape or outside tap (`TopBar.tsx`); desktop nav links are 44px tall; copy button uses a drawn check icon; en dashes in periods, ranges and two project titles; removed dead CSS (`.badge`, `.chip-loc`, `.card`, `.meta-chip`, `.check`, `.term*`) and unused `CvButton` and `Term`. `.stack-tile` and `.chip` are NOT dead (detail pages use them). `impeccable detect` drift is down to 14 advisory findings (off-scale font sizes and two radii). The critique snapshot of 2026-10-28 stays open because its two P1 items are not done.

## Next session: start here

1. Nothing is committed. Ask the user whether to commit (the working tree has the whole rebuild; the only commit is the scaffolder's).
2. Ask which open critique item to do next. The two P1s are the biggest wins: move Projects and Publication earlier (Hero, Projects, Publication, Path, Toolbox, Contact was suggested), and show stack names as a mono text line in project rows (logos only in Toolbox).
3. Then P2: monotone section rhythm; intro replays on every reload (suggest once per session); CTAs near the fold on mobile. P3: dense Path prose.
4. User-owned and still open: a screenshot for the manufacturing project, any remaining `[PLACEHOLDER]` values, and the deploy itself (domain handitya.tech; Vercel recommended). Link preview image: `app/opengraph-image.jpg` and `app/twitter-image.jpg` (1200x630, generated with Pillow from the site palette and `public/images/profile.jpg`; Next serves them as og:image and twitter:image, card type is summary_large_image). To change it, regenerate the JPEG and keep the same file names. Domain handitya.tech (checked 2026-10-29): nameservers are ns1-4.dns.host (ClouDNS), and it has no A, AAAA, CNAME or TXT records yet and no www host, so after the Vercel project exists, add the records in the registrar's "DNS Records" tab (keep the default nameservers).
5. Run `impeccable-finish-reviewer`, then re-run `/impeccable critique` (last: 22/32).

## File map

- `content/*.ts`: ALL portfolio text. `about.ts`, `profile.ts`, `projects.ts`, `experience.ts`, `education.ts`, `publications.ts`, `skills.ts`. Components must not hard-code content. Empty arrays hide their section.
- `app/globals.css`: tokens in one `@theme static` block plus layered component CSS (`@layer base` / `components`). New blocks added this session: `.hero*`, `.tw*` (typing), `.pj-*` (project rows), `.tb-*` (toolbox), `.pub*`, `.ct-*`, `.topbrand`, nav active state. Reduced-motion rules at the bottom.
- `app/page.tsx` composes the sections; `app/projects/[slug]/page.tsx` renders `ProjectBand` for one project.
- `lib/stack-icons.ts` (simple-icons by name), `lib/social-icons.ts` (GitHub from simple-icons; LinkedIn is a hand-drawn "in" tile because simple-icons removed it), `lib/placeholder.ts` (`isPlaceholder`, `asset`).
- `components/Text.tsx`: renders `[PLACEHOLDER ...]` with a dashed underline. `Reveal.tsx`: one-time fade-up for sections below the fold. `ui.tsx`: `SectionHead`, `CvButton` (now unused: the hero has its own CV anchor, safe to delete), `Term` (likely unused too), `MediaSlot`.
- `.impeccable/critique/`: two critique snapshots from this project. `.impeccable/` is tooling output, safe to leave. `source-images/profile.original.jpg` is the user's original photo (kept out of `public/`).
- `eslint.config.mjs` ignores `.claude/`, `.agents/`, `.impeccable/`.

## Open items

### User-owned (never invent)

1. `public/cv.pdf` is in place (the user's file was `CV.pdf`; renamed to lowercase because Linux hosts are case-sensitive).
2. Project screenshots: TasteCraft (3 phone screens) and GoHealthy (2 web screens) are in `public/images/` and attached via `media` (now an array with real `width`/`height`) in `content/projects.ts`; `MediaGallery` in `components/ui.tsx` shows them uncropped (portrait shots in one row, others stacked). The paper's first page (`paper-first-page.png`) is on the sentiment project. Still missing: the manufacturing project (placeholder frame). The TasteCraft shots are small (231-339px wide), so a higher-resolution capture would look sharper on retina screens.
3. The `[PLACEHOLDER: ...]` values, all in `/content` and shown with a dashed underline:
   - `about.ts` `personal`: the user's own lines (kept visible in the hero on purpose).
   - `projects.ts`: prior-work F1 comparison, cause of the 16.1-point drop, GoHealthy repo link (the sentiment project has no repo link: it is private, and its paper link is the IEEE Xplore page), TasteCraft endpoint/table/moderator counts, GoHealthy symptom/table count/deployment/survey count/repo.
   - `experience.ts`: applicant count, PSDMBP monthly users.
   - `publications.ts`: done, links to https://ieeexplore.ieee.org/document/11666735.
   - `skills.ts`: PostgreSQL (keep only if actually built against it).
   - `profile.ts`: `siteUrl` set to https://handitya.tech.
4. The Go project ("Manufacturing Planning API", slug `manufacturing-planning-api`) is in `projects.ts`. The list is sorted newest year first in code (same-year entries keep their written order; a placeholder year sorts last), so the order in the file does not matter except for ties. Its title is a descriptive name the agent chose (the user gave none) and its `year` is a `[PLACEHOLDER: year]`: ask the user for the real name and year. No repo link (private).
5. The citation line is IEEE style, built from `publications.ts` (authors, title, booktitle, year, pages, DOI) taken from the user's own BibTeX; a second button copies that BibTeX verbatim. The old display venue "ICERA, Yogyakarta (hybrid)" was dropped because the BibTeX booktitle is the official name.
6. Deploy target not confirmed (Vercel recommended; Netlify works unchanged; GitHub Pages needs one edit in `next.config.ts`).

### Agent-owned (pending)

1. ~~Regenerate `DESIGN.md` and update `PRODUCT.md`~~ done in session 4 (`impeccable detect` drift findings dropped from 33 to 16; the rest are dead CSS and off-ramp sizes/radii the build still carries). Names like "Quiet Terminal" and the colour names in DESIGN.md are the agent's wording, so the user may want to rename them.
2. ~~Refresh `README.md`~~ done in session 4.
3. **Run `impeccable-finish-reviewer`** on the current build. `/impeccable critique` was re-run in session 4 and scored **22/32** (saved in `.impeccable/critique/`); its open issues are listed next.
3a. **Open critique items (the user has not chosen a direction yet; they said the layout is already better):** P1 proof is buried (order is Hero, Path, Projects, Toolbox, Publication, Contact; suggested Projects and Publication earlier); P1 project stack names are logos only and hover-gated (suggested a mono text line, logos only in Toolbox); P2 monotone section rhythm and uneven spacing; P2 hero buttons are focusable while invisible during the intro, CTAs near the fold on mobile, intro replays on every reload (suggested once per session); P3 Path prose is dense and full contrast. Minor: Menu dropdown does not close on outside tap or Escape, no skip-to-content link, four desktop nav links are 38px tall, hyphens used for dashes.
4. Known weak spots: project logo names are hover-only on touch (screen readers get a hidden list); TasteCraft shows the Laravel logo twice (Sanctum maps to Laravel's mark); fastText has no logo and shows as text; the Path section lede ("A degree in Informatics, then the lab...") is hard-coded text that will not mention a fourth entry; dead CSS may remain (`.badge`, `.chip-loc`, `.card`, `.meta-chip`, `.stack-tile*` used by detail pages only).
5. Nav: on detail pages the links are `/#projects` etc., so the active state does not apply there.

## User preferences and decisions (still binding)

- Wants a short plan or prototype approved before a build, one clear recommendation, not option lists. Works section by section: `/impeccable shape` or a brief, then `/prototype` with three variants behind a picker, user picks, agent integrates and deletes the prototype folder. Sections are done in order; all five are finished.
- Dislikes pill badges, location chips, boxed cards, stat tiles. Keep text-based ruled rows. Do not put a label above a heading.
- Visual style stays as-is (the user chose "leave the visual style"), so the four step colours and pill nav were NOT changed.
- Performance matters: lazy, capped, pausable, reduced-motion safe. Verify in a real browser, measure, do not claim.
- No invented facts: placeholders stay visible and unresolved.
- Language: casual English or Indonesian; never other languages (an answer in German was a mistake). Reply plainly.

## Gotchas

- **Static-export prefetch 404s:** on a plain static server the built site logs 404s for `/projects/<slug>/__next.projects.$d$slug.__PAGE__.txt?_rsc=...` (prefetch of the dynamic route). Client navigation still works (tested). Check the Network tab once on the real host; if it also shows there, it is only a missed prefetch.
- `main { overflow-x: clip }` and a right-aligned last `.stack-name` tooltip stop the stack-name tooltips from widening phone pages (found on the sentiment page at 390px).

- **Repo hygiene (session 4):** `.agents/`, `.claude/`, `.codex/`, `.impeccable/`, `skills-lock.json`, `source-images/` and `task/` are in `.gitignore` and were untracked with `git rm --cached` (files are still on disk, the AI skills keep working). Only the site (`app`, `components`, `content`, `lib`, `public`, configs, and the docs) is tracked. The initial scaffolder commit had tracked the skills, so a commit will show them as deleted: that is intended.

- **Dev server on port 3000 is the user's** and sometimes serves a stale stylesheet even after `touch app/globals.css` (seen with the mobile menu rules). The production build is the source of truth: run `npx next build`, serve `out/` with `python -m http.server`, and test there. Stop any server you start.
- **Dev-server Tailwind/CSS staleness:** after adding NEW files or classes, the dev server's stylesheet sometimes does not recompile. Symptom: unstyled or giant SVG icons. Fix: `touch app/globals.css` (or save it again) and wait a few seconds. For throwaway prototypes, plain CSS on the site tokens avoided the problem.
- Unlayered custom CSS beats Tailwind utilities; keep component CSS inside `@layer`. `@theme static` holds tokens.
- Tailwind v4 is wired through a turbopack loader rule in `next.config.ts`; do not remove it.
- This is Next 16: read `node_modules/next/dist/docs/` before using unfamiliar APIs (`AGENTS.md`). Route `params` is a Promise.
- React Compiler lint rules reject refs read in render and assigning `window.location.hash`; use effects and handlers. `react-hooks/set-state-in-effect` flags `setState` directly in an effect body.
- Handy test pattern from session 4: spawn Chrome with `--remote-debugging-port` and a throwaway `--user-data-dir`, drive it over CDP from a Node script in the scratchpad, sample `getComputedStyle` per frame to verify an animation.
- Headless Chrome CLI cannot render below about 500px wide. For phone checks drive Chrome over DevTools (spawn with `--remote-debugging-port`, talk over the WebSocket with Node 22's global `WebSocket`, `Emulation.setDeviceMetricsOverride`). Sections fade in on scroll (`Reveal`), so scroll the page before a full-page capture or the lower sections look blank. Headless virtual time does not pace CSS animations accurately.
- The agent's auto-mode refused to kill a process it did not start (the user's original dev server). Do not kill other processes.
- The Bash tool chokes on very long heredocs; use the Write tool for large files. Windows 11, PowerShell primary.
- `/prototype` flow used: build `app/prototypes/<section>/` (picker.css verbatim from `.claude/skills/prototype/PICKER.md`, variants, harness, page), screenshot, user picks, integrate into the real component and `rm -rf app/prototypes`. None exist now.
- The round "N" badge bottom-left in dev is Next's dev indicator, not part of the site.
