export type ProjectTag = "Backend" | "Data/ML" | "Mobile" | "Research";

export interface ProjectLink {
  label: string;
  href: string; // a [PLACEHOLDER ...] string renders as plain text, not a link
}

/**
 * Screenshots for a project, shown on its page in the order given. Leave `media` out and
 * the page shows a placeholder frame instead. To add one: put the file in /public/images
 * and add, e.g.
 *   { src: "/images/tastecraft-home.png", alt: "TasteCraft home screen", width: 245, height: 488 }
 * where width and height are the image's real pixel size (they reserve the space, so the
 * page does not jump while it loads). All portrait images sit side by side, anything else stacks.
 */
export interface ProjectMedia {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Project {
  media?: ProjectMedia[];
  slug: string; // the /projects/[slug] URL
  title: string;
  year: number | string; // a [PLACEHOLDER ...] string is shown highlighted
  kind: string; // role or project type
  tags: ProjectTag[];
  stack: string[];
  summary: string;
  /** Story step 1: what the project had to solve. */
  problem: string;
  /** Story step 2: my own part, one sentence each. */
  built: string[];
  /** Story step 4: what came out of it. */
  result: string[];
  links: ProjectLink[];
}

const entries: Project[] = [
  {
    slug: "cross-domain-sentiment-analysis",
    title: "Cross-Domain Sentiment Analysis for Indonesian",
    year: 2026,
    kind: "Undergraduate thesis",
    tags: ["Data/ML", "Research"],
    stack: ["Python", "PyTorch", "IndoBERT", "fastText", "scikit-learn"],
    summary:
      "Built and annotated a 7,265-comment Indonesian corpus and an end-to-end classification pipeline; reached 0.804 F1-macro. Published first-author at ICERA 2026.",
    problem:
      "Sentiment models trained on one kind of Indonesian text say, news  do noticeably worse on another, like social media, mostly because the vocabulary and the way words get split don’t carry over. A common fix is “vocabulary extension”: teaching the model the target domain’s words. I wanted to test whether that actually helps.",
    built: [
      "A 7,265-comment Indonesian corpus from YouTube  news comments (CNN Indonesia and KOMPASTV), each labelled by three native speakers with majority vote, tested against the IndoNLU SmSA benchmark. On top of it I compared five ways of representing the text TF-IDF, fastText, IndoBERT, and two vocabulary-extension variants  in both transfer directions, with three classifiers and SMOTEENN for class imbalance.",
    ],
    result: [
      "Vocabulary extension turned out to be double-edged: it helped slightly in one direction but hurt by 16.1 points in the other. A controlled frozen-body ablation showed the culprit wasn’t the added words it was drift in the transformer’s body from the domain-adaptive pre-training, which pulled the decision boundary toward the negative class. Freezing the body cut the penalty from 16.1 to 1.1 points, confirming it. The best setup reached 0.804 F1-macro with IndoBERT features, well above the 0.37–0.43 the classical TF-IDF approach (used by earlier Indonesian work) managed. The takeaway: use vocabulary extension selectively — only when the target domain breaks into unknown tokens far more than the model’s original training did.",
    ],
    media: [
      { src: "/images/paper-first-page.png", alt: "First page of the paper Feature Extraction Analysis for Indonesian Cross-Domain Sentiment Analysis, showing the title, the three authors, the abstract and the start of the introduction", width: 506, height: 660 },
    ],
    links: [
      { label: "paper", href: "https://ieeexplore.ieee.org/document/11666735" },
    ],
  },
  {
    slug: "tastecraft",
    title: "TasteCraft – Recipe Discovery Platform",
    year: 2025,
    kind: "Backend & Mobile Developer (team of 6)",
    tags: ["Backend", "Mobile"],
    stack: ["Laravel", "Sanctum", "MySQL", "Flutter", "Dart"],
    summary:
      "Owned the REST API and Flutter client for a recipe-discovery app.",
    problem:
      "A team of six was building a recipe-discovery app: one place to find recipes, save the ones you like, and post your own. Open submissions and comments only stay useful if an admin can step in and keep things clean.",
    built: [
      "I built the backend a REST API of 31 endpoints over a six-table schema, with recipes normalized into separate ingredients and steps. Auth runs on Sanctum tokens, and an admin role (enforced by middleware) gates a management surface for recipes, users, comments, and bookmarks, plus dashboard stats. Once the query patterns were clear, I added database indexes for the hot paths. On the client side I built the Flutter app against the API: onboarding, login, browsing, bookmarks, and comments.",
    ],
    result: [
      "A working API, admin tooling, and a Flutter app the team shipped together — the whole loop runs: sign up, browse and bookmark recipes, comment, post your own, and have an admin manage what goes live.",
    ],
    media: [
      { src: "/images/tastecraft-splash.png", alt: "TasteCraft splash screen with the logo and the words cooking recipe", width: 339, height: 628 },
      { src: "/images/tastecraft-home.png", alt: "TasteCraft home screen with a greeting, shortcuts for bookmarks, meal plan and trending, and today's recipe", width: 245, height: 488 },
      { src: "/images/tastecraft-recipe.png", alt: "TasteCraft recipe page for Gado-Gado with a video tutorial and the start of the description", width: 231, height: 456 },
    ],
    links: [
      { label: "repo", href: "https://github.com/gitHan25/TasteCraft_BE" },
    ],
  },
  {
    slug: "gohealthy",
    title: "GoHealthy – Healthy Lifestyle Application",
    year: 2024,
    kind: "Backend Developer (team of 6)",
    tags: ["Backend"],
    stack: ["Java", "Spring Boot", "MySQL"],
    summary:
      "Backend developer for a health app with scheduling, meal logging and medication reminders.",
    problem:
      "GoHealthy helps people keep healthy routines: scheduling activities, logging meals, and setting medication reminders. All of that leans on a backend that stores the right data and for reminders especially  the right times.",
    built: [
      "I was the only one on the backend (team of six). I designed a seven-table schema and built a Spring Boot REST API  26 endpoints covering auth with roles, activity and medication schedules, meal logging, and motivational content, organized in clean controller–service–repository layers. I added a scheduled job to send reminders at the right time, and I wrote unit tests for the service layer.",
    ],
    result: [
      "The interesting part was a deployment bug  two things at once. The API's CORS setup only allowed the localhost dev origin, so the client's requests were blocked until the backend was deployed with the right allowed origin. And schedule times were coming out wrong, which turned out to be a timezone mismatch  fixed by syncing the time on the deployment server. Once both were sorted, reminders fired at the right time again.",
    ],
    media: [
      { src: "/images/gohealthy-article.png", alt: "GoHealthy article page showing a health article about gout in young adults", width: 727, height: 369 },
      { src: "/images/gohealthy-meal-log.png", alt: "GoHealthy meal log: a form to add a food and its calories next to a list of logged meals", width: 742, height: 367 },
    ],
    links: [
      { label: "repo", href: "https://github.com/gitHan25/be-goHealthy" },
    ],
  },
  {
    slug: "manufacturing-planning-api",
    title: "Manufacturing Planning API",
    year: "2026",
    kind: "Capstone project (Backend Developer)",
    tags: ["Backend"],
    stack: ["Go", "Gin", "GORM", "JWT", "PostgreSQL", "MySQL"],
    summary:
      "The whole backend for a manufacturing planning tool: a Go API of around 40 endpoints across eight models, with JWT auth and token revocation.",
    problem:
      "A capstone project: a tool for planning and tracking manufacturing work  job orders, machine scheduling, operation plans with approvals, and PPIC production schedules, meant to be shown as Gantt charts. It needed a backend that could model that whole workflow and serve it to a frontend.",
    built: [
      "I built the entire backend: a Go API (Gin + GORM) of around 40 endpoints across eight models — users, job orders, machines, operation plans and their approval flow, PPIC schedules, G-code files, and a token blacklist.",
      "Auth is JWT with bcrypt, and the token blacklist means logging out actually revokes a token instead of just dropping it on the client.",
      "I kept it in clean handler–service–repository layers, with auto-migration and support for both PostgreSQL and MySQL, plus a set of tests.",
    ],
    result: [
      "The frontend didn't get finished, so there's no live app to show  this is the backend on its own: the API, the data model, and the auth.",
      "It's the most complete backend I've designed end to end, and the first large one I built in Go.",
    ],
    links: [
      {
        label: "repo",
        href: "https://github.com/gitHan25/compro-erp-fmlx/tree/main/backend",
      },
    ],
  },
];

const yearOf = (p: Project) =>
  Number.isFinite(Number(p.year)) ? Number(p.year) : -Infinity;

export const projects: Project[] = [...entries].sort(
  (a, b) => yearOf(b) - yearOf(a),
);
