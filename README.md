# Muhammad Farhan Editya - Portfolio

A static portfolio site: a dark, text-led single page with a typed hero intro and one page per project. Next.js (App Router) + TypeScript + Tailwind CSS v4, exported as plain HTML so it can be hosted anywhere.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export into ./out
npm run lint
```

`npm run build` writes the finished site to `out/`. Upload that folder to any static host.

## Where content lives

**All text lives in `/content`.** You never need to touch a component to change what the site says.

| File | What it controls |
| --- | --- |
| `content/profile.ts` | Name, title, bio, email, GitHub, LinkedIn, CV path, site URL |
| `content/about.ts` | The hero: headline, body paragraph, and your personal lines |
| `content/projects.ts` | Projects (rows on the home page and `/projects/[slug]` pages) |
| `content/experience.ts` | Work and lab-assistant roles |
| `content/education.ts` | Degree, GPA, thesis, coursework |
| `content/publications.ts` | Publications (highlighted in the Publication section) |
| `content/skills.ts` | The "What I work with" list |

Every file is a typed array of objects. To add something, copy an entry, paste it below, and edit it. If an array is empty, its section disappears.

### Add a project

Open `content/projects.ts`, copy an existing object, and change the fields:

```ts
{
  slug: "my-new-project",        // the page URL
  title: "My New Project",
  year: 2026,
  kind: "Solo project",
  tags: ["Backend"],             // Backend | Data/ML | Mobile | Research
  stack: ["Go", "PostgreSQL"],
  summary: "One sentence.",
  bullets: ["What you built.", "What you measured."],
  links: [{ label: "repo", href: "https://github.com/..." }],
}
```

It appears as a row in the project list on the home page and gets its own page at `/projects/my-new-project/`. The Go manufacturing-planning project is already in that file (no repo link, the repo is private).

### Placeholders

Anything written as `[PLACEHOLDER: ...]` is a fact only you can supply. These show on the site with a dashed underline so they are easy to spot. Replace the whole bracketed text with the real value, or delete the sentence if it does not apply. Search the repo for `PLACEHOLDER` to list them all. A link whose address is still a placeholder shows as plain text instead of a dead link.

## CV and images

- Put your CV at `public/cv.pdf`. The hero's "Download CV" button links to it.
- Put images in `public/images/`. Reference them with the `asset()` helper in `lib/placeholder.ts` so they keep working under a GitHub Pages sub-path.

## Design

The palette and type scale are tokens in the `@theme static` block at the top of `app/globals.css`. Edit those values to recolor the site.

The page is one scroll: floating nav, hero (name, role and headline type themselves on a fresh page load, then the portrait wipes in), "How I got here" as dated rows, "What I've built" as large-type project rows that link to a page each, "What I work with", Publication (with a copy-citation button), and Contact (copy the address, or mail it). The nav highlights the section you are in.

Motion is small and skippable: the hero intro (click, tap, scroll or a key finishes it), a typed `$ cd ...` line above each section heading, the project title that morphs into the detail page heading (React `ViewTransition`), a fade-and-scale mobile menu, label fades on the copy buttons, and press feedback on buttons and icons. Everything turns off or simplifies when the visitor prefers reduced motion.

Keyboard: every control is reachable with Tab and has a visible focus ring. Project rows are single links.

### Images and animations

Until you add real files, the portrait and every project show an animated placeholder frame, so the layout is already final.

- **Portrait:** in `content/profile.ts` set `portrait: { src: "/images/portrait.jpg", alt: "..." }`.
- **Project screenshot or clip:** in `content/projects.ts` add `media: { src: "/images/tastecraft.png", alt: "..." }` to the project. Use `kind: "video"` for an `.mp4` or `.webm` (it autoplays muted and loops).
- Put the files in `public/images/`. Screenshots look best at 16:9, the portrait at 4:5.
- Resize photos before adding them. A phone photo is several MB, and a static site serves the file as-is. About 1000px wide at JPEG quality 75-80 is plenty. Keep originals outside `public/` (this repo uses `source-images/`).

## Deploy

The site is a static export, so no server is needed.

**Vercel**

```bash
npm i -g vercel
vercel --prod
```

**Netlify**

```bash
npm i -g netlify-cli
npm run build && netlify deploy --prod --dir=out
```

**GitHub Pages**

For a project site (`https://<user>.github.io/<repo>/`), open `next.config.ts`, set `repo` to your repository name, and set `isGithubPages = true`. That is the only change. Then:

```bash
npm run build
```

Publish the `out/` folder (for example with the `gh-pages` branch or a GitHub Actions Pages workflow). For a user site (`https://<user>.github.io/`) or a custom domain, leave the file as it is.

After deploying, set `siteUrl` in `content/profile.ts` so Open Graph links resolve.
