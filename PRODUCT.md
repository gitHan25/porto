# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js 16 (App Router) + React 19 + TypeScript + Tailwind v4, static export (`output: "export"`). Chosen by the user's spec (task/task.md). Primary deploy target: Vercel (recommended by assistant, not yet confirmed); must also work on Netlify and GitHub Pages via a single basePath setting.

## Users

Primary: recruiters and hiring managers screening junior backend / data-analyst candidates, who skim fast. Secondary: engineers and technical interviewers who want depth (repos, architecture, honest metrics). Recruiter-first, with depth one click away.

## Product Purpose

A personal portfolio for Muhammad Farhan Editya, an Informatics graduate of Telkom University (GPA 3.82/4.00), positioning him for backend engineering and junior data-analyst roles with backend and research/data work given equal weight. Success: a visitor quickly understands who he is, sees credible projects, and downloads the CV or makes contact.

## Positioning

Few junior candidates show production-style API work (Go, Java/Spring Boot, Laravel) alongside first-author published NLP research (ICERA 2026). The site keeps a restrained terminal flavour (a `farhan@portfolio ~` brand, mono role line and dates, `$ cd projects` prompts above section headings, a typed hero intro) as a signal of engineering taste, without being a literal terminal or file manager.

## Capabilities and Constraints

- Sections, in page order: hero (About merged in, with the only CV button), "How I got here" (education and experience as dated rows), "What I've built" (large-type project rows, each linking to `/projects/[slug]/`), "What I work with" (inline toolbox list), publication (citation with copy button), contact (copy address or `mailto:`, GitHub and LinkedIn icon links). Floating nav with scroll-spy. No tag filter, no sidebar.
- Motion is small and skippable: hero typing intro, typed section prompts, project-title morph to the detail page (React `ViewTransition`), mobile menu fade, copy-label fade, press feedback. All of it respects `prefers-reduced-motion`.
- All content lives in typed data files under `/content`; no portfolio text is hard-coded in components. Empty arrays hide their section.
- Design is separated from content and driven by CSS-variable tokens.
- Placeholder values (marked `[PLACEHOLDER]` in `/content`, originating in task/task.md) must stay visible and never be invented. Project 4 (the Go manufacturing-planning API) is added with a placeholder year; it has no repo link because the repo is private.
- Responsive down to 360px, no horizontal scroll, SEO and Open Graph from profile data.

## Brand Commitments

- Name: Muhammad Farhan Editya. Contact: farhaneditya03@gmail.com, github.com/gitHan25, linkedin.com/in/muhammad-farhan-editya.
- Visual direction (user-approved, sessions 2 to 4): a dark, flat, text-led single page with ruled rows, Geist for reading and JetBrains Mono for role line, dates, citation and prompts, one blue accent plus a green prompt colour. The original brief in task/design.md (monochrome terminal, file-tree sidebar) is superseded: the user rejected the file manager and the pinned scroll story. Owner dislikes pill badges, location chips, boxed cards and stat tiles; do not put a label above a heading other than the section prompt. `DESIGN.md` records the shipped system.

## Evidence on Hand

Real, verified content in task/task.md: three shipped projects, two roles, one degree, one publication. A portrait photo is on hand (`public/images/profile.jpg`, resized). Not on hand and must not be fabricated: cv.pdf, project screenshots, endpoint/table counts, moderator and survey counts, F1 comparison metric, DOI/paper link, applicant count.

## Product Principles

1. Skim path first: a recruiter gets name, positioning, top projects and CV within seconds.
2. Honest numbers only: unknown figures stay visibly open rather than invented.
3. Backend and research carry equal weight in structure and prominence.
4. Content is editable by a non-expert in one data file.
5. The interface demonstrates craft without getting in the way of reading.

## Accessibility & Inclusion

WCAG AA contrast, keyboard-operable navigation with visible focus, `prefers-reduced-motion` respected, body text 17px with nothing under 13px, mixed-case, interactive targets at least 44px, intro skippable by click, tap, scroll or key.
