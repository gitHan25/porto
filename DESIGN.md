---
name: Muhammad Farhan Editya Portfolio
description: A dark navy engineer's portfolio where ruled rows, large type and a typed terminal voice carry the work, with one blue accent and a green prompt.
colors:
  bg: "#0e1116"
  surface: "#161b22"
  raised: "#1d232c"
  border: "#2a313c"
  text: "#e6eaf0"
  muted: "#9aa4b2"
  subtle: "#7d8796"
  accent: "#6ea8ff"
  build: "#5fd39a"
  stack: "#e5b567"
  problem: "#ff8a80"
typography:
  display:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 6vw, 5rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4.2vw, 3.25rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 4vw, 3rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  lead:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 2.6vw, 2.125rem)"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  ui:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 500
    lineHeight: 1.65
  mono:
    fontFamily: "JetBrains Mono, ui-monospace, SF Mono, Menlo, monospace"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "JetBrains Mono, ui-monospace, SF Mono, Menlo, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.65
rounded:
  ctl: "8px"
  win: "14px"
  portrait: "20px"
  menu: "20px"
  tip: "6px"
  pill: "999px"
spacing:
  xs: "0.25rem"
  sm: "0.75rem"
  md: "1.5rem"
  lg: "2.25rem"
  xl: "4rem"
  gutter: "clamp(1rem, 4vw, 2.5rem)"
  measure: "62ch"
  container: "76rem"
components:
  button-solid:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.bg}"
    typography: "{typography.ui}"
    rounded: "{rounded.ctl}"
    padding: "0 1.1rem"
    height: "44px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    typography: "{typography.ui}"
    rounded: "{rounded.ctl}"
    padding: "0 1.1rem"
    height: "44px"
  button-outline-hover:
    backgroundColor: "{colors.raised}"
    textColor: "{colors.text}"
  nav-pill:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.muted}"
    rounded: "{rounded.pill}"
    padding: "0.35rem 0.5rem 0.35rem 1.25rem"
    height: "3.5rem"
  nav-link:
    textColor: "{colors.muted}"
    typography: "{typography.ui}"
    rounded: "{rounded.pill}"
    padding: "0.4rem 0.8rem"
  nav-link-current:
    backgroundColor: "{colors.raised}"
    textColor: "{colors.text}"
  menu-button:
    textColor: "{colors.text}"
    rounded: "{rounded.pill}"
    padding: "0 1rem"
    height: "44px"
  project-row:
    textColor: "{colors.text}"
    typography: "{typography.title}"
    padding: "2.25rem 0"
  project-row-hover:
    textColor: "{colors.accent}"
  toolbox-group:
    textColor: "{colors.muted}"
    typography: "{typography.label}"
    padding: "1.25rem 0"
  citation:
    textColor: "{colors.muted}"
    typography: "{typography.mono}"
    padding: "2rem 0"
  icon-link:
    textColor: "{colors.subtle}"
    rounded: "{rounded.ctl}"
    size: "44px"
  section-prompt:
    textColor: "{colors.muted}"
    typography: "{typography.mono}"
  prompt-glyph:
    textColor: "{colors.build}"
  tooltip:
    backgroundColor: "{colors.raised}"
    textColor: "{colors.text}"
    typography: "{typography.label}"
    rounded: "{rounded.tip}"
    padding: "0.25rem 0.6rem"
  portrait:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.portrait}"
    width: "22rem"
---

# Design System: Muhammad Farhan Editya Portfolio

## Overview

**Creative North Star: "The Quiet Terminal"**

A calm dark-navy page that speaks in the voice of a terminal without costuming itself as one. The ground is a deep blue-black, text is cool off-white, and one blue accent does the work of links, actions and the result of a story. The terminal is a voice rather than a window: section headings are introduced by a typed prompt such as `$ cd projects` in JetBrains Mono, the hero types its own name, and a green prompt colour marks "build". Everything else is plain Geist set large on ruled rows.

Structure comes from hairlines and type size, not from containers. Projects are large-type rows between 1px rules, the toolbox is an inline list under a mono group label, the publication is a title and a citation between two rules. The owner dislikes pill badges, location chips, boxed cards and stat tiles, so the page deliberately has none in use. Depth is nearly absent: one floating pill nav is the only lifted surface.

Motion is deliberate and rare: a slow typed intro that can be skipped, a one-time fade-up on scroll, a title that travels from the home row to its detail page. It always has a reduced-motion equivalent.

**Key Characteristics:**
- Dark navy ground (#0e1116), cool off-white text, one blue accent (#6ea8ff), one green prompt colour (#5fd39a).
- Geist for reading and headings, JetBrains Mono for role line, dates, citation, prompts and labels.
- Ruled rows and whitespace instead of boxes, chips and tiles.
- A floating 999px pill nav as the single elevated surface.
- Four story colours on project detail pages, always paired with a text label.
- Accessibility floor: 44px targets, 13px minimum text, AA contrast (lowest measured 4.76:1).

## Colors

A blue-black navy field with a cool grey text ladder, a single blue accent for action, and three warm-to-green story colours that appear only where a labelled step needs them.

### Primary
- **Signal Blue** (accent, #6ea8ff): links, the solid button fill, the focus ring, the hero role line, the typing caret, project-row hover title and arrow, and the "result" step. Text on it is the ground colour.

### Secondary
- **Prompt Green** (build, #5fd39a): the `$` prompt glyph, the status dot, check marks, and the "build" step.

### Tertiary
- **Amber Stack** (stack, #e5b567): the "stack" step label and its mono chips on detail pages.
- **Coral Problem** (problem, #ff8a80): the "problem" step label on detail pages.

### Neutral
- **Midnight Ground** (bg, #0e1116): page, html and theme-color; also the fill for stack tiles and the text colour on solid buttons.
- **Slate Surface** (surface, #161b22): the pill nav, mobile menu, portrait and media slots.
- **Raised Slate** (raised, #1d232c): hover and current-page fill for nav links and outline buttons, tooltips.
- **Hairline** (border, #2a313c): every rule, the pill outline, button outlines, scrollbar thumb.
- **Cool White** (text, #e6eaf0): headings and body (15.7:1 on bg).
- **Fog** (muted, #9aa4b2): secondary prose, nav links, prompts, citations (7.5:1).
- **Dim Fog** (subtle, #7d8796): icons, arrows, footer text, hover border on buttons (5.2:1).

### Named Rules
**The One Voice Rule.** Blue is the only interactive colour. Green means "built" or "prompt", never "go". Do not introduce a second action colour.

**The Label Beside Colour Rule.** The four step colours (problem coral, build green, stack amber, result blue) never appear without a text label naming the step. Colour is never the only carrier of meaning.

**The Contrast Floor Rule.** Nothing dimmer than Dim Fog (#7d8796) carries text. Measured lowest contrast in the shipped build is 4.76:1; do not go below AA.

## Typography

**Display Font:** Geist (with ui-sans-serif, system-ui, sans-serif)
**Body Font:** Geist
**Label/Mono Font:** JetBrains Mono, weights 400 and 500 (with ui-monospace, SF Mono, Menlo, monospace)

**Character:** Geist is neutral and modern and sets large without ornament; JetBrains Mono supplies the terminal voice in small, quiet doses. Headings are semibold with tight negative tracking and balanced wrapping.

### Hierarchy
- **Display** (600, clamp(2.75rem, 6vw, 5rem), 1.1): the hero name only.
- **Headline** (600, clamp(2rem, 4.2vw, 3.25rem), 1.1): section headings.
- **Title** (600, clamp(1.75rem, 4vw, 3rem), 1.08): project row titles and the matching detail-page h1; the publication title uses clamp(1.5rem, 3vw, 2.25rem) at 1.15.
- **Lead** (500, clamp(1.5rem, 2.6vw, 2.125rem), 1.2, max 26ch): the hero headline.
- **Body** (400, 1.0625rem / 17px, 1.65, max 62ch): prose, in Fog for secondary copy.
- **UI** (500, 0.9375rem, buttons and nav links): 1.0625rem for nav links in the mobile menu.
- **Mono** (400, 0.9375rem, 1.7): the hero role line (1.0625rem, Signal Blue), dates, the citation (0.875rem), section prompts, contact address.
- **Label** (400 to 500, 0.8125rem to 0.875rem): group labels, step labels (0.875rem, 500), tooltips and tags (0.8125rem). 0.8125rem (13px) is the minimum anywhere.

### Named Rules
**The Voice Split Rule.** Geist is the person and the argument; JetBrains Mono is the machine and the record (role, dates, citation, prompts, labels). Do not set paragraphs in mono or headings in mono.

**The No Label Above Heading Rule.** Do not stack a small label over a heading. The section prompt is the single exception and it is a typed command, not a kicker.

## Layout

One centered column, `.wrap`, at most 76rem with a fluid gutter of clamp(1rem, 4vw, 2.5rem). Sections sit one under another in this order: hero, Path, Projects, Toolbox, Publication, Contact. Vertical rhythm is large and uneven by section: sections take roughly 4 to 5rem of padding top and bottom, rows 1.25 to 2.25rem inside their rules.

The hero is a two-column grid from 1024px (copy 1.35fr, portrait 1fr, 5rem gap) and stacks below. The portrait is capped at 22rem and aspect 3/4. Path rows and toolbox groups use a 13rem label column plus content from 768px. Project rows put the proof copy and a 16rem logo column under the title from 768px. Prose stays within 62ch. The sticky pill nav sits 0.75rem from the top and sections scroll with 5.5rem of top padding so anchors land clear of it.

Breakpoints in use: 768px (nav collapses to a Menu button below 768px; row columns open above it) and 1024px (hero columns).

## Elevation & Depth

Essentially flat. Depth is tonal and linear: Midnight Ground, then Slate Surface for the few filled surfaces, Raised Slate for hover and current states, and 1px Hairline rules everywhere. The only real shadow lifts the floating pill nav so it reads as hovering above scrolling content.

### Shadow Vocabulary
- **Nav lift** (`box-shadow: 0 12px 32px -16px rgb(0 0 0 / 0.7)`): the floating pill nav only.

### Named Rules
**The Hairline Rule.** Separate content with a 1px #2a313c rule, not with a box or a shadow. The pill nav is the one lifted element; do not add a second.

## Shapes

Mixed by role, not by accident. Interactive controls are small-radius rectangles (8px). Navigation is a full pill (999px), including its links and the Menu button. The portrait is a large soft rectangle (20px) revealed by a bottom-up clip-path wipe. The mobile menu panel is 20px, tooltips are 6px, small tiles 12px. Rows and sections have no corners at all, only top and bottom rules. Circles appear only as the 0.5rem status dot.

## Components

The feel is quiet and typographic: controls are plain outlined rectangles, the page's size and rules do the structure.

### Buttons
- **Shape:** gently curved rectangle (8px), 44px minimum height, 0 1.1rem padding, 0.9375rem at weight 500.
- **Solid:** Signal Blue fill with Midnight Ground text; hover mixes the fill 15% toward white.
- **Outline (default):** transparent with a 1px Hairline border and Cool White text; hover fills Raised Slate and lifts the border to Dim Fog.
- **Press:** scales to 0.98 on active over 180ms.
- **Copy button:** a hidden sizer reserves the widest label so the width never jumps; the label swaps with a 160ms fade and 4px rise, and shows a check mark and "Copied".

### Navigation
- **Style:** floating pill, max 62rem, 3.5rem tall, Slate Surface with a Hairline border and the nav lift shadow. Brand on the left, links on the right (Path, Projects, Publication, Contact).
- **States:** links are Fog on transparent; hover (pointer devices only) and the scroll-spied `aria-current="location"` link both take Raised Slate with Cool White text. Hover fades over 120ms.
- **Mobile (below 768px):** the links collapse behind a 44px Menu pill button (press scale 0.95). The panel (20px radius, Slate Surface) fades and scales in from 0.97 over 180ms on `cubic-bezier(0.23, 1, 0.32, 1)` and fades out in 120ms. Reduced motion keeps the fade only.

### Hero Intro
Name, role line and headline type one after another (20, 32 and 40 characters per second, starting at 300ms). The portrait wipes up with a clip-path over 1100ms at 1400ms while the image settles from 1.08 scale; body, buttons and status fade up 10px behind the headline (520ms). Any click, tap, wheel or non-Tab key skips it. Full text is always in the markup, and reduced motion shows everything immediately. A blue caret blinks only while typing.

### Project Rows
- **Style:** the title is the row. Large-type title (Title style, max 22ch) with a right-aligned arrow in Dim Fog, a kind line in Fog, proof copy in Fog, and a logo mark column. Rows are separated by 1px rules, top and bottom of the list.
- **Hover (pointer devices only):** title turns Signal Blue, arrow turns blue and nudges 4px right (180ms); a logo mark brightens to Cool White and shows a tooltip.
- **Morph:** the title carries a view transition to the detail-page h1 (320ms, `cubic-bezier(0.32, 0.72, 0, 1)`) while the rest of the page crossfades in 180ms.

### Toolbox
One ruled row per group: a mono Fog group label in a 13rem column and an inline wrapping list, each name preceded by an 18px Dim Fog logo. Nothing is focusable and nothing needs hover.

### Publication
Large title (max 30ch) between two Hairline rules, then a mono 0.875rem citation in Fog (max 62ch), then a Copy citation button and the paper link.

### Contact
"Email me" (solid) and "Copy address" (outline), the address in mono, then icon-only GitHub and LinkedIn links: 44px square targets, 1.5rem icons in Dim Fog turning Cool White on hover, press scale 0.92. The footer line is 13px with 44px-tall links.

### Section Prompt
A mono 0.9375rem Fog line such as `$ cd projects` above each section heading, with a Prompt Green `$`. It types once per page load (about 45 characters per second) when scrolled into view; a hidden sizer reserves the line, and screen readers skip it. Reduced motion shows it at once.

### Story Steps (detail pages)
Mono step labels at 0.875rem and weight 500 in Coral (problem), Prompt Green (build), Amber (stack) or Signal Blue (result). Stack tags are mono 13px with an amber-tinted outline. Tiles are 3.5rem squares at 12px radius with a name tooltip on hover or focus.

### Motion
Eases: `cubic-bezier(0.23, 1, 0.32, 1)` for UI response (menu, hero fade, arrow) and `cubic-bezier(0.16, 1, 0.3, 1)` for reveals. Durations: 120 to 320ms for UI, 500 to 1100ms for intro and reveal. Sections below the fold fade up 14px once over 0.7s and never reverse. Reduced motion (final block of globals.css) removes transitions on buttons, nav, rows and icons, sets scroll to auto, stops the caret, makes the morph instant and the copy label a plain fade.

## Do's and Don'ts

### Do:
- **Do** separate content with 1px #2a313c rules and generous whitespace; let size and rules form the rows.
- **Do** keep blue as the only interactive colour and green for prompt and "build".
- **Do** pair every step colour with its text label.
- **Do** keep every touch target at least 44px, and body text and labels at 13px or larger.
- **Do** keep text at AA or better; Dim Fog (#7d8796) is the dimmest text colour (lowest measured 4.76:1).
- **Do** use JetBrains Mono for role line, dates, citation, prompts and labels, and Geist for everything else.
- **Do** gate hover effects behind `(hover: hover) and (pointer: fine)` and give every animation a reduced-motion equivalent.
- **Do** use `cubic-bezier(0.23, 1, 0.32, 1)` for UI and `cubic-bezier(0.16, 1, 0.3, 1)` for reveals, 120 to 320ms and 500 to 1100ms respectively.

### Don't:
- **Don't** add pill badges, location chips, boxed cards or stat tiles; the owner dislikes them.
- **Don't** put a small label above a heading; the typed section prompt is the one allowed line.
- **Don't** add a second action colour, gradients, glow, scanlines or CRT effects.
- **Don't** add shadows beyond the pill nav's lift, or lift any other surface.
- **Don't** hide meaning behind hover only; touch and screen-reader users need the name too.
- **Don't** make animations loop, or run them without a skip or reduced-motion path; the caret never blinks outside typing.
- **Don't** use colour as the only signal, or set text below 13px.
